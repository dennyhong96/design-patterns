import { Person } from "./Person";
import { Relationships } from "./Relationships";
import { Research } from "./Research";

export async function DependencyInversionPrinciple() {
  const denny = new Person("Denny");
  const jackie = new Person("Jackie");
  const sam = new Person("Sam");

  const relationships = new Relationships();
  relationships.addParentAndChild(denny, jackie);
  relationships.addParentAndChild(denny, sam);

  // A high-level module (Research) should not directly depend on low-level modules (Relationship)
  // It should depend on an abstract interface, accepting an instance of a low-level class that implements the interface
  const research = new Research(relationships);
  console.log(research.searchChildren(denny));
}
