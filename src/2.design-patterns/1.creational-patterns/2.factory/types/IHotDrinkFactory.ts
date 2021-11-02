import { IHotDrink } from "./IHotDrink";

export interface IHotDrinkFactory {
  prepare(amount: number): IHotDrink;
}
