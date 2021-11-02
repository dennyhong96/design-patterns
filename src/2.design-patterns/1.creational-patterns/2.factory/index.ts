import { Point } from "./Point";

// Factory is a component responsible solely for the "wholesale" creation of objects
export async function FactoryPattern() {
  // Factory Methods:
  const cartesianPoint = Point.newCartesianPoint(5, 10);
  console.log("Cartesian Point:\n", cartesianPoint);
  const polarPoint = Point.newPolarPoint(5, 10);
  console.log("Polar Point:\n", polarPoint);
}
