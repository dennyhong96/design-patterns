import { Circle } from "./Circle";
import { GraphicObject } from "./GraphicObject";
import { Square } from "./Square";
import { GraphicObjectColorTypes } from "./types/GraphicObjectColorTypes";

export async function CompositePattern() {
  const rootDrawing = new GraphicObject();
  rootDrawing.children.push(new Circle("a", GraphicObjectColorTypes.RED));
  rootDrawing.children.push(new Square("b", GraphicObjectColorTypes.YELLOW));

  const childDrawing = new GraphicObject();
  childDrawing.children.push(new Square("c", GraphicObjectColorTypes.BLUE));
  childDrawing.children.push(new Circle("d", GraphicObjectColorTypes.YELLOW));

  rootDrawing.children.push(childDrawing);
  console.log(rootDrawing.toString());
}
