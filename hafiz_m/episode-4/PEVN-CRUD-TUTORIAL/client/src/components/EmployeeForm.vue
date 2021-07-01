<template>
    <v-form v-model="valid">
        <v-container v-if="employee">
            <h1 v-if="registration">Registration Form </h1>
            <h1 v-if="edit">Edit Form </h1>
            <v-row>
                <v-col cols="5">
                    <v-text-field
                        v-model = "editedItem.name"
                        label = "Employee Fullname"
                        :rules="nameRules"
                        :counter="10"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols = "5">
                    <v-select
                        v-model = "editedItem.gender"
                        :items = "genderList"
                        label = "Gender"
                        :rules="nameRules"
                        :counter="10"
                        required
                    >
                    </v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols ="5">
                    <v-autocomplete
                        v-model = "editedItem.departement"
                        :items = "departementList"
                        label = "Departement"
                        :rules="nameRules"
                        :counter="10"
                        required
                    ></v-autocomplete>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols ="5">
                    <v-textarea
                        outlined
                        v-model = "editedItem.about"
                        label = "Tentang Employee"
                    ></v-textarea>
                </v-col>


                <v-dialog
                    v-model="dialog"
                    width="500px"
                >
                    <v-card>
                        <v-card-title>
                            <p v-if="success && registration">Employee Registration Success</p>
                            <p v-if="!success && registration">>Employee Registration Fail</p>
                            <p v-if="success && edit">Edit Employee Success</p>
                            <p v-if="!success && edit">Edit Employee Fail</p>
                        </v-card-title>
                        <v-card-text>
                            <p v-if="success">You can check data in employee table</p>
                            <p v-if="! success">Try again</p>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-btn
                                v-if="edit"
                                color="primary"
                                @click.stop = "dialog = !dialog"
                            >Continue Editing</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                @click.stop="dialog = ! dialog"
                                :to= "'/'"
                                >
                                Ok
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-row>

            <!-- Action Button -->
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="1">
                    <v-btn
                        color="primary"
                        @click.stop="save"
                        :disabled="!valid"
                    >Save</v-btn>
                </v-col>

            </v-row>

        </v-container>
    </v-form>

</template>

<script>
import axios from 'axios'
export default {
    props: {
        registration: {
            type: Boolean,
            default: false
        },
        edit: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            employee: null,
            genderList: ["Male", "Female"],
            departementList: ["Enginering", "IT", "Humana Resource", "Produksi"],
            dialog: false,
            editedItem:{
                name: '',
                gender: '',
                departement: '',
                about: ''
            },
            isOperationSuccess: false,
            valid: false,
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
        }
    },
    computed:{
        success(){
            return this.isOperationSuccess
        }
    },
    methods: {
        save() {
            if (this.registration){
                axios({
                    method: 'post',
                    url: 'http://192.168.1.30:3000/api/employees/',
                    data: this.editedItem
                })
                .then(response => {
                    this.isOperationSuccess = true
                    this.dialog = true
                    console.log(response.data)
                })
                .catch(error => {
                    this.isOperationSuccess = false
                    this.dialog = true
                    console.log(error)
                })
            }else if (this.edit) {
                const id = this.$route.params.id
                axios({
                        method: 'put',
                        url: `http://192.168.1.30:3000/api/employees/${id}`,
                        data: this.editedItem
                    })
                    .then(response => {
                        this.isOperationSuccess = true
                        this.dialog = true
                        console.log(response.data)
                    })
                    .catch(error => {
                        this.isOperationSuccess = false
                        this.dialog = true
                        console.log(error)
                    })
            }
        },
    
    },
    created() {
        if(this.edit){
            axios
                .get(`http://192.168.1.30:3000/api/employees/${this.$route.params.id}`)
                .then( response => {
                    this.employee = response.data[0]
                    this.editedItem =  this.employee
                })
                .catch(error => console.log(error))
        }
        if (this.registration){
            this.registration = this.editedItem
        }
    }
}
</script>