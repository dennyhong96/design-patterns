import { Person } from "./Person";
import { IPerson } from "./types/IPerson";
import { IPersonBulder } from "./types/IPersonBuilder";

// Base builder
export class PersonBuilder implements IPersonBulder {
  constructor(public person: IPerson = new Person()) {}

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

// Sub builder
export class PersonAddressBuilder extends PersonBuilder {
  constructor(person: IPerson) {
    super(person); // so that the person reference is the same one
  }

  at(streetAddress: string) {
    this.person.streetAddress = streetAddress;
    return this; // fluent interface, makes intance methods chainable
  }

  in(city: string) {
    this.person.city = city;
    return this;
  }

  withPostCode(postCode: string) {
    this.person.postCode = postCode;
    return this;
  }
}

// Sub builder
export class PersonJobBuilder extends PersonBuilder {
  constructor(person: IPerson) {
    super(person);
  }

  at(companyName: string) {
    this.person.companyName = companyName;
    return this;
  }

  as(position: string) {
    this.person.position = position;
    return this;
  }

  earning(annualIncome: number) {
    this.person.annualIncome = annualIncome;
    return this;
  }
}
