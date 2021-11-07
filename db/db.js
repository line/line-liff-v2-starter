const { Pool } = require('pg');
require('dotenv').config();

exports.pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});