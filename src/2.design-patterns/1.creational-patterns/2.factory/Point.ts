import { PointFactory } from "./PointFactory";

export class Point {
  constructor(public x: number, public y: number) {}

  // Factory methods
  // static methods for manufacturing new objects
  // clients can easily tell which type of object it'll create without bloating initializer arguments
  // also allows to be very specific for the initializer arguments names (x,y vs. rho,theta)
  public static newCartesianPoint(x: number, y: number) {
    return new Point(x, y);
  }

  public static newPolarPoint(rho: number, theta: number) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }

  // This introduces coupling between the Point and the PointFactory
  // but this gives a cleaner API and suggest users that they should
  // avoid using the constructor to use the factory instead
  // static get factory() {
  //   return PointFactory;
  // }
}
