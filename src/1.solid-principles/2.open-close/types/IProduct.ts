import { ProductColorTypes } from "./ProductColorTypes";
import { ProductSizeTypes } from "./ProductSizeTypes";

export interface IProduct {
  name: string;
  color: ProductColorTypes;
  size: ProductSizeTypes;
}
