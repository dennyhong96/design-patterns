import { IRelationshipsQueries } from "./IRelationshipsQueries";
import { IRelationshipsStorage } from "./IRelationshipsStorage";

export interface IRelationships
  extends IRelationshipsStorage,
    IRelationshipsQueries {}
