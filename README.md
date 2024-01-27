# Logo Maker
This is a command-line tool designed to create logos using basic shapes (circle, triangle, square) with custom text and colors. The program prompts users for input regarding the text, text color, shape, and shape color, then generates an SVG logo file based on the provided information.

## Dependencies
### * inquirer: Used for prompting the user for input in the command-line interface.
### * jest: Testing framework for running unit tests.
### * fs: Node.js core module for file system operations

## Installation
Before running the program, ensure Node.js installed. Install the dependencies by navigating to the project directory and running:
1. npm install jest
2. npm fs
3. npm inquirer@8.2.4

## Usage
To create a logo, run the program using Node.js and navigate to index.js.
Then the program will prompt you to enter the following details:

### * Text: Enter up to three letters for the logo.
### * Text Color: Specify the color of the text using either a keyword or a hexadecimal number.
### * Shape: Choose a shape for the logo (circle, triangle, or square).
### * Shape Color: Specify the color of the chosen shape using either a keyword or a hexadecimal number.

After providing the required information, the program generates an SVG file named logo.svg in the current directory, representing the logo based on the provided input.

## Demonstration
Click the [link](https://drive.google.com/file/d/1kjQTov39uHnsqzC0j9-Zv6wHNv2PH1rV/view?usp=sharing) to see a demonstration of the program.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
