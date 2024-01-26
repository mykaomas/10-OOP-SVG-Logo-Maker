const { promptUser } = require('./index');
// const { createSVG } = require('./svgGenerator');
const { Triangle, Circle, Square } = require('./shapes');

test('Returns SVG string with correct attributes for Triangle', () => {
  // Arrange
  const triangle = new Triangle(100, 50, 'red');

  // Act
  const svgTriangle = triangle.render();

  // Assert
  expect(svgTriangle).toEqual('<polygon points="0,50 100,50 50,0" fill="red" />');
});


