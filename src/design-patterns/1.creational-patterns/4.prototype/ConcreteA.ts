import { IPrototype } from "./IPrototype";

export class ConcreteA implements IPrototype {
  clone(): ConcreteA {
    return new ConcreteA();
  }
  toString() {
    return `ConcreteA instance`;
  }
}
