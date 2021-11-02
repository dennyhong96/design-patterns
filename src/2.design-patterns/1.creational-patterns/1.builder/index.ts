import { CodeBuilder } from "./CodeBulder";
import { PersonBuilder } from "./PersonBuliders";
import { Tag } from "./Tag";

// Builder pattern provides any API for constructing objects step-by-step, these objects are
// typically complex and hard to constrcuct just by using a single constructor call
export async function BuilderPattern() {
  const htmlString1 = Tag.create("ul")
    .addChild("li", "foo")
    .addChild("li", "bar")
    .addChild("li", "baz")
    .build()
    .toString();
  console.log("HTML string 1 :\n", htmlString1);
  const htmlString2 = Tag.create("ul")
    .addChild("li", "foo")
    .addChild("li", "bar")
    .addChild("li", "baz")
    .clear()
    .build()
    .toString();
  console.log("HTML string 2 :\n", htmlString2);

  const codeString1 = new CodeBuilder("Person")
    .addField("name")
    .addField("age")
    .build()
    .toString();
  console.log("Code string 1:\n", codeString1);
  const codeString2 = new CodeBuilder("Vehicle").build().toString();
  console.log("Code string 2:\n", codeString2);

  // Builder with multiple sub-builders to help build out different aspects of the object
  const personInfo = new PersonBuilder().lives // PersonAddressBuilder
    .at("9000 Roosevelt Way")
    .in("Seattle")
    .withPostCode("98005")
    .works // PersonJobBuilder
    .as("Frontend Developer")
    .at("IMC")
    .earning(9999999)
    .build()
    .toString();
  console.log("Person Info: \n", personInfo);
}
