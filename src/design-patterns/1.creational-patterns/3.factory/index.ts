import { createProduct } from "./createProduct";
import { ProductTypes } from "./ProductTypes";

// Factory pattern facilitates the creation of other objects.
export async function FactoryPattern() {
  const productA = createProduct(ProductTypes.ProductA);
  const productB = createProduct(ProductTypes.ProductB);
  productA.method();
  productB.method();
}
FactoryPattern();
