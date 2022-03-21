const inquirer = require("inquirer");
const db = require("./db/connection");
const cTable = require("console.table");

const optionsMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "Which task would you like to complete(Required)?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Update an Employee Role",
        ],
        validate: (optionInput) => {
          if (optionInput) {
            return true;
          } else {
            console.log("Please select one of the preceeding options!.");
          }
        },
      },
    ])
    .then((answer) => {
      switch (answer.option) {
        case "View All Departments":
          viewDepartments();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "View All Employees":
          viewEmployees();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployee();
          break;
      }
    });
};

// View all departments
const viewDepartments = () => {};

// Add a department
const addDepartment = () => {};

// View all roles
const viewRoles = () => {};

// Add a role
const addRole = () => {};

// View all employees
const viewEmployees = () => {};

// Add an employee
const addEmployee = () => {};
// Update an employee
const updateEmployee = () => {};

// create DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
});
