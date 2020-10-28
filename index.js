const mysql = require("mysql");
const inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "DanielMySQL1@",
  database: "employee_tracker_db"
});

connection.connect(function(err) {
  if (err) throw err;
    runSearch();
});


// First function once the user starts they'll be prompted to select through the menu and begin. 
function runSearch() {
  inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees By Department",
          "View All Employees By Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager"
        ]
})
.then(function(answer) {
  switch (answer.action) {
  case "View All Employees":
    employeeSearch();
    break;

  case "View All Employees By Department":
    departmentSearch();
    break;

  case "View All Employees By Manager":
    managerSearch();
    break;

  case "Add Employee":
    employeeAdd();
    break;

  case "Remove Employee":
    removeEmployee();
    break;
  
  case "Update Employee Role":
    updateEmployeeRole();
    break;

  case "Update Employee Manager":
    updateEmployeeManager();
    break;
  }
});
}

function employeeSearch() {
  inquirer
    .prompt({
      name: "employee",
      type: "input",
      message: "Which employee would you like to search for?"
    })
    .then(function(answer) {
      var query = "SELECT * FROM employee";
      connection.query(query, { employee: answer.first_name}, function(err, res) {
        for (var i = 0; i < res.length; i++) {}
        console.table(res);
        runSearch();
      });
    });
}

function departmentSearch() {
  inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "Which department would you like to search for?"
    })
    .then(function(answer) {
      var query = "SELECT * FROM department";
      connection.query(query, { employee: answer.name}, function(err, res) {
        for (var i = 0; i < res.length; i++) {}
        console.table(res);
        runSearch();
      });
    });
}

function managerSearch() {
  inquirer
    .prompt({
      name: "manager",
      type: "input",
      message: "Which manager would you like to search for?"
    })
    .then(function(answer) {
      var query = "SELECT * FROM employee";
      connection.query(query, { employee: answer.manager_id}, function(err, res) {
        for (var i = 0; i < res.length; i++) {}
        console.table(res);
        runSearch();
      });
    });
}

