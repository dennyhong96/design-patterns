import { IRenderer } from "./IRenderer";

export interface IShape {
  renderer: IRenderer;
  draw(): void;
}
