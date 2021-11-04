import { Line } from "./Line";
import { Point } from "./Point";

export class VectorObject extends Array {}

export class VectorRectangle extends VectorObject {
  constructor(x: number, y: number, width: number, height: number) {
    super();
    this.push(new Line(new Point(x, y), new Point(x + width, y)));
    this.push(
      new Line(new Point(x + width, y), new Point(x + width, y + height))
    );
    this.push(
      new Line(new Point(x + width, y + height), new Point(x, y + height))
    );
    this.push(new Line(new Point(x, y), new Point(x, y + height)));
  }
}
