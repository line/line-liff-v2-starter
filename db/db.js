const pg = require('pg');
require('dotenv').config();

exports.pool = new pg.Pool({
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    port: 5432,
    password: process.env.PASSWORD,
});