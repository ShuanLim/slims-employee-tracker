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

// prompts to user w/ options for selection
function options() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "Welcome to the employee database. What would you like to do?",
        choices: [
            "View the departments",
            "View the roles",
            "View the employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "EXIT"
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "View the departments":
                viewDepartments();
                break;
            case "View the roles":
                viewRoles();
                break;
            case "View the employees":
                viewEmployees();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update an employee role":
                updateEmployeeRole();
                break;
            case "EXIT": 
                exitApp();
                break;
            default:
                break;
        }
    })
};

function viewDepartments() {
    const query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
        if(err)throw err;
        console.table('All departments:', res);
        options();
    })
}

function viewRoles() {
    const query = 'SELECT * FROM role';
    connection.query(query, function(err, res) {
        if(err)throw err;
        console.table('All roles:', res);
        options();
    })
}

function viewEmployees() {
    const query = 'SELECT * FROM employee';
    connection.query(query, function(err, res) {
        if(err)throw err;
        console.log(res.length + ' employees found!');
        console.table('All employees:', res);
        options();
    })
}

// function to add a department 
function addDepartment() {
    inquirer.prompt([
        {
            name: 'newDepartment', 
            typer: 'input', 
            message: 'What department would you like to add?'
        }
    ]).then(function (answer) {
        connection.query(
            'INSERT INTO department SET ?',
            { 
                name: answer.newDepartment 
            });
            const query = 'SELECT * FROM department';
            connection.query(query, function(err,res) {
                if(err)throw err;
                console.log('Your department has been added.');
                console.table('All departments:', res);
                options();
            })
    })

};

function addRole() {

}

function addEmployee() {

}

function updateEmployeeRole() {

}

function exitApp() {

};