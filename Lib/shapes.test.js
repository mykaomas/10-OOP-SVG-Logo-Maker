const { promptUser } = require('./index');
const { createSVG } = require('./svgGenerator');
const { Triangle, Circle, Square } = require('./shapes');

test('Returns SVG string with correct attributes for Triangle', () => {
  // Arrange
  const triangle = new Triangle(100, 50, 'red');

  // Act
  const svgTriangle = triangle.render();

  // Assert
  expect(svgTriangle).toEqual('<polygon points="0,50 100,50 50,0" fill="red" />');
});

test('Returns SVG string with correct attributes for Circle', () => {
    // Arrange
    const circle = new Circle(50, 'blue');
  
    // Act
    const svgCircle = circle.render();
  
    // Assert
    expect(svgCircle).toEqual('<circle cx="50" cy="50" r="50" fill="blue" />');
  });

