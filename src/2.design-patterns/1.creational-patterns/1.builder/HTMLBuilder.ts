import { Tag } from "./Tag";
import { ITag } from "./types/ITag";
import { IHTMLBuilder } from "./types/IHTMLBuilder";

export class HTMLBuilder implements IHTMLBuilder {
  private _rootName: string;
  private _root: ITag | null = null;

  constructor(rootName: string) {
    this._rootName = rootName;
  }

  // Step 1
  public build(): IHTMLBuilder {
    this._root = new Tag(this._rootName);
    return this; // Return 'this' to make methods chainable
  }

  // Step 2
  public addChild(childName: string, childText: string): IHTMLBuilder {
    if (!this._root) {
      throw new Error("build method must be executed before addChild method");
    }
    const child = new Tag(childName, childText);
    this._root.children.push(child);
    return this;
  }

  // Step 3
  public toString(): string {
    if (!this._root) {
      throw new Error("build method must be executed before toString method");
    }
    return this._root.toString();
  }

  // Step 4
  public clear(): IHTMLBuilder {
    this._root = new Tag(this._rootName);
    return this;
  }
}
