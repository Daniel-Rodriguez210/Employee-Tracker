DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

-- Department Table

CREATE TABLE department(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
name VARCHAR(30) NOT NULL
);

-- Role Table
CREATE TABLE role(
id INT PRIMARY KEY AUTO_INCREMENT, 
title VARCHAR(30),
salary DECIMAL,
department_id INT
);

-- Employee
CREATE TABLE employee(
id INT PRIMARY KEY, 
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT NULL
);

--Starting Point for Employees
INSERT INTO employee (first_name, last_name)
VALUES ("Michael", "Scott");

INSERT INTO employee (first_name, last_name)
VALUES ("Dwight", "Schrute");

INSERT INTO employee (first_name, last_name)
VALUES ("Jim", "Halpert");

INSERT INTO employee (first_name, last_name)
VALUES ("Pam", "Beesly");

INSERT INTO employee (first_name, last_name)
VALUES ("Meredith", "Palmer");

INSERT INTO employee (first_name, last_name)
VALUES ("Creed", "Bratton");

INSERT INTO employee (first_name, last_name)
VALUES ("Kevin", "Malone");

INSERT INTO employee (first_name, last_name)
VALUES ("Oscar", "Martinez");

INSERT INTO employee (first_name, last_name)
VALUES ("Kelly", "Kapoor");

INSERT INTO employee (first_name, last_name)
VALUES ("Toby", "Flenderson");

--Starting Values for Different Roles
INSERT INTO role (title, salary)
VALUES ("Regional Manager", "60000");
INSERT INTO role (title, salary)
VALUES ("Salesman", "40000");
INSERT INTO role (title, salary)
VALUES ("Office Manager", "35000");
INSERT INTO role (title, salary)
VALUES ("Supplier Relations", "40000");
INSERT INTO role (title, salary)
VALUES ("Quality Assurance", "40000");
INSERT INTO role (title, salary)
VALUES ("Accountant", "45000");
INSERT INTO role (title, salary)
VALUES ("Customer Service", "30000");
INSERT INTO role (title, salary)
VALUES ("Human Resources", "50000");

--Table for Departments
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Customer Relations");
INSERT INTO department (name)
VALUES ("Administrative");