// dependencies used
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table")

// connection to sql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root1234",
    database: "employees_db"
});

