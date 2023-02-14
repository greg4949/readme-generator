// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter project description',
        },
 
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information',
        },
      {
            type: 'list',
            name: 'license',
            message: 'Enter license type',
            choices: ['Apache','MIT','BSD2','GPLv3']
        },  
        {
            type: 'input',
            name: 'contributions',
            message: 'Enter contribution guidelines',
        },  {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions',
        }, 
        {
            type: 'input',
            name: 'github',
            message: 'Enter GitHub username',
        },  
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address for additional questions',
        }, 
    ])
    .then((data) => {
        let filename = './readmesample.md'
        let title = data.title
        let description = data.description
        let installation = data.installation
        let usage = data.usage
        let contribution=data.contribution
        let tests = data.test
        let github = data.github
        let email =data.email
        let license = data.license
        
        function getBadge (license) {
            let badges = {
                Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                BSD2: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
                GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            };
            return badges[license]
        }

        let badge =getBadge(license)

        function getLicenseDesc (license) {
            let licenses = {
                Apache: 'Licensed under Apache License version 2.0.  Click here for additional information http://www.apache.org/licenses/LICENSE-2.0.',
                MIT: 'Licensed under the MIT License. Click here for additional information https://opensource.org/licenses/MIT.',
                BSD2: 'Licensed under the 2-Clause BSD License.  Click here for additional information https://opensource.org/licenses/BSD-2-Clause',
                GPLv3: 'Licensed under GNU General Public License version 3.  Click here for additional information https://www.gnu.org/licenses/gpl-3.0',
            };
            return licenses[license]
        }

        let licenseDesc =getLicenseDesc(license)
        
        
   
        let readme = 
`${badge}

# ${title} 

## Description
==============
        
${description}

## Table of Contents

1.  [Installation](#installation)
2.  [Usage](#usage)
3.  [Contribution Guidelines](#contribution-guidelines)
4.  [Tests](#tests)
5.  [Licensing](#licensing)
6.  [Questions](#questions)
        
## Installation

${installation}

## Usage

${usage}

## Contribution Guidelines

${contribution}

## Tests

${tests}

## Licensing

${licenseDesc}

## Questions

Github username: ${github}

To reach me with additional questions, please send email to ${email} `


       fs.writeFile(filename, readme, (err) =>
        err ? console.log(err) : console.log('Success!')
        )
    
       
    })  


// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
