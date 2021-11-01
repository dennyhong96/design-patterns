import { IRectangle } from "./types/IRectangle";

export class Rectangle implements IRectangle {
  constructor(protected _width: number, protected _height: number) {}

  public get width() {
    return this._width;
  }
  public set width(value: number) {
    this._width = value;
  }

  public get height() {
    return this._height;
  }
  public set height(value: number) {
    this._height = value;
  }

  public getArea(): number {
    return this._height * this._width;
  }

  public toString(): string {
    return `${this._width}x${this._height}`;
  }
}
