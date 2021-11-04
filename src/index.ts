import readline from "readline";

import { SingleResponsibilityPrinciple } from "./1.solid-principles/1.single-responsibility";
import { OpenClosePrinciple } from "./1.solid-principles/2.open-close";
import { LiskovSubstitutionPrinciple } from "./1.solid-principles/3.liskov-substitution";
import { InterfaceSegregationPrinciple } from "./1.solid-principles/4.interface-segregation";
import { DependencyInversionPrinciple } from "./1.solid-principles/5.dependency-inversion";
import { BuilderPattern } from "./2.design-patterns/1.creational-patterns/1.builder";
import { FactoryPattern } from "./2.design-patterns/1.creational-patterns/2.factory";
import { PrototypePattern } from "./2.design-patterns/1.creational-patterns/3.prototype";
import { SingletonPattern } from "./2.design-patterns/1.creational-patterns/4.singleton";
import { AdapterPattern } from "./2.design-patterns/2.structural-patterns/1.adapter";

const printMenu = () => {
  const menu = `
  SOLID principles:
  1. Single Responsibility Principle
  2. Open Close Principle
  3. Liskov Substitution Principle
  4. Interface Segregation Principle
  5. Dependency Inversion Principle
  
  Design Patterns:
    Creational Patterns:
      6. Bulder Pattern
      7. Factory Pattern
      8. Prototype Pattern
      9. Singleton Pattern

    Structural Patterns:
      10. Adapter Pattern
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
          await SingleResponsibilityPrinciple();
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
        case 4: {
          await InterfaceSegregationPrinciple();
          break;
        }
        case 5: {
          await DependencyInversionPrinciple();
          break;
        }
        case 6: {
          await BuilderPattern();
          break;
        }
        case 7: {
          await FactoryPattern();
          break;
        }
        case 8: {
          await PrototypePattern();
          break;
        }
        case 9: {
          await SingletonPattern();
          break;
        }
        case 10: {
          await AdapterPattern();
          break;
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
