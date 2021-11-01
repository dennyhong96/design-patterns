import readline from "readline";

import { SingleResponsibility } from "./SOLID/1.SingleResponsibility";
import { SingletonPattern } from "./design-patterns/1.creational-patterns/1.singleton";
import { BuilderPattern } from "./design-patterns/1.creational-patterns/2.builder";
import { FactoryPattern } from "./design-patterns/1.creational-patterns/3.factory";
import { PrototypePattern } from "./design-patterns/1.creational-patterns/4.prototype";
import { AdapterPattern } from "./design-patterns/2.structural-patterns/1.adapter";

const printMenu = () => {
  const menu = `
  SOLID principles:
  1. Single Responsibility Principle
  
  Design Patterns:
    Creational Patterns:
      2. Singleton
      3. Builder
      4. Factory
      5. Prototype
  
    Structural Patterns:
      6. Adapter
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
        }
        case 2: {
          await SingletonPattern();
        }
        case 3: {
          await BuilderPattern();
        }
        case 4: {
          await FactoryPattern();
        }
        case 5: {
          await PrototypePattern();
        }
        case 6: {
          await AdapterPattern();
        }
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
