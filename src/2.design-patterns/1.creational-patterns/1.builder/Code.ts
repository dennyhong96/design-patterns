import { ICode } from "./types/ICode";

export class Code implements ICode {
  public fieldNames: string[] = [];

  constructor(public className: string) {}

  public toString() {
    let codeString = "";
    codeString += `class ${this.className} {\n`;

    if (this.fieldNames.length) {
      codeString += `  constructor(${this.fieldNames.join(", ")}) {\n`;
      for (const fieldName of this.fieldNames) {
        codeString += `    this.${fieldName} = ${fieldName};\n`;
      }
      codeString += `  }\n`;
    }

    codeString += `}`;
    return codeString;
  }
}
