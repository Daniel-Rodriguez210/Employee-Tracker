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