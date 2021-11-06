import { GraphicObjectColorTypes } from "./types/GraphicObjectColorTypes";
import { IGraphicObject } from "./types/IGraphicObject";

// The GraphicObject instance can be a scalar object
// or a root for a tree of GraphicObject instances
export class GraphicObject implements IGraphicObject {
  public static groupCount = 1;

  constructor(
    private _name = `Group ${GraphicObject.groupCount++}`,
    public color: GraphicObjectColorTypes = GraphicObjectColorTypes.RED,
    public children: IGraphicObject[] = []
  ) {}

  public get name() {
    return this._name;
  }

  public print(buffer: string[], depth: number) {
    buffer.push("*".repeat(depth));
    if (depth > 0) {
      buffer.push(" ");
    }
    if (this.color) {
      buffer.push(`${this.color} `);
    }
    buffer.push(this.name);
    buffer.push("\n");
    for (const child of this.children) {
      child.print(buffer, depth + 1);
    }
  }

  public toString() {
    const buffer: string[] = [];
    this.print(buffer, 0);
    return buffer.join("");
  }
}
