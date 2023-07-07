import mysql from "mysql";

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'abc12345',
    database: 'pratical_register'
});