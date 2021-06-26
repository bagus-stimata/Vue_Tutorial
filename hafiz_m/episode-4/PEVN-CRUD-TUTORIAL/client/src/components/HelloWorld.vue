<template>
<div>
  <v-container>
    <v-row>
      <v-col>
        {{info}}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search Employee"
        >
        </v-text-field>
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
                                        <v-btn color="friendly" @click="deleteItemConfirm">Ok</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
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

        
        </v-data-table>
      </v-col>
    </v-row>
    </v-container>
</div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        search: '',
        dialogDelete: false,
        selectedItemIndex: -1,
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Name', value: 'name' }
          ,
          // { text: 'Gender', value: 'gender' },
          // { text: 'Department', value: 'departement' },
          { text: 'Actions', value: 'actions' }
        ],
         // Employees data dummies
            employees: [
                {
                    "id": 1,
                    "name": "Ishigami Senku"
                    // ,
                    // "gender": "Male",
                    // "departement": "Engineering",
                    // "about": "Hobi science dan Engineering"
                },
                {
                    "id": 2,
                    "name": "Chrome"
                    // ,
                    // "gender": "Male",
                    // "departement": "Engineering",
                    // "about": "Hobi science dan Engineering"
                },
                {
                    "id": 3,
                    "name": "Eren Yeager"
                    // ,
                    // "gender": "Male",
                    // "departement": "Engineering",
                    // "about": "Hobi science dan Engineering"
                },
                {
                    "id": 4,
                    "name": "Itadori Yuuji"
                    // ,
                    // "gender": "Male",
                    // "departement": "Engineering",
                    // "about": "MC di anime Jujutsu Kaisen"
                },
                {
                    "id": 5,
                    "name": "Zero Two"
                    ,
                    // "gender": "Female",
                    // "departement": "Engineering",
                    // "about": "Heroine di anime Darling in the FranXX"
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
    },
   mounted(){
        axios
            .get('http://localhost:8085/getListEmployee')
            // .get('http://localhost:3000/api/employees')
            .then(response => {
                this.employees = response.data
                // console.log(response.data)
            })
            .catch(error => console.log(error))
    }

   
  }
</script>
