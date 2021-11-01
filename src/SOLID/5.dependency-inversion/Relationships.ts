import { IPerson } from "./types/IPerson";
import { IRelationship } from "./types/IRelationship";
import { RelationshipTypes } from "./types/RelationshipTypes";
import { IRelationships } from "./types/IRelationships";

// A low-level module
export class Relationships implements IRelationships {
  constructor(public data: IRelationship[] = []) {}

  public addParentAndChild(parent: IPerson, child: IPerson) {
    this.data.push({
      from: parent,
      to: child,
      type: RelationshipTypes.Parent,
    });
  }

  public findAddChildrenOf(person: IPerson): IPerson[] {
    return this.data
      .filter(
        (rel) => rel.from === person && rel.type === RelationshipTypes.Parent
      )
      .map((rel) => rel.to);
  }
}
