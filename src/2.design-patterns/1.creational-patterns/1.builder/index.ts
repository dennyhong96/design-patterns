import { PersonBuilder } from "./PersonBuliders";
import { Tag } from "./Tag";

// Builder pattern provides any API for constructing objects step-by-step, these objects are
// typically complex and hard to constrcuct just by using a single constructor call
export async function BuilderPattern() {
  const html = Tag.create("ul")
    // Step 1
    .build()
    // Step 2
    .addChild("li", "foo")
    .addChild("li", "bar")
    .addChild("li", "baz");

  console.log(
    "HTML string:\n",
    // Step 3
    html.toString()
  );

  // Step 4
  html.clear();

  console.log("HTML string (cleared):\n", html.toString());

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
