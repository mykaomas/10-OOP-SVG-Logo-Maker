const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./Lib/svgGenerator');
const { Triangle, Circle, Square } = require('./Lib/shapes');

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
        ]);
        return userInput;
    } catch (error) {
        console.error('Error occurred while prompting user:', error);
        throw error;
    }
}

async function createLogo() {
    try {
        const userInput = await promptUser();

        let shapeObject;

        switch (userInput.shape) {
            case 'triangle':
                shapeObject = new Triangle(100, 50, userInput.shapeColor);
                break;
            case 'circle':
                shapeObject = new Circle(50, userInput.shapeColor);
                break;
            case 'square':
                shapeObject = new Square(80, userInput.shapeColor);
                break;
            default:
                throw new Error('Invalid shape specified');
        }

        shapeObject.text = userInput.text;
        shapeObject.textColor = userInput.textColor;
        shapeObject.shapeColor = userInput.shapeColor;

        createSVG(shapeObject);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

createLogo();

module.exports = { promptUser };