import { UserBuilder } from "./UserBuilder";

export class User {
  private name: string;
  private age: number;
  private phone: string;
  private address: string;

  constructor(builder: UserBuilder) {
    this.name = builder.Name;
    this.age = builder.Age;
    this.phone = builder.Phone;
    this.address = builder.Address;
  }

  public get Name() {
    return this.name;
  }

  public get Age() {
    return this.age;
  }

  public get Phone() {
    return this.phone;
  }

  public get Address() {
    return this.address;
  }
}
