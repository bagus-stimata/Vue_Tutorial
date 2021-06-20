const db = require('./index')
const TABLE_NAME = "employee"

async function createEmployeeTable() {
    try {
        const sql = `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (
                id serial,
                name VARCHAR(50) NOT NULL,
                gender VARCHAR(7) NOT NULL,
                departement VARCHAR(50) NOT NULL,
                about text,
                PRIMARY KEY(id)
            )`
        db.query(sql)

    } catch (error) {
        console.error(error)
    }
}

module.exports = createEmployeeTable