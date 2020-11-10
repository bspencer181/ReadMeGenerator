const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');
const generateMarkdown = title => {
    return `

    `
}
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project ?',
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
        message: 'List steps requried to view your project',
        name: 'questions',
      },
  ])
  .then((response) => {
      const markdown = generateMarkdown(response)
      const fileName = `${response.title.split(' ').join('')}.html`
      fs.writeFile(fileName, data, err => {
          err ? console.error(err): console.log("Success! Your README.md file has been generated!")
      })
  }
 );