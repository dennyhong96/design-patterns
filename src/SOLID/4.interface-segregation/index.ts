import { OldSchoolPrinter } from "./OldScholPrinter";
import { Printer } from "./Printer";

export async function InterfaceSegregationPrinciple() {
  const printer = new Printer();
  printer.print("");
  printer.fax("");
  printer.scan("");

  const oldSchoolPrinter = new OldSchoolPrinter();
  oldSchoolPrinter.print("");
}
