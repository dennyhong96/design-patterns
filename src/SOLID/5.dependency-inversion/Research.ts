import { IPerson } from "./types/IPerson";
import { IRelationships } from "./types/IRelationships";

import { IResearch } from "./types/IResearch";

// A high-level module
export class Research implements IResearch {
  // Reseach doesn't depend on an implementation of relationships
  // it depends on an abstraction - interface
  constructor(public _relationships: IRelationships) {}

  searchChildren(person: IPerson): IPerson[] {
    // return this._relationships.data...
    // This is wrong, because "_relationships.data..." is depending on implementation details of Relationships class

    return this._relationships.findAddChildrenOf(person);
  }
}
