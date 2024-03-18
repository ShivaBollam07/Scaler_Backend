const mysql = require("mysql2");
const dotenv =  require('dotenv');
dotenv.config();
const pool = mysql.createPool({
    host: process.env.MYSQL_HOSTNAME,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();   

module.exports.pool = pool; 



