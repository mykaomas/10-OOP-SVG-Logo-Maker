// const { promptUser } = require('../index');
// const { createSVG } = require('./svgGenerator');
// const { Triangle, Circle, Square } = require('./shapes');

// async function createLogo() {
//   try {
//     const userInput = await promptUser();

//     let shapeObject;

//     switch (userInput.shape) {
//       case 'triangle':
//         shapeObject = new Triangle(100, 50, userInput.shapeColor);
//         break;
//       case 'circle':
//         shapeObject = new Circle(50, userInput.shapeColor);
//         break;
//       case 'square':
//         shapeObject = new Square(75, userInput.shapeColor);
//         break;
//       default:
//         throw new Error('Invalid shape specified');
//     }

//     shapeObject.text = userInput.text;
//     shapeObject.textColor = userInput.textColor;
//     shapeObject.shapeColor = userInput.shapeColor;

//     createSVG(shapeObject);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }

// createLogo();