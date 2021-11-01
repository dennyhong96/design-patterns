import { IMachine } from "./types/IMachine";
import { IFaxable } from "./types/IFaxable";
import { IPrintable } from "./types/IPrintable";
import { IScannable } from "./types/IScannable";

export class Printer implements IPrintable, IFaxable, IScannable {
  print(doc: any): void {
    console.log("Printing...");
  }
  fax(doc: any): void {
    console.log("Faxing...");
  }
  scan(doc: any): void {
    console.log("Scanning...");
  }
}
