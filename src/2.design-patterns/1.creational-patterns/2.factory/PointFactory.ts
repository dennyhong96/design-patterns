import { Point } from "./Point";

// Factory Class - A dedicated class to create objects
export class PointFactory {
  // If Factory ever needs to store some data, we can convert below
  // static methods to non-static methods and let clients to instantiate
  // instances of the Factory class with consttructors

  // Belows factory methods are copied over from Point class factory methods
  public static newCartesianPoint(x: number, y: number) {
    return new Point(x, y);
  }

  public static newPolarPoint(rho: number, theta: number) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}
