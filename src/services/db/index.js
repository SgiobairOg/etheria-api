const { Pool } = require('pg')

const {
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_PORT
} = process.env

const pool = new Pool({
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    port: POSTGRES_PORT,
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}