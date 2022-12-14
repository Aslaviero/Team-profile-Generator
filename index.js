// calling in all other files
const Manager = require("./lib/Manager.js");
const generateTeam = require("./src/template.js")
const path = require("path");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs")
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "myteam.html");

teamArray = [];


// Function to create questionnaire prompt
  function createTeam() {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee are you wanting to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern"]
    }]).then(function (userInput) {
      switch (userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();

      }
    })
}

// Questions for new employees
function addManager() {
  inquirer.prompt([

    {
      type: "input",
      name: "managerName",
      message: "What is the manager's name?"
    },

    {
      type: "input",
      name: "managerId",
      message: "What is the manager's employee ID number?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email address?"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficenumber);
    teamArray.push(manager);
    createTeam();
  });

}


function addEngineer() {
  inquirer.prompt([

    {
      type: "input",
      name: "engineerName",
      message: "What is the name of the engineer?"
    },

    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's employee ID?"
    },

    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email?"
    },

    {
      type: "input",
      name: "engineerGithub",
      message: "What the engineers github?"
    }

  ]).then(answers => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    teamArray.push(engineer);
    createTeam();
  });

}

function addIntern() {
  inquirer.prompt([

    {
      type: "input",
      name: "internName",
      message: "What is the name of the intern?"
    },

    {
      type: "input",
      name: "internId",
      message: "What is their intern's ID number?"
    },

    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email?"
    },

    {
      type: "input",
      name: "internSchool",
      message: "What school does the intern go to?"
    }

  ]).then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    teamArray.push(intern);
    createTeam();
  });

}
// Creating new html file with the new team
function htmlBuilder() {
  console.log("New Team Created!!!")

  fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
}

createTeam();



