const fs = require('fs');

function createSVG(shapeObject) {
  console.log("Type of shapeObject:", typeof shapeObject);
  console.log("Shape Object:", shapeObject);
  const svgContent = shapeObject.render();
`
    <svg width="300" height="200">
      ${svgContent}
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