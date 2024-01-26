class Triangle {
  constructor(base, height, color) {
    this.base = base;
    this.height = height;
    this.color = color;
  }

  render() {
    return `<polygon points="0,${this.height} ${this.base},${this.height} ${this.base / 2},0" fill="${this.color}" />`;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }
}

module.exports = { Triangle, Circle, Square };