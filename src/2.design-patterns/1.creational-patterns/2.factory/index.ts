import { Point } from "./Point";
import { PointFactory } from "./PointFactory";

// Factory is a component responsible solely for the "wholesale" creation of objects
export async function FactoryPattern() {
  // Factory Methods:
  const cartesianPoint = Point.newCartesianPoint(5, 10);
  console.log("Cartesian Point:\n", cartesianPoint);
  const polarPoint = Point.newPolarPoint(5, 10);
  console.log("Polar Point:\n", polarPoint);

  // Factory Class:
  const cartesianPoint2 = PointFactory.newCartesianPoint(5, 10);
  console.log("Cartesian Point 2:\n", cartesianPoint2);
  const polarPoint2 = PointFactory.newPolarPoint(5, 10);
  console.log("Polar Point 2:\n", polarPoint2);
}
