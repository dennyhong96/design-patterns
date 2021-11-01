export interface ITag {
  children: ITag[];
  toString(indentLevel?: number): string;
}
