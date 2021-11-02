import { ICodeBuilder } from "./types/ICodeBuilder";

export class CodeBuilder implements ICodeBuilder {
  public fieldNames: string[] = [];

  constructor(public className: string) {}

  public addField(fieldName: string) {
    this.fieldNames.push(fieldName);
    return this; // Fluent interface
  }

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
