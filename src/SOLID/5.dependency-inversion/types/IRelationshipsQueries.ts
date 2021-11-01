import { IPerson } from "./IPerson";

export interface IRelationshipsQueries {
  findAddChildrenOf(parent: IPerson): IPerson[];
}
