export interface IJournal {
  entries: { [key: number]: string };
  addEntry(text: string): number;
  removeEntry(entryIndex: number): void;
  toString(): string;
}
