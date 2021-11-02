import readline from "readline";
import { HotDrinkMachine } from "./HotDrinks";
import { Point } from "./Point";
import { PointFactory } from "./PointFactory";
import { HotDrinkTypes } from "./types/HotDrinkTypes";
import { IHotDrink } from "./types/IHotDrink";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Factory is a component responsible solely for the "wholesale" creation of objects
export async function FactoryPattern() {
  // Factory Methods:
  const cartesianPoint = Point.newCartesianPoint(5, 10);
  console.log("Cartesian Point:\n", cartesianPoint);
  const polarPoint = Point.newPolarPoint(5, 10);
  console.log("Polar Point:\n", polarPoint);

  // Factory Class:
  const cartesianPoint2 = PointFactory.newCartesianPoint(5, 10);
  console.log("Cartesian Point 2:\n", cartesianPoint2);
  const polarPoint2 = PointFactory.newPolarPoint(5, 10);
  console.log("Polar Point 2:\n", polarPoint2);

  // Abstrct Factory Class:
  const hotDrinkMachine = new HotDrinkMachine();

  const hotDrink = await new Promise<IHotDrink>((resolve) => {
    rl.question(
      `
What kind of hot drink do you want?
  1. Coffee
  2. Tea

    `,
      (answer: string) => {
        let hotDrink: IHotDrink;
        switch (Number(answer)) {
          case 1: {
            hotDrink = hotDrinkMachine.makeDrink(HotDrinkTypes.Coffee);
            break;
          }
          case 2:
          default: {
            hotDrink = hotDrinkMachine.makeDrink(HotDrinkTypes.Tea);
            break;
          }
        }
        resolve(hotDrink);
      }
    );
  });

  console.log(hotDrink);
}
