const express = require('express')
const router = express.Router()
const db = require('../db/index')

router.post('/', async(req, res, next) => {
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
router.put('/:id', async(req, res, next) => {
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
router.delete('/:id', async(req, res, next) => {
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

router.get('/', async(req, res, next) => {
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

module.exports = router