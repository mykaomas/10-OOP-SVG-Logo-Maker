class Triangle {
  constructor(base, height, color) {
    this.base = base;
    this.height = height;
    this.color = color;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }

  render() {
    return `<polygon points="0,${this.height} ${this.base},${this.height} ${this.base / 2},0" fill="${this.color}" />`;
  }
}

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  render() {
    return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />`;
  }
}

class Square {
  constructor(side, color) {
    this.side = side;
    this.color = color;
  }

  getArea() {
    return this.side ** 2;
  }

  render() {
    return `<rect width="${this.side}" height="${this.side}" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };