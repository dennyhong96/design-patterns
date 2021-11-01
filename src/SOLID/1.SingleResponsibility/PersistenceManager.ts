import fs from "fs/promises";

import { IPersistenceManager } from "./IPersistenceManager";

// Use a seperate class PersistenceManager to managing writing/reading from files
// instead of having the methods living within the Journal class
// Single responsibility/Seperation of concerns
export class PersistenceManager implements IPersistenceManager {
  async saveToFile<T extends { toString(): string }>(
    content: T,
    fileName: string
  ) {
    await fs.writeFile(fileName, content.toString(), { encoding: "utf-8" });
  }

  async readFromFile(fileName: string): Promise<string> {
    return fs.readFile(fileName, { encoding: "utf-8" });
  }
}
