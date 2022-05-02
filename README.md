# Slim's Employee Tracker

## Description

A Node.JS CLI application designed to view, track, and manage company employees.
This application utilizes Node.JS, Inquirer, and MySQL.

## Table Of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation Method](#installation-method)
- [How To Use](#how-to-use)
- [Screenshots](#screenshots)
- [Contributions](#contributions)

## User Story

```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Installation Method

Run the following commands prior to using the application:

```
npm init
```

```
npm i
```

```
npm i mysql2
```

```
npm i console.table
```

```
npm i inquirer
```

## How To Use

Run the command below from the js directory of the app:

```
node tracker.js
```

Then answer the prompted questions.

## Screenshots

#### Start Screen

![startScreen](https://user-images.githubusercontent.com/79289373/166171841-4bfd488d-df45-48a3-8f13-69c594e55946.png)

#### View Department

![viewDept](https://user-images.githubusercontent.com/79289373/166171866-fabf9b9d-c03a-4da9-b97a-858729f522ce.png)

#### View Roles

![viewRoles](https://user-images.githubusercontent.com/79289373/166171888-28532deb-84b7-45df-9383-a696f84cf38b.png)

#### View Employees

![viewEmployee](https://user-images.githubusercontent.com/79289373/166172848-12b7718d-fb8a-4eb0-9134-1e26a5edfae7.png)

#### Add Department

![addDept](https://user-images.githubusercontent.com/79289373/166172001-c7253683-dc37-4a93-a598-1103e9ab5ff7.png)

#### Add Role

![addRole](https://user-images.githubusercontent.com/79289373/166171927-5b10ac22-f698-4294-9a9a-56457d4b7207.png)

#### Add Employee

![addEmployee](https://user-images.githubusercontent.com/79289373/166172034-8a2313fd-ee71-4052-8a20-690ab6afe3e6.png)

## Link to video demonstration

<a href='https://drive.google.com/file/d/1HmXARB_fRW87RIcYFkU3iM-YSy52u6BM/view'>Video Demonstration</a>

## Contributions

<a href='https://github.com/ShuanLim'>Shuan Lim</a>

Contact me via <a href='shuanmlim@gmail.com'>email</a>
