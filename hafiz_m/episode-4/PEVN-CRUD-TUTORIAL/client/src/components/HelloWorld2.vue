<template>
    <v-container>
        <!-- Searchbox -->
        <v-row align="center">
            <v-col cols="4">
                <v-text-field
                    v-model="search"
                    single-line
                    label="Search Employees..."
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-data-table
                    :headers="headers"
                    :items="employees"
                    :search="search"
                >
                    <!-- Delete Dialog -->
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-title class="headline">Serius mau di delete ?</v-card-title>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="primary" @click="closeDelete">Cancel</v-btn>
                                        <v-btn color="primary" @click="deleteItemConfirm">Ok</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>

                    <!-- Employee Name (Link) -->
                    <template v-slot:[`item.name`]="{ item }">
                        <router-link :to="`/details/${item.id}/${linkNeated(item.name)}`">
                            {{ item.name }}
                        </router-link>
                    </template>


                    <!-- Actions colom -->
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon
                            
                            class="mr-2"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            @click="deleteItem(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>

                    <!-- <template v-slot:[`item.name`] = "{ item }"> 
                        <router-link :to="`/details/${item.id}/${item.name}`">
                            {{ item.name }}
                        </router-link>
                    </template> -->

                </v-data-table>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    data(){
        return{
            search: '',
            dialogDelete: false,
            selectedItemIndex: -1,
            headers: [
                {text: 'ID', value: 'id'},
                {text: 'Name', value: 'name'},
                {text: 'Departement', value: 'departement'},
                {text: 'Actions', value: 'actions'}
            ],
            // Employees data dummies
            employees: [
                {
                    "id": 1,
                    "name": "Ishigami Senku",
                    "gender": "Male",
                    "departement": "Engineering",
                    "about": "Hobi science dan Engineering"
                },
                {
                    "id": 5,
                    "name": "Zero Two",
                    "gender": "Female",
                    "departement": "Engineering",
                    "about": "Heroine di anime Darling in the FranXX"
                } 
            ]
        }
    },
    methods: {
        deleteItem(item){
            console.log(item)
            this.selectedItemIndex = this.employees.indexOf(item)
            this.dialogDelete = true
            // console.log(this.selectedItemIndex)
        },
        closeDelete(){
            this.dialogDelete = false
            this.$nextTick(() => {
                this.selectedItemIndex = -1
            })
        },
        deleteItemConfirm(){
            this.employees.splice(this.selectedItemIndex, 1)
            this.closeDelete()
        }
    }
}
</script>