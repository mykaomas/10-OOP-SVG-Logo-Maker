class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }
}

module.exports = { Triangle, Circle, Square }