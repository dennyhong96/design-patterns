import { Formatter } from "./Formatter";
import { FormatterTypes } from "./types/FormatterTypes";

// Flyweight (caching) is a space optimization technique that enables using less
// memory by storing externally the data associated with similar objects.
export async function FlyweightPattern() {
  const text = "Flyweight pattern is awesome.";
  const formatter = new Formatter(text);
  formatter.addFormat(0, 8, FormatterTypes.Capitalize);
  console.log(formatter.toString());
}
