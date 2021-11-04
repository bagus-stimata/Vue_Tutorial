<template>
<div>

    <v-container>
    <v-row>
      <v-col>
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

          <!-- bagian dari items adalah item. ini merupakan reserved word -->
        
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
                                    <v-card-title class="headline">Do you want to delete this data ?</v-card-title>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="primary" @click="closeDelete">Cancel</v-btn>
                                        <v-btn color="primary" @click="deleteItemConfirm">Ok</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>

                        <v-toolbar flat>
                            <v-dialog v-model="dialogDelete2" max-width="500px">
                                <v-card>
                                    <v-card-title class="headline">Di hapus kah kak ?</v-card-title>
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
                    <template v-slot:[`item.actions1`]="{ item }">
                        <router-link style="text-decoration:none" :to="`/edit/${item.id}/${linkNeated(item.name)}`">
                          <v-icon
                              class="mr-2"
                          > mdi-pencil
                          </v-icon>
                        </router-link>

                        <v-icon
                            @click="deleteItem1(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>



                    <template v-slot:[`item.actions2`] = "{ item }">
                        <v-icon
                            @click="deleteItem2(item)"
                        >
                          mdi-delete-circle
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
        dialogDelete2: false,
        selectedItemIndex: -1,
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Name', value: 'name' }
          ,
          { text: 'Gender', value: 'gender' },
          { text: 'Department', value: 'departement' },
          {text: 'about', value: 'about'},
          { text: 'Actions1', value: 'actions1' },
          { text: 'Actions2', value: 'actions2' }
        ],
         // Employees data dummies
            employees: [
                {
                    "id": 1,
                    "name": "Ishigami Senku"
                    ,
                    "gender": "Male",
                    "departement": "Engineering",
                    "about": "Hobi science dan Engineering"
                },
                {
                    "id": 2,
                    "name": "Chrome"
                    ,
                    "gender": "Male",
                    "departement": "Engineering",
                    "about": "Hobi science dan Engineering"
                },
                {
                    "id": 3,
                    "name": "Eren Yeager"
                    ,
                    "gender": "Male",
                    "departement": "Engineering",
                    "about": "Hobi science dan Engineering"
                },
                {
                    "id": 4,
                    "name": "Itadori Yuuji"
                    ,
                    "gender": "Male",
                    "departement": "Engineering",
                    "about": "MC di anime Jujutsu Kaisen"
                },
                {
                    "id": 5,
                    "name": "Zero Two"
                    ,
                    "gender": "Female",
                    "departement": "Engineering",
                    "about": "Heroine di anime Darling in the FranXX"
                } 
            ]

      }
    },

   methods: {
       linkNeated(link){
           return link.replace(/\s+/g, '-').toLocaleLowerCase()
       },
        deleteItem1(item){
            
            console.log(item)
            this.selectedItemIndex = this.employees.indexOf(item)            
            this.dialogDelete = true
            // console.log(this.selectedItemIndex)
        },

        deleteItem2(item2){
            console.log( ">>" + item2) //pemanggilnya harus menggunakan nana parameter item
            this.selectedItemIndex = this.employees.indexOf(item2)
            this.dialogDelete2 = true
            console.log( "##" + this.selectedItemIndex)
        },

        closeDelete(){
            this.dialogDelete = false
            this.dialogDelete2 = false
            this.$nextTick(() => {
                this.selectedItemIndex = -1
            })
        },
        deleteItemConfirm(){

            const deletedEmployee = this.employees[this.selectedItemIndex]

            axios
                .delete(`http://192.168.1.30:3000/api/employees/${deletedEmployee.id}`)
                .then( response => {
                    this.employees.splice(this.selectedItemIndex, 1)        
                    this.closeDelete
                    console.log("DELETE SUCCESS >> ", response.data)
                })
                .catch( error => {
                    console.log(error)
                })

            
            this.closeDelete()


            // const deleteEmployee = this.employees[this.selectedItemIndex]            
            // console.log(deleteEmployee.id)

            // axios
            //     .delete(`http://localhost:3000/api/employees/${deleteEmployee.id}`)
            //     .then(response => {
            //         this.employees.splice(this.selectedItemIndex, 1)
            //         this.closeDelete()
            //         console.log("DELETE SUCCESS", response.data)
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })

        }
    },
   mounted(){
        axios
            // .get('http://localhost:8085/getListEmployee')
            .get('http://192.168.1.30:3000/api/employees')
            .then(response => {
                this.employees = response.data
                // console.log(response.data)
            })
            .catch(error => console.log(error))
    }

   
  }
</script>
