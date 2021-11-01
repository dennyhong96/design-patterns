import { ConcreteProductA } from "./ConcreteProductA";
import { ConcreteProductB } from "./ConcreteProductB";
import { ProductTypes } from "./ProductTypes";

export function createProduct(type: ProductTypes) {
  switch (type) {
    case ProductTypes.ProductA: {
      return new ConcreteProductA();
    }
    case ProductTypes.ProductB: {
      return new ConcreteProductB();
    }
  }
}
