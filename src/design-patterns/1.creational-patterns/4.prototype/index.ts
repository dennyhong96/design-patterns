import { Builder } from "./Builder";

// Prototype pattern enabling copying existing objects without the code depending o theor classes.
export async function PrototypePattern() {
  const builder = new Builder();
  const a = builder.createOne("A");
  const b = builder.createOne("B");
  [a, b].forEach((prototype) => console.log(prototype.toString()));
}
