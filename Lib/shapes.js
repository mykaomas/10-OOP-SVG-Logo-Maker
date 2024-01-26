const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./svgGenerator');

async function promptUser() {
    try {
      const userInput = await inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three letters for logo:',
          validate: function (value) {
            return value.length <= 3 ? true : 'Please enter up to three letters.';
          }
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter text color (keyword or hexadecimal number) for logo:'
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape for the logo:',
          choices: ['circle', 'triangle', 'square']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter shape color (keyword or hexadecimal number) for logo:'
        }
      ])
      return userInput;
    } catch (error) {
      console.error('Error occurred while prompting user:', error);
      throw error;
    }
  }