const { promptUser } = require('../index');
const { createSVG } = require('./svgGenerator');
const { Triangle, Circle, Square } = require('./shapes');

async function createLogo() {
  try {
    const userInput = await promptUser();

    let shapeObject;

    switch (userInput.shape) {
      case 'triangle':
        shapeObject = new Triangle(100, 50, userInput.shapeColor);
        break;
      case 'circle':
        shapeObject = new Circle(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);
        break;
      case 'square':
        shapeObject = new Square(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);
        break;
      default:
        throw new Error('Invalid shape specified');
    }

    createSVG(shapeObject);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

createLogo();
