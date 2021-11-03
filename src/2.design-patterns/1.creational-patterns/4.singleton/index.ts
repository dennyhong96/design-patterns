import { Monostate } from "./Monostate";
import { Singleton } from "./Singleton";

// Only allow for instantiating the class to one single instance.
export async function SingletonPattern() {
  const object1 = new Singleton();
  const object2 = new Singleton();
  console.log("object1 === object2", object1 === object2);

  const stateUser1 = new Monostate();
  const stateUser2 = new Monostate();
  stateUser1.likes++;
  stateUser1.views++;
  stateUser2.likes += 5;
  stateUser2.views += 5;
  console.log(stateUser1.likes, stateUser1.views);
}
