import { Code } from "./Code";
import { ICode } from "./types/ICode";
import { ICodeBuilder } from "./types/ICodeBuilder";

export class CodeBuilder implements ICodeBuilder {
  private _code: ICode;

  constructor(className: string) {
    this._code = new Code(className);
  }

  public addField(fieldName: string) {
    this._code.fieldNames.push(fieldName);
    return this; // Fluent interface
  }

  public build() {
    return this._code;
  }
}
