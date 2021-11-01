import { IPrintable } from "./types/IPrintable";

export class OldSchoolPrinter implements IPrintable {
  print(doc: any): void {
    console.log("Printing...");
  }
}

// // OldSchoolPrinter shouldn't be forced to implement methods it cannot do
// // Violation of the Interface Segregation Principle
// export class OldSchoolPrinter implements IMachine {
//   print(doc: any): void {
//     console.log("Printing...");
//   }
//   fax(doc: any): void {
//     throw new Error("Not implemented.");
//   }
//   scan(doc: any): void {
//     throw new Error("Not implemented.");
//   }
// }
