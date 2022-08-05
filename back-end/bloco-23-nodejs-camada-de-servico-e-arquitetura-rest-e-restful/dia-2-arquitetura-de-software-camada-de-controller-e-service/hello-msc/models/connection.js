// hello-msc/models/connection.js
// models/connection.js
require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: 'root',
    password: 'sua_senha',
    database: process.env.MYSQL_DB_NAME });

module.exports = connection;