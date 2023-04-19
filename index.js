const inquirer = require('inquirer');
const fs = require('fs');

function readMe(title, description, instructions, usage, license, contributing, test, github, linkedin, email) {
    `
# ${title}

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#test">Roadmap</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

## Description

${description}

## Installation

${instructions}

## Usage

${usage}

## License

${license}

## Contribution

${contributing}

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
            name: 'license',
            message: 'Which license is used for the project?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What contributing guidelines are in place for this application?',
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