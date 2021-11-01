import { Adaptee } from "./Adaptee";
import { ITarget } from "./ITarget";

export class Adapter implements ITarget {
  call() {
    console.log("Calling an Adaptee instance method from an Adapter instance");
    const adaptee = new Adaptee();
    adaptee.method();
  }
}
