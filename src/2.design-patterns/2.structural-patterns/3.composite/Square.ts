import { GraphicObject } from "./GraphicObject";
import { IGraphicObject } from "./types/IGraphicObject";
import { GraphicObjectColorTypes } from "./types/GraphicObjectColorTypes";

export class Square extends GraphicObject {
  constructor(
    name: string,
    color: GraphicObjectColorTypes,
    children: IGraphicObject[] = []
  ) {
    super(`Square ${name}`, color, children);
  }
}
