import { IAbstractProduct } from "./IAbstractProduct";

export class ConcreteProductA implements IAbstractProduct {
  method() {
    console.log(
      `${new Date()}: method called from an instance of ConcreteProductA`
    );
  }
}
