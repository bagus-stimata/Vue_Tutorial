const express = require('express')
const app = express()
const PORT = 3000


// const db = require('./db/index') sudah tidak dipakai
const createTables = require('./db/EmployeeStorage')

const employee = require('./router/employee')
//--> apa pun http method yang mengandung /api/employe maka jalankan employee.js
app.use('/api/employee', employee) 


app.get('/', async(req, res) => {
    res.send("Hello World mas oke deh")
})

//Inget agar json pada method post bisa maka gunakan ini
app.use(express.json())


// app.listen(PORT, () => {
//     console.log(`listen to port ${PORT}`)
// })
app.listen(PORT, async() => {
    try {
        await createTables()
        console.log(`listen to port ${PORT}`)
    } catch (error) {
        console.error(error)
    }
})