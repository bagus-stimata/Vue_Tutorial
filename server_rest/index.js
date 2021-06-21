const express = require('express')
const app = express()
const PORT = 3000


const db = require('./db/index')
const createEmployeeTable = require('./db/EmployeeStorage')

app.get('/', async(req, res) => {
    res.send("Cukup jalankan app.listen(PORT.....) dibawah dirubah")
})

//Inget agar json pada method post dapat digunakan, maka gunakan ini
app.use(express.json())

app.post('/api/employee', async(req, res, next) => {
    try {
        const employee = req.body
        const sqlText = `INSERT INTO employee (name, gender, departement, about) VALUES ($1, $2, $3, $4) RETURNING * `
        const sqlParams = [employee.name, employee.gender, employee.departement, employee.about]
        const result = (await db.query(sqlText, sqlParams)).rows
        res.json(result)
            // console.log(employee)
    } catch (error) {
        console.error(error)
        next(error)
    }
})
app.put('/api/employee/:id', async(req, res, next) => {
    try {
        const employee = req.body
        const sqlText = `UPDATE employee SET name = $1, gender = $2, departement = $3, about = $4 WHERE id = $5 RETURNING * `
        const sqlParams = [employee.name, employee.gender, employee.departement, employee.about, req.params.id]
        const result = (await db.query(sqlText, sqlParams)).rows
        res.json(result)
    } catch (error) {
        console.error(error)
        next(error)
    }
})
app.delete('/api/employee/:id', async(req, res, next) => {
    try {
        const sqlText = `DELETE FROM employee WHERE id = $1 RETURNING *`
        const sqlParams = [req.params.id]
        const result = (await db.query(sqlText, sqlParams)).rows
        res.json(result)
    } catch (error) {
        console.error(error)
        next(error)
    }
})

app.get('/api/employee', async(req, res, next) => {
    try {
        let sql = `SELECT * FROM employee`
        let result = (await db.query(sql))
            // res.send(result)
        res.send(result.rows)
    } catch (error) {
        console.error(error)
        next(error)
    }
})


// Gunakan salah satu dari app.listen dibawah ini
// app.listen(PORT, () => {
//     console.log(`listen to port ${PORT}`)
// })

app.listen(PORT, async() => {
    try {
        await createEmployeeTable()
        console.log(`listen to port ${PORT}`)
    } catch (error) {
        console.error(error)
    }
})