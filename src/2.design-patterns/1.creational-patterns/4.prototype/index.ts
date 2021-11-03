import { Serializer } from "./Serializer";
import { Address } from "./Address";
import { Person } from "./Person";
import { EmployeeFactory } from "./EmployeeFactory";

// An object that supports method to clone itself (deep clone)
export async function PrototypePattern() {
  // Prototype Pattern using deepCopy method on classes
  // Requires every class in the classes hierarchy to support deep copy
  const denny = new Person(
    "Denny",
    24,
    new Address("9000 Roosevelt Way SE", "Seattle", "WA", "98115")
  );
  console.log(denny.toString());

  // Making a new object from prototype
  const sharon = denny.deepCopy();
  // Modify the new object property values
  sharon.name = "Sharon";
  sharon.age = 27;
  console.log(sharon.toString());

  // Prototype Pattern using a serializer class
  // Doesn't require every class to support deep copy
  const denny2 = new Person(
    "Denny",
    24,
    new Address("9000 Roosevelt Way SE", "Seattle", "WA", "98115")
  );
  console.log(denny2.toString());

  const serializer = new Serializer([Person, Address]);
  const sharon2 = serializer.clone(denny2);
  sharon2.name = "Sharon";
  sharon2.age = 27;
  console.log(sharon2.toString());

  // Prototype Factory
  const mainCampusEmployee = EmployeeFactory.newMainCampusEmployee("Denny", 24);
  console.log("mainCampusEmployee", mainCampusEmployee);
  const newCampusEmployee = EmployeeFactory.newNewCampusEmployee("Sharon", 27);
  console.log("newCampusEmployee", newCampusEmployee);
}
