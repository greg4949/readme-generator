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
       /* {
            type: 'input',
            name: 'usage',
            message: 'Enter description of usage',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter license type',
        },  {
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
        }, */  
    ])
    .then((data) => {
        let filename = './readme.md'
        let title = data.title
        let description = data.description
        let installation = data.installation
        
   
        let readme = 
        `# ${title}

        ## Description
        
        ${description}
        
        ## Installation Instructions`
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
