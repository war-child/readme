// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "Project title?"
},
{
    type: "input",
    name: "description",
    message: "Project description?"
},
{
    type: "input",
    name: "installation",
    message: "Project app installation instructions?"
},
{
    type: "input",
    name: "usage",
    message: "Project app usage?"
},
{
    _type: "input",
    get type() {
        return this._type;
    },
    set type(value) {
        this._type = value;
    },
    name: "credits",
    message: "Project collaborators?"
},
{
    type: "list",
    name: "license",
    message: "Select license:",
    choices: ["Apache license 2.0", "MIT license", "GNU GPLv3"]
},
{
    type: "input",
    name: "github",
    message: "GitHub username?",
},
{
    type: "input",
    name: "email",
    message: "Email?"
},
{
    type: "input",
    name: "tests",
    message: "Provide tests for the app:"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), "utf8", function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Success... written to ${fileName}.md.`);
        }
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            // console.log(response);
            writeToFile(response.title, response);
        })
        .catch((error) => {
            console.log(error);
        })
}

// Function call to app
init();
