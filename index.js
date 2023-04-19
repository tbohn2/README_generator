const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your project:',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'What are the instructions for installing your application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What usage information would you like to include about your project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter any test instructions here:',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },
    ]) 