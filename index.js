// Makes inquirer and fs usable in Javascript
const inquirer = require('inquirer');
const fs = require('fs');

// Creates a variable that takes in the user input and places them into a template literal formatted as a README file
const readMe = ({ title, description, instructions, usage, license, contributing, test, github, linkedin, email }) =>
    // shields.io is used to create an image diplaying what license is used for the user's project
    `
[![License](https://img.shields.io/static/v1?label=License&message=${license}&color=brightgreen)](#license)

# ${title}

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contribution</a></li>
    <li><a href="#test">Test</a></li>
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

The application repository found at https://www.github.com/${github}
`;

// The user is prompted to type or select responses to create the various parts of the README 
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
            type: 'list',
            name: 'license',
            message: 'Which license is used for the project?',
            choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0',
                'BSD 2-clause "Simplified" license', "BSD 3-clause 'New' or 'Revised' license", 'BSD 3-clause Clear license', ' Creative Commons license family',
                'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License',
                'Educational Community License v2.0', 'Eclipse Public License 1.0', ' Eclipse Public License 2.0', 'European Union Public License 1.1',
                'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License v3.0',
                'GNU Lesser General Public License family', 'GNU Lesser General Public License v2.1', '  GNU Lesser General Public License v3.0', ' ISC',
                'LaTeX Project Public License v1.3c', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0',
                'PostgreSQL License', 'SIL Open Font License 1.1', 'University of Illinois/NCSA', 'The Unlicense', 'zLib License']
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
            message: 'What is your GitHub username?',
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
    // The answers are used to write a new file named 'newREADME.md'
    .then((answers) => {
        // Replaces spaces in licence selection with hyphens in order to be usable for image creation using shields.io
        answers.license = answers.license.replace(/ /g, "-")
        // Creates a variable equal to the function readMe() with the user's answers
        const newReadMe = readMe(answers);
        // A new markdown file is created using the newReadMe variable
        fs.writeFile('newREADME.md', newReadMe, (err) =>
            err ? console.log(err) : console.log('README created as newREADME.md')
        )
    })