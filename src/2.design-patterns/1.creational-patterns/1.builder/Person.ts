import { IPerson } from "./types/IPerson";

export class Person implements IPerson {
  constructor(
    // address
    public streetAddress: string = "",
    public postCode: string = "",
    public city: string = "",

    // employment
    public companyName: string = "",
    public position: string = "",
    public annualIncome: number = 0
  ) {}

  public toString(): string {
    return `Person lives at ${this.streetAddress}, ${this.city}, ${this.postCode}, and works at ${this.companyName} as a ${this.position} earning $${this.annualIncome}/yr.`;
  }
}
