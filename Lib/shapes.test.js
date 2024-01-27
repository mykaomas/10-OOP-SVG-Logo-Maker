const { Triangle, Circle, Square } = require('./shapes');

describe('Shape rendering', () => {
    test('Triangle render method', () => {
        const triangle = new Triangle(100, 50, 'blue');
        const expectedSVG = '<polygon points="0,50 100,50 50,0" fill="blue" />';
        expect(triangle.render()).toEqual(expectedSVG);
    });

    test('Circle render method', () => {
        const circle = new Circle(50, 'red');
        const expectedSVG = '<circle cx="50" cy="50" r="50" fill="red" />';
        expect(circle.render()).toEqual(expectedSVG);
    });

    test('Square render method', () => {
        const square = new Square(75, 'green');
        const expectedSVG = '<rect width="75" height="75" fill="green" />';
        expect(square.render()).toEqual(expectedSVG);
    });
});