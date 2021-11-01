import { IProduct } from "./types/IProduct";
import { ProductColorTypes } from "./types/ProductColorTypes";
import { ProductSizeTypes } from "./types/ProductSizeTypes";

export class Product implements IProduct {
  constructor(
    public name: string,
    public color: ProductColorTypes,
    public size: ProductSizeTypes
  ) {}
}
