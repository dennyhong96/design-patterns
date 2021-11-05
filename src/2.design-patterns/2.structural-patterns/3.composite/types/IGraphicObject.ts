import { GraphicObjectColorTypes } from "./GraphicObjectColorTypes";

export interface IGraphicObject {
  color: GraphicObjectColorTypes;
  children: IGraphicObject[];
  name: string;
  print(buffer: string[], depth: number): void;
  toString(): string;
}
