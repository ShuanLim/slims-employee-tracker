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

// connection to sql server and db
connection.connect(function(err) {
    if(err)throw err; 
    options();
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
            // "Update an employee role", *need to sort out*
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
            // case "Update an employee role": *need to sort out*
            //     updateEmployeeRole();
            //     break;
            case "EXIT": 
                exitApp();
                break;
            default:
                break;
        }
    })
};

// function to view departments 
function viewDepartments() {
    const query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
        if(err)throw err;
        console.table('All departments:', res);
        options();
    })
}

// function to view roles 
function viewRoles() {
    const query = 'SELECT * FROM role';
    connection.query(query, function(err, res) {
        if(err)throw err;
        console.table('All roles:', res);
        options();
    })
}

// function to view employees
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

// function to add roles
function addRole() {
    connection.query('SELECT * FROM department', function(err, res) {
        if(err)throw err;

        inquirer.prompt([
            { 
                name: 'new_role',
                type: 'input', 
                message: "What new role would you like to add?"
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the salary of this role? (Enter a salary)'
            },
            {
                name: 'Department',
                type: 'list',
                choices: function() {
                    const deptRole = [];
                    for (let i = 0; i < res.length; i++) {
                    deptRole.push(res[i].name);
                    }
                    return deptRole;
                },
            }
        ]).then(function (answer) {
            let department_id;
            for (let j = 0; j < res.length; j++) {
                if (res[j].name == answer.Department) {
                    department_id = res[j].id;
                }
            }
            connection.query(
                'INSERT INTO role SET ?', 
                {
                    title: answer.new_role,
                    salary: answer.salary, 
                    department_id: department_id
                },
                function (err, res) {
                    if(err)throw err;
                    console.log('Your new role has been added.');
                    console.table('All roles:', res);
                    options();
                })
        })
    })

};

// function to add employees
function addEmployee() {
    connection.query('SELECT * FROM role', function (err, res) {
        if(err)throw err;
        inquirer.prompt([
            {
                name: 'first_name',
                type: 'input', 
                message: "What is the employee's first name? ",
            },
            {
                name: 'last_name',
                type: 'input', 
                message: "What is the employee's last name? "
            },
            {
                name: 'manager_id',
                type: 'input', 
                message: "What is the employee's manager's ID? "
            },
            {
                name: 'role', 
                type: 'list',
                choices: function() {
                let roleArray = [];
                for (let i = 0; i < res.length; i++) {
                    roleArray.push(res[i].title);
                }
                return roleArray;
                },
                message: "What is this employee's role? "
            }
            ]).then(function (answer) {
                let role_id;
                for (let a = 0; a < res.length; a++) {
                    if (res[a].title == answer.role) {
                        role_id = res[a].id;
                        console.log(role_id)
                    }
                }
                connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    manager_id: answer.manager_id,
                    role_id: role_id,
                },
                function (err) {
                    if (err) throw err;
                    console.log('Your employee has been added.');
                    options();
                })
            })
    })
};

// function to update employee roles *need to sort out*
// function updateEmployeeRole() {

// }

// function to delete an employee *need to sort out*
// // function deleteEmployee() {

// // }

function exitApp() {
    connection.end();
};