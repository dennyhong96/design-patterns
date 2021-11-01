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
}
