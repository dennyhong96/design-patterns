import { Line } from "./Line";
import { Point } from "./Point";

export class LineToPointAdapter {
  static count = 0;
  points: Point[] = [];

  constructor(line: Line) {
    console.log(
      `${
        LineToPointAdapter.count
      }: Generating point for the line ${line.toString()}`
    );
    LineToPointAdapter.count++;

    this.processLine(line);
  }

  processLine(line: Line) {
    const left = Math.min(line.start.x, line.end.x);
    const right = Math.max(line.start.x, line.end.x);
    const top = Math.min(line.start.y, line.end.y);
    const bottom = Math.max(line.start.y, line.end.y);

    if (left === right) {
      this.generatePointsFromLine(top, bottom, left);
    } else if (top === bottom) {
      this.generatePointsFromLine(left, right, top);
    }
  }

  generatePointsFromLine(
    lineEdge1: number,
    lineEdge2: number,
    crossAxisPos: number
  ) {
    let start, finish;
    if (lineEdge1 < lineEdge2) {
      start = lineEdge1;
      finish = lineEdge2;
    } else {
      start = lineEdge2;
      finish = lineEdge1;
    }
    for (let i = start; i <= finish; i++) {
      this.points.push(new Point(crossAxisPos, i));
    }
  }
}
