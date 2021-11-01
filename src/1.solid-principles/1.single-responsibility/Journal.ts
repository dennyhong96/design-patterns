import { IJournal } from "./types/IJournal";

export class Journal implements IJournal {
  public entries: { [key: number]: string } = {};
  public static count = 0;

  constructor() {
    this.entries = {};
  }

  public addEntry(text: string): number {
    const entryIndex = Journal.count;
    this.entries[entryIndex] = `${entryIndex}: ${text}`;
    Journal.count++;
    return entryIndex;
  }

  public removeEntry(entryIndex: number): void {
    if (this.entries[entryIndex]) {
      delete this.entries[entryIndex];
    }
  }

  public toString(): string {
    return Object.values(this.entries).reduce((acc, cur) => {
      return acc + `JOURNAL ENTRY ${cur}\n`;
    }, "");
  }
}
