import { IPerson } from "./IPerson";
import { IRelationships } from "./IRelationships";

export interface IResearch {
  _relationships: IRelationships;
  searchChildren(person: IPerson): IPerson[];
}
