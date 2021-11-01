import { Singleton } from "./Singleton";

// Singleton pattern is a class of which only one single instance can exist.
export async function SingletonPattern() {
  const singleton1 = Singleton.instance;
  const singleton2 = Singleton.instance;

  if (singleton1 === singleton2) {
    console.log("Two singletons are of the same instance.");
  } else {
    console.log("Two singletons are not of the same instance.");
  }
}
