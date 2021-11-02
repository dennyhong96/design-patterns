import { ITag } from "./ITag";

export interface IHTMLBuilder {
  addChild(childName: string, childText: string): IHTMLBuilder;
  toString(): string;
  build(): ITag;
  clear(): IHTMLBuilder;
}
