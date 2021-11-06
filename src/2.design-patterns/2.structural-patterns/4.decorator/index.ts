// Decorator pattern enables adding new behaviors to a class without inheriting it or altering the class itself

import { Circle } from "./Shape";
import { ColorDecorator, TransparencyDecorator } from "./ShapeDecorators";

// decorators wrap the original class (keeps a reference of it) and contain these new behaviors.
export async function DecoratorPattern() {
  const circle = new Circle(5);
  console.log(circle.toString());

  const coloredCircle = new ColorDecorator(circle, "red");
  console.log(coloredCircle.toString());

  // Decorators are composable
  const transparentColoredCircle = new TransparencyDecorator(
    coloredCircle,
    0.5
  );
  console.log(transparentColoredCircle.toString());
}
