import { RasterRenderer, VectorRender } from "./Renderer";
import { Circle, Square } from "./Shape";

// A mechanism that helps connecting two hierarchy of classes together
// through decoupling abstractions from implementations.
export async function BridgePattern() {
  const vectorRenderer = new VectorRender();
  const rasterRenderer = new RasterRenderer();

  const circle = new Circle(vectorRenderer, 5);
  const square = new Square(rasterRenderer, 10);

  circle.draw();
  square.draw();
}
