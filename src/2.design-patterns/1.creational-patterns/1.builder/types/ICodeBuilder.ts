export interface ICodeBuilder {
  className: string;
  fieldNames: string[];
  addField(fieldName: string): ICodeBuilder;
  toString(): string;
}
