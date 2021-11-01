import { Product } from "./Product";
import { ProductColorSpecification } from "./ProductColorSpecification";
import { ProductColorTypes } from "./types/ProductColorTypes";
import { ProductCombinedSpecification } from "./ProducdAndSpecification";
import { ProductFilter } from "./ProductFilter";
import { ProductSizeSpecification } from "./ProductSizeSpecification";
import { ProductSizeTypes } from "./types/ProductSizeTypes";

export async function OpenClosePrinciple() {
  const p1 = new Product(
    "Product 1",
    ProductColorTypes.red,
    ProductSizeTypes.medium
  );
  const p2 = new Product(
    "Product 2",
    ProductColorTypes.yellow,
    ProductSizeTypes.large
  );
  const p3 = new Product(
    "Product 3",
    ProductColorTypes.red,
    ProductSizeTypes.large
  );

  const items = [p1, p2, p3];
  const productFilter = new ProductFilter();

  const redProducts = productFilter.filter(
    items,
    new ProductColorSpecification(ProductColorTypes.red)
  );
  console.log("Red products: ", redProducts);

  const largeProducts = productFilter.filter(
    items,
    new ProductSizeSpecification(ProductSizeTypes.large)
  );

  console.log("Large products: ", largeProducts);

  const largeRedProducs = productFilter.filter(
    items,
    new ProductCombinedSpecification(
      new ProductColorSpecification(ProductColorTypes.red),
      new ProductSizeSpecification(ProductSizeTypes.large)
    )
  );
  console.log("Large Red Products: ", largeRedProducs);
}
