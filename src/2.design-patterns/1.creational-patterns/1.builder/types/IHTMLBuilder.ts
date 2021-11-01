export interface IHTMLBuilder {
  build(): IHTMLBuilder;
  addChild(childName: string, childText: string): IHTMLBuilder;
  toString(): string;
  clear(): IHTMLBuilder;
}
