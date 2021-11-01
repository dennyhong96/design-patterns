import { IProduct } from "./types/IProduct";
import { ISpecification } from "./types/ISpecification";
import { ProductColorTypes } from "./types/ProductColorTypes";
import { ProductSizeTypes } from "./types/ProductSizeTypes";

export class ProductCombinedSpecification
  implements
    ISpecification<
      ISpecification<ProductColorTypes | ProductSizeTypes, IProduct>[],
      IProduct
    >
{
  public spec: ISpecification<
    ProductColorTypes | ProductSizeTypes,
    IProduct
  >[] = [];

  constructor(
    ...specs: ISpecification<ProductColorTypes | ProductSizeTypes, IProduct>[]
  ) {
    this.spec = specs;
  }
  isSatisfied(item: IProduct): boolean {
    return this.spec.every((sp) => sp.isSatisfied(item));
  }
}
