import { IPerson } from "./IPerson";
import { IRelationship } from "./IRelationship";

export interface IRelationshipsStorage {
  data: IRelationship[];
  addParentAndChild(parent: IPerson, child: IPerson): void;
}
