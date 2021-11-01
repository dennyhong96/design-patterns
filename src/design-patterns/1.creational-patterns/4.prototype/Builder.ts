import { ConcreteA } from "./ConcreteA";
import { ConcreteB } from "./ConcreteB";
import { IPrototype } from "./IPrototype";

export class Builder {
  private prototypeMap: { [key: string]: IPrototype } = {};

  constructor() {
    this.prototypeMap["A"] = new ConcreteA();
    this.prototypeMap["B"] = new ConcreteB();
  }

  createOne(key: string) {
    if (!this.prototypeMap[key]) {
      throw new Error(`Cannot find prototype ${key} from the prototypeMap`);
    }
    return this.prototypeMap[key].clone();
  }
}
