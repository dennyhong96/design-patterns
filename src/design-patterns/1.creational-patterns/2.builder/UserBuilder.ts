import { User } from "./User";

export class UserBuilder {
  private name: string = "";
  private age: number = 0;
  private phone: string = "";
  private address: string = "";

  constructor(name: string) {
    this.name = name;
  }

  public get Name() {
    return this.name;
  }

  public setAge(value: number) {
    this.age = value;
    return this;
  }
  public get Age() {
    return this.age;
  }

  public setPhone(value: string) {
    this.phone = value;
    return this;
  }
  public get Phone() {
    return this.phone;
  }

  public setAddress(value: string) {
    this.address = value;
    return this;
  }
  public get Address() {
    return this.address;
  }

  build(): User {
    if (!this.age) {
      throw new Error(`Cannot build user without setting an age.`);
    }
    if (!this.phone) {
      throw new Error(`Cannot build user without setting an phone.`);
    }
    if (!this.address) {
      throw new Error(`Cannot build user without setting an address.`);
    }
    return new User(this);
  }
}
