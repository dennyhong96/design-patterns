import { TextRange } from "./TextRange";
import { FormatterTypes } from "./types/FormatterTypes";
import { TextRangeWithFormatterType } from "./types/TextRangeWithFormatterType";

export class Formatter {
  public formatters: TextRangeWithFormatterType[] = [];
  constructor(public text: string) {}

  addFormat(startIndex: number, endIndex: number, type: FormatterTypes) {
    const textRange = new TextRange(startIndex, endIndex);
    (textRange as TextRangeWithFormatterType).type = type;
    this.formatters.push(textRange as TextRangeWithFormatterType);
  }

  toString() {
    let result: string = "";
    for (let i = 0; i < this.text.length; i++) {
      let char = this.text[i];
      this.formatters.forEach((formatter) => {
        if (formatter.covers(i)) {
          switch (formatter.type) {
            case FormatterTypes.Capitalize: {
              char = char.toUpperCase();
              break;
            }
            default: {
              break;
            }
          }
        }
      });
      result += char;
    }
    return result;
  }
}
