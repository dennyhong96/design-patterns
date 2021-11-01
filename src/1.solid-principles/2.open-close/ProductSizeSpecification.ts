import { IProduct } from "./types/IProduct";
import { ISpecification } from "./types/ISpecification";
import { ProductSizeTypes } from "./types/ProductSizeTypes";

export class ProductSizeSpecification
  implements ISpecification<ProductSizeTypes, IProduct>
{
  constructor(public spec: ProductSizeTypes) {}
  isSatisfied(item: IProduct): boolean {
    return item.size === this.spec;
  }
}
