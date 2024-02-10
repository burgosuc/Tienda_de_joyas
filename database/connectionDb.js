const { Pool } = require('pg')
require('dotenv').config()
const format = require('pg-format')

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '',
  database: 'joyas',
  allowExitOnIdle: true
})

module.exports = { pool, format }
