import { Formatter } from "./Formatter";
import { FormatterTypes } from "./types/FormatterTypes";
import { Username } from "./Username";

// Flyweight (caching) is a space optimization technique that enables using less
// memory by storing externally the data associated with similar objects.
export async function FlyweightPattern() {
  const text = "Flyweight pattern is awesome.";
  const formatter = new Formatter(text);
  formatter.addFormat(0, 8, FormatterTypes.Capitalize);
  console.log(formatter.toString());

  const dennyHong = new Username("Denny Hong");
  const josephHong = new Username("Joseph Hong");
  console.log(dennyHong.toString());
  console.log(josephHong.toString());
  console.log(Username.namesCache);
}
