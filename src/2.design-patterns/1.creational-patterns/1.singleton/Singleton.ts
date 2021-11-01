export class Singleton {
  // The single instance stored
  private static _instance: Singleton;

  // private constructor so no instance can be instantiated from the outside
  private constructor() {}

  //
  public static get instance() {
    // Check if an instance of the class is created and stored
    if (!Singleton._instance) {
      // If no instance has been created and stored, create
      // one and store it
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }
}
