const inquirer = require('inquirer');
const fs = require('fs');

function readMe(title, description, instructions, usage, test, github, linkedin, email) {
    `
# ${title}

## Description

${description}

## Installation instructions

${instructions}

## Usage

${usage}

## Test

${test}

## Questions

Feel free to contact the developer with any further questions:
    LinkedIn: ${linkedin}
    Email: ${email}

The application repository found at [${github}]${github}
`
}

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
            name: 'github',
            message: 'Enter your GitHub URL.',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
    ])
    .then((answers) => {
        console.log(answers);
    }
    )