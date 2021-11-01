import { IPerson } from "./IPerson";
import { IRelationships } from "./IRelationships";

export interface IResearch {
  searchChildren(person: IPerson): IPerson[];
}
