import { GraphicObject } from "./GraphicObject";
import { GraphicObjectColorTypes } from "./types/GraphicObjectColorTypes";
import { IGraphicObject } from "./types/IGraphicObject";

export class Circle extends GraphicObject {
  constructor(
    name: string,
    color: GraphicObjectColorTypes,
    children: IGraphicObject[] = []
  ) {
    super(`Circle ${name}`, color, children);
  }
}
