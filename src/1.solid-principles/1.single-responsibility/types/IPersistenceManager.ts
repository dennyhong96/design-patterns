export interface IPersistenceManager {
  saveToFile<T extends { toString(): string }>(
    content: T,
    fileName: string
  ): Promise<void>;
  readFromFile(fileName: string): Promise<string>;
}
