import { Rectangle } from "./Rectangle";

export class Square extends Rectangle {
  constructor(size: number) {
    super(size, size);
  }

  set width(value: number) {
    this.setWidthAndHeight(value);
  }

  set height(value: number) {
    this.setWidthAndHeight(value);
  }

  private setWidthAndHeight(value: number) {
    this._width = value;
    this._height = value;
  }
}
