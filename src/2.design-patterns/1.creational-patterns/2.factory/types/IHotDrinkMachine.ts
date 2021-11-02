import { HotDrinkTypes } from "./HotDrinkTypes";
import { IHotDrink } from "./IHotDrink";

export interface IHotDrinkMachine {
  makeDrink(hotDrinkType: HotDrinkTypes, amount?: number): IHotDrink;
}
