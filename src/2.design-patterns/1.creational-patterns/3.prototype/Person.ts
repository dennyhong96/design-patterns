import { Address } from "./Address";

export class Person {
  constructor(
    public name?: string,
    public age?: number,
    public address?: Address
  ) {}

  // Supports deep copy method
  public deepCopy() {
    // Classes within the class hierarchy must all supports deep copy as well
    if (!this.isInfoComplete) {
      throw new Error("Enter full information before cloning.");
    }
    return new Person(this.name, this.age, this.address!.deepCopy());
  }

  public toString() {
    if (!this.isInfoComplete) return "";
    return `${this.name} is ${this.age} years old, and lives at ${
      this.address!.street
    }, ${this.address!.city}, ${this.address!.street}, ${
      this.address!.zipCode
    }`;
  }

  private isInfoComplete() {
    return Boolean(this.name && this.age && this.address);
  }
}
