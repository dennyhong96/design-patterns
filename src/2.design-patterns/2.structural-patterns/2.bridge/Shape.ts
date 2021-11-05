import { IRenderer } from "./types/IRenderer";
import { IShape } from "./types/IShape";

// An hierarchy of Shapes
export class Shape implements IShape {
  public renderer;
  constructor(
    // This is the bridge (Dependency inversion)
    // This "glues" the Renderer hierarchy to the Shape hierarchy
    renderer: IRenderer
  ) {
    this.renderer = renderer;
  }
  public draw() {}
}

// When adding a new Shape to the hierarchy
// The hierarchy Shape depends on will also need to be expanded
// In this case, both VectorRenderer and RasterRenderer need to implement `renderCircle` method
export class Circle extends Shape {
  public radius: number;
  constructor(renderer: IRenderer, radius: number) {
    super(renderer);
    this.radius = radius;
  }
  draw() {
    this.renderer.renderCircle(this.radius);
  }
  resize(multiplier: number) {
    this.radius = this.radius * multiplier;
  }
}

export class Square extends Shape {
  public side: number;
  constructor(renderer: IRenderer, side: number) {
    super(renderer);
    this.side = side;
  }
  draw() {
    this.renderer.renderSquare(this.side);
  }
  resize(multiplier: number) {
    this.side = this.side * multiplier;
  }
}
