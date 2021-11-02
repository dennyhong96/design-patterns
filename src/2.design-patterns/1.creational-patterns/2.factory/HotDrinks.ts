import { HotDrinkTypes } from "./types/HotDrinkTypes";
import { IHotDrink } from "./types/IHotDrink";
import { IHotDrinkFactory } from "./types/IHotDrinkFactory";
import { IHotDrinkMachine } from "./types/IHotDrinkMachine";

export class Tea implements IHotDrink {
  public consume() {
    console.log("This tea is nice with lemon!");
  }
}

export class Coffee implements IHotDrink {
  public consume() {
    console.log("This coffee is nice with sugar!");
  }
}

export class TeaFactory implements IHotDrinkFactory {
  public prepare(amount: number) {
    console.log(`Put in the tea bag, boil water, pour ${amount}ml.`);
    return new Tea(); // Could do furthur customization
  }
}

export class CoffeeFactory implements IHotDrinkFactory {
  public prepare(amount: number) {
    console.log(`Put in the coffee pod, press start, pour ${amount}ml.`);
    return new Coffee(); // Could do furthur customization
  }
}

const AvailableDrinks = Object.freeze({
  // Maps enum HotDrinkTypes to Factories
  [HotDrinkTypes.Coffee]: CoffeeFactory,
  [HotDrinkTypes.Tea]: TeaFactory,
});

type FactoriesStore = { [key: string]: IHotDrinkFactory };

// Abstract Factory - A hierarchy of factories
export class HotDrinkMachine implements IHotDrinkMachine {
  private _factories: FactoriesStore;

  constructor() {
    this._factories = Object.entries(AvailableDrinks).reduce<FactoriesStore>(
      (acc, [key, Factory]) => {
        acc[key] = new Factory();
        return acc;
      },
      {}
    );
  }

  public makeDrink(
    hotDrinkType: HotDrinkTypes,
    amount: number = 350
  ): IHotDrink {
    return this._factories[hotDrinkType].prepare(amount);
  }
}
