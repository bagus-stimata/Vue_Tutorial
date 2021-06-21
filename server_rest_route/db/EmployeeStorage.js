const db = require('./index')
const TABLE_NAME = "employee"
const TABLE_NAME_PERSON = "person"

async function createTables() {
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
    try {
        const sql = `CREATE TABLE IF NOT EXISTS ${TABLE_NAME_PERSON} (
                id serial,
                name VARCHAR(50) NOT NULL,
                gender VARCHAR(7) NOT NULL,
                about text,
                PRIMARY KEY(id)
            )`
        db.query(sql)

    } catch (error) {
        console.error(error)
    }

}


module.exports = createTables
