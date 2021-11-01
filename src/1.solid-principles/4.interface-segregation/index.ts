import { OldSchoolPrinter } from "./OldScholPrinter";
import { Printer } from "./Printer";

// Don't put too much into one interface, split it into multiple interfaces.
// So the client is not forced to implement methods they can't provide
export async function InterfaceSegregationPrinciple() {
  const printer = new Printer();
  printer.print("");
  printer.fax("");
  printer.scan("");

  const oldSchoolPrinter = new OldSchoolPrinter();
  oldSchoolPrinter.print("");
}
