// The Flyweight Object (External Cache)
export class TextRange {
  constructor(public startIndex: number, public endIndex: number) {}

  covers(index: number): boolean {
    return index >= this.startIndex && index <= this.endIndex;
  }
}
