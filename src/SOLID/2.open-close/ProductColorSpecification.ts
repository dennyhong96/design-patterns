import { IProduct } from "./types/IProduct";
import { ISpecification } from "./types/ISpecification";
import { ProductColorTypes } from "./types/ProductColorTypes";

export class ProductColorSpecification
  implements ISpecification<ProductColorTypes, IProduct>
{
  constructor(public spec: ProductColorTypes) {}
  isSatisfied(item: IProduct): boolean {
    return item.color === this.spec;
  }
}
