import { Address } from "./Address";
import { Person } from "./Person";

// An object that supports method to clone itself (deep clone)
export async function PrototypePattern() {
  const denny = new Person(
    "Denny",
    24,
    new Address("9000 Roosevelt Way SE", "Seattle", "WA", "98115")
  );

  console.log(denny.toString());

  // Use cloning to create a new object
  const sharon = denny.deepCopy();
  // Modify the new object property values
  sharon.name = "Sharon";
  sharon.age = 27;

  console.log(sharon.toString());
}
