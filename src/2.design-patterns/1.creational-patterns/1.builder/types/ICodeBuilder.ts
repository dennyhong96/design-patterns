import { ICode } from "./ICode";

export interface ICodeBuilder {
  addField(fieldName: string): ICodeBuilder;
  build(): ICode;
}
