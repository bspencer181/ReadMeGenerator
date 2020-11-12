const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util")

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description for your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'List any steps required to intall your project for the Installation section.',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide examples of your project in use for the Usage section.',
        name: 'usage',
      },
    {
        type: 'list',
        message: 'Choose a license for your project.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
      },   
       {
        type: 'input',
        message: 'Provide guidelines for other developers to contribute to your project.',
        name: 'contributing',
      },   
       {
        type: 'input',
        message: 'Provide any tests for your project and provide instructions on how to run them.',
        name: 'tests',
      },  
        {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Git',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
  ])

const generateMarkdown = (answers) => {
    return `
    # Description  
    ${answers.description}
    <img src= "https://img.shields.io/badge/License-${answers.license}-">
    
    # Table of Contents  
    * [Installation](#installation)  
    * [Usage](#usage) 
    * [License](#license)
    * [Contributing](#contriuting) 
    * [Tests](#tests)
    * [Questions](#questions)
    
    # Installation  
    ${answers.installation}
    
    # Usage
    ${answers.usage}
    
    # License  
    ${answers.license}
    
    # Contributing  
    ${answers.contributing}
    
    # Tests  
    ${answers.tests}
    
    # Questions
    ${answers.Git}, ${answers.email}
    `
};

promptUser()
  .then((answers) => writeFileAsync ("index.md", generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to index.md'))
  .catch((err) => console.error(err));