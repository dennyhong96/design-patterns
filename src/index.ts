import readline from "readline";

import { SingleResponsibility } from "./SOLID/1.single-responsibility";
import { SingletonPattern } from "./design-patterns/1.creational-patterns/1.singleton";
import { BuilderPattern } from "./design-patterns/1.creational-patterns/2.builder";
import { FactoryPattern } from "./design-patterns/1.creational-patterns/3.factory";
import { PrototypePattern } from "./design-patterns/1.creational-patterns/4.prototype";
import { AdapterPattern } from "./design-patterns/2.structural-patterns/1.adapter";
import { LiskovSubstitutionPrinciple } from "./SOLID/3.liskov-substitution";
import { OpenClosePrinciple } from "./SOLID/2.open-close";

const printMenu = () => {
  const menu = `
  SOLID principles:
  1. Single Responsibility Principle
  2. Open Close Principle
  3. Liskov Substitution Principle
  
  Design Patterns:
    Creational Patterns:
      3. Singleton
      4. Builder
      5. Factory
      6. Prototype
  
    Structural Patterns:
      7. Adapter
  `;
  console.log(menu);
};

const main = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  printMenu();
  await new Promise<void>((resolve) => {
    rl.question("Choose from the patterns - \n", async (answer: string) => {
      switch (Number(answer)) {
        case 1: {
          await SingleResponsibility();
          break;
        }
        case 2: {
          await OpenClosePrinciple();
          break;
        }
        case 3: {
          await LiskovSubstitutionPrinciple();
          break;
        }
        // case 4: {
        //   await AdapterPattern();
        //   break;
        // }
        // case 4: {
        //   await SingletonPattern();
        //   break;
        // }
        // case 5: {
        //   await BuilderPattern();
        //   break;
        // }
        // case 6: {
        //   await FactoryPattern();
        //   break;
        // }
        // case 7: {
        //   await PrototypePattern();
        //   break;
        // }
        // case 8: {
        //   await AdapterPattern();
        //   break;
        // }
        default: {
          break;
        }
      }
      rl.close();
      resolve();
    });
  });
};
main();
