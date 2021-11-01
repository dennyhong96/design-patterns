import { IAbstractProduct } from "./IAbstractProduct";

export class ConcreteProductB implements IAbstractProduct {
  method() {
    console.log(
      `${new Date()}: method called from an instance of ConcreteProductB`
    );
  }
}
