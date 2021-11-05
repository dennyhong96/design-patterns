import { Line } from "./Line";
import { Point } from "./Point";

export class LineToPointAdapter {
  private static linesProcessed = 0;

  // A static shared cache to help reduce LineToPointAdapter's workload and memory
  private static cache: { [key: string]: Array<Point> } = {};

  public points: Array<Point> = [];

  constructor(line: Line) {
    const cachedLinePoints = this.getCachedLinePoints(line);
    if (!cachedLinePoints) {
      this.processLine(line);
      LineToPointAdapter.linesProcessed++;
      console.log(
        `${
          LineToPointAdapter.linesProcessed
        } lines processed: Generating points for the line:${line.toString()}`
      );
    } else {
      this.points = cachedLinePoints;
      console.log(`Getting points for the line:${line.toString()} from cache`);
    }
  }

  private processLine(line: Line): void {
    const left = Math.min(line.start.x, line.end.x);
    const right = Math.max(line.start.x, line.end.x);
    const top = Math.min(line.start.y, line.end.y);
    const bottom = Math.max(line.start.y, line.end.y);

    let points: Point[] = [];
    if (left === right) {
      points = [...points, ...this.generatePointsFromLine(top, bottom, left)];
    } else if (top === bottom) {
      points = [...points, ...this.generatePointsFromLine(left, right, top)];
    }

    this.cacheLinePoints(line, points);
    this.points = points;
  }

  private generatePointsFromLine(
    lineEdge1: number,
    lineEdge2: number,
    crossAxisPos: number
  ): Point[] {
    let start, finish;
    if (lineEdge1 < lineEdge2) {
      start = lineEdge1;
      finish = lineEdge2;
    } else {
      start = lineEdge2;
      finish = lineEdge1;
    }
    let points: Point[] = [];
    for (let i = start; i <= finish; i++) {
      points.push(new Point(crossAxisPos, i));
    }
    return points;
  }

  private cacheLinePoints(line: Line, points: Point[]): void {
    const cacheKey = this.generateCacheKey(JSON.stringify(line));
    LineToPointAdapter.cache[cacheKey] = points;
  }

  private getCachedLinePoints(line: Line) {
    const cacheKey = this.generateCacheKey(JSON.stringify(line));
    return LineToPointAdapter.cache[cacheKey];
  }

  private generateCacheKey(string: string): number {
    let hash = 0,
      i,
      chr;
    if (string.length === 0) return hash;
    for (i = 0; i < string.length; i++) {
      chr = string.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
}
