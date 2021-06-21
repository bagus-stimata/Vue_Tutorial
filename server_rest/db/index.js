const { query } = require('express')
const { Pool } = require('pg')
    /*
     * lakukan instalasi dahulu -> # npm install dotenv
     * Buat file ".env" DENGAN ISI variable
     * lalu deklarasikan seperti dibawah
     */
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

/**
 * SUPAYA MODUL INI DAPAT DIBACA DI SELURUH APLIKASI maka
 * module.exports seperti dibawah ini
 */
module.exports = {
    async query(text, params) {
        const start = Date.now()
        const result = pool.query(text, params)
        const duration = Date.now() - start
        console.log('executed query ', { text, duration, rows: result.rowCount })
        return result
    }
}