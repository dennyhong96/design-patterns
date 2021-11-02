import { Tag } from "./Tag";
import { ITag } from "./types/ITag";
import { IHTMLBuilder } from "./types/IHTMLBuilder";

export class HTMLBuilder implements IHTMLBuilder {
  private _rootName: string;
  private _root: ITag;

  // Step 1
  constructor(rootName: string) {
    this._rootName = rootName;
    this._root = new Tag(this._rootName);
  }

  // Step 2
  public addChild(childName: string, childText: string): IHTMLBuilder {
    const child = new Tag(childName, childText);
    this._root.children.push(child);
    return this;
  }

  // Step 3
  public build(): ITag {
    return this._root; // Return 'this' to make methods chainable
  }

  // Step 4
  public clear(): IHTMLBuilder {
    this._root = new Tag(this._rootName);
    return this;
  }
}
