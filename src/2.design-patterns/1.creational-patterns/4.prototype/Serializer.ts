import { ConstructorType } from "./types/ConstructorType";
import { ObjectWithType } from "./types/ObjectWithType";

export class Serializer {
  public Types: ConstructorType[] = [];

  constructor(Types: ConstructorType[]) {
    this.Types = Types;
  }

  // Add a _type marker recursively
  public serialize(object: any) {
    if (typeof object === "object" && object !== null) {
      const Type = this.Types.find((t) => t.name === object.constructor.name);
      if (Type) {
        (object as ObjectWithType)["_type"] = Type.name;
        for (const key in object) {
          if (object.hasOwnProperty(key)) {
            this.serialize(object[key]);
          }
        }
      }
    }
    return object;
  }

  // Reconstruct class instances recursively using the _type markers
  public deserialize(object: any) {
    if (typeof object === "object" && object !== null) {
      if (object.hasOwnProperty("_type")) {
        const Type = this.Types.find(
          (t) => t.name === (object as ObjectWithType)._type
        );
        if (Type) {
          const obj = new Type();
          for (const key in obj) {
            if (object.hasOwnProperty(key)) {
              // @ts-ignore
              obj[key] = this.deserialize(object[key]);
            }
            delete (obj as Partial<ObjectWithType>)._type;
          }
          return obj;
        }
      }
    }
    return object;
  }

  public clone<T>(object: T): T {
    const serialized = this.serialize(object);
    const copy = JSON.parse(JSON.stringify(serialized));
    const deserialized = this.deserialize(copy);
    return deserialized;
  }
}
