const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000
const createEmployeeTable = require('./db/EmployeeStorage')
const employees = require('./router/employees')


// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

//digunakan sebagai middle ware
// app.use(cors(corsOptions))
app.use(cors())

app.use(express.json())
app.use('/api/employees', employees)

app.listen(PORT, async() => {
    try {
        await createEmployeeTable()
        console.log(`LISTEN TO PORT ${PORT}`)
    } catch (error) {
        console.error(error)
    }
})