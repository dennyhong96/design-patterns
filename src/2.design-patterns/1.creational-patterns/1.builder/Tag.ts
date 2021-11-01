import { HTMLBuilder } from "./HTMLBuilder";
import { ITag } from "./types/ITag";

export class Tag implements ITag {
  public static indentSize = 2;
  public children: ITag[] = [];

  constructor(public name: string = "", public text: string = "") {
    this.children = [];
  }

  // Clients shouldn't be working with the Tag class diretly
  // should use the builder instead
  public static create(rootName: string): HTMLBuilder {
    return new HTMLBuilder(rootName);
  }

  public toString(indentLevel: number = 0): string {
    const htmlParts: string[] = [];

    htmlParts.push(`${this.indent(indentLevel)}<${this.name}>\n`);

    if (this.text.length) {
      htmlParts.push(this.indent(indentLevel + 1));
      htmlParts.push(this.text);
      htmlParts.push("\n");
    }

    for (const child of this.children) {
      htmlParts.push(child.toString(indentLevel + 1));
    }

    htmlParts.push(`${this.indent(indentLevel)}</${this.name}>\n`);

    return htmlParts.join("");
  }

  private indent(level: number): string {
    return " ".repeat(level * Tag.indentSize);
  }
}
