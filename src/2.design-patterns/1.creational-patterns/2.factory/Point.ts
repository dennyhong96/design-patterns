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
}
