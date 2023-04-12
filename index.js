const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./assets/")

function init (){
    const questions = [
    {
      type: 'input',
      message: 'What is your Github user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'readme generator',
    },
    {
      type: 'input',
      message: 'Brief Descrisption of this project?:',
      name: 'describe',
    },
    {
        type: 'input',
        message: 'Installation instructions for this projects?:',
        name: 'describe',
      },
      {
        type: 'input',
        message: 'Was this tested?:',
        name: 'tested',
      },
  ];

  inquirer
  .prompt(questions)
  .then((answers) => {
      const readMeContent = generateMarkdown(answers);
      writeToFile("README.md", readMeContent);
  })

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(error) : console.log("Created README!")
    )
}
}
init();