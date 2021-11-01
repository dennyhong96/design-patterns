import { IPrototype } from "./IPrototype";

export class ConcreteB implements IPrototype {
  clone(): ConcreteB {
    return new ConcreteB();
  }
  toString() {
    return `ConcreteB instance`;
  }
}
