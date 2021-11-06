import { Shape } from "./Shape";
import { IShape } from "./types/IShape";

export class DecoratorBase implements IShape {
  protected shape: Shape;
  constructor(shape: Shape) {
    this.shape = shape;
  }
  public toString() {
    return this.shape.toString();
  }
}

// Decorators call the wrapped object and alter it's result in some way
export class ColorDecorator extends DecoratorBase {
  public color: string;
  constructor(shape: Shape, color: string) {
    super(shape);
    this.color = color;
  }
  public toString() {
    return `${super.toString()} with color ${this.color}`;
  }
}

export class TransparencyDecorator extends DecoratorBase {
  public transparency: number;
  constructor(shape: Shape, transparency: number) {
    super(shape);
    this.transparency = transparency;
  }
  public toString() {
    return `${super.toString()} with transparentcy ${this.transparency}`;
  }
}
