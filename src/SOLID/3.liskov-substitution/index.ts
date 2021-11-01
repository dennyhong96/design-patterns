import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

function workWithRectangle(shape: Rectangle) {
  const height = 9;
  const width = 6;
  shape.height = height;
  shape.width = width;
  const expectedArea = 6 * 9;
  const actualArea = shape.getArea();
  console.log(`Expected area: ${expectedArea}; Actual area: ${actualArea}`);
}

export async function LiskovSubstitutionPrinciple() {
  const rc = new Rectangle(4, 5);
  workWithRectangle(rc);

  // Rectangle (base class) is not able to be replaced by Square (derived class),
  // this is a violation of the Liskov Substitution princple
  const sq = new Square(5);
  workWithRectangle(sq);
}
