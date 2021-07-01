<template>
    <div>Hello World Employee Detil

        <div v-if="employee" class="content ml-16">
        <h2>{{ employee.id }}</h2>
        <p>{{ employee.name }}</p>
        <p>{{ employee.gender }}</p>
        <p>{{ employee.departement }}</p>
        </div>



    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'EmployeeDetail',
    data() {
        return {
            employee: null
        }
    },
    created() {
        this.fecthData()
    },    
    methods: {
        fecthData(){
            axios
                .get(`http://192.168.1.30:3000/api/employees/${this.$route.params.id}`)
                .then( response => {
                    this.employee = response.data[0]
                })
                .catch(error => console.log(error))
        }
    },
}
</script>