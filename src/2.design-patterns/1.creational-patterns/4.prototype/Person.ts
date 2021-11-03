import { Address } from "./Address";

export class Person {
  constructor(
    public name: string,
    public age: number,
    public address: Address
  ) {}

  public toString() {
    return `${this.name} is ${this.age} years old, and lives at ${this.address.street}, ${this.address.city}, ${this.address.street}, ${this.address.zipCode}`;
  }

  // Supports deep copy method
  deepCopy() {
    // Classes within the class hierarchy must all supports deep copy as well
    return new Person(this.name, this.age, this.address.deepCopy());
  }
}
