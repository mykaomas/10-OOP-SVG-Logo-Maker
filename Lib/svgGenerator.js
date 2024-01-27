const fs = require('fs');

function createSVG(shapeObject) {
    let textElement = '';
    if (shapeObject.text && shapeObject.textColor) {
        textElement = `
            <text x="8%" y="30%" font-size="5vh" fill="${shapeObject.textColor}">
                ${shapeObject.text}
            </text>
        `;
    }

    const svgContent = `
        <svg width="300" height="200">
            ${shapeObject.render()}
            ${textElement}
        </svg>
    `;

    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) {
            console.error('Error writing SVG file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

module.exports = { createSVG };