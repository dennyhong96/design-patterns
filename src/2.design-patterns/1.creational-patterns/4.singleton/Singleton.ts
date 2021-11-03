import { ConstructorWithInstanceType } from "./types/ConstructorWithInstanceType";

export class Singleton {
  constructor() {
    const constructor = this
      .constructor as ConstructorWithInstanceType<Singleton>;

    // If this is not the first time the constructor is called
    // Return the instance that's attached to the constructor function
    if (constructor._instance) return constructor._instance;

    // If this is the first time the constructor is called
    // Attach the instance as a property to the constructor function
    constructor._instance = this;
  }
}
