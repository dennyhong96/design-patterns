// Split up one big interfaces into smaller interfaces
// so that the class implementing the interface won't be forced
// to implement methods it cannot do
export interface IMachine {
  print(doc: any): void;
  fax(doc: any): void;
  scan(doc: any): void;
}
