import { IShape } from "./types/IShape";

export class Shape implements IShape {
  public toString() {
    return `A shape`;
  }
}

export class Circle extends Shape {
  public radius: number;
  constructor(radius = 0) {
    super();
    this.radius = radius;
  }
  public resize(factor: number) {
    this.radius *= factor;
  }
  public toString() {
    return `A circle shape with radius ${this.radius}`;
  }
}
