import { Singleton } from "./Singleton";

// Only allow for instantiating the class to one single instance.
export async function SingletonPattern() {
  const object1 = new Singleton();
  const object2 = new Singleton();
  console.log("object1 === object2", object1 === object2);
}
