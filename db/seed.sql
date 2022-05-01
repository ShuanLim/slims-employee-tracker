USE employees_db;

INSERT INTO department (name)
VALUES
('Engineering'),
('Human Resources'),
('Sales & Marketing'),
('Management'),
('Legal'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Sys Admin', 100000, 1),
('Front-End Dev', 80000, 2),
('Project Manager', 125000, 3),
('Sales Lead', 70000, 4),
('Accountant', 80000, 5),
('HR Rep', 75000, 6,);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Stacy', 'Young', 1),
('Sam', 'Smith', 2),
('Tyler', 'Durden', 3),
('David', 'Baker', 4),
('Jesse', 'Parker', 5),
('Austin', 'Lewis', 6),
