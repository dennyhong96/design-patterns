import { Point } from "./Point";

export class DrawPointService {
  constructor(public point: Point) {}
  draw() {
    process.stdout.write(".");
  }
}
