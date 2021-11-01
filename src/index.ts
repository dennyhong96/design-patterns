import readline from "readline";

import { SingleResponsibility } from "./SOLID/1.SingleResponsibility";

const printMenu = () => {
  const menu = `
  SOLID principles:
  1. Single Responsibility Principle
  
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
    rl.question("Choose from the patterns -", async (answer: string) => {
      switch (Number(answer)) {
        case 1: {
          await SingleResponsibility();
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
