import { Person } from "../Person";
import { RelationshipTypes } from "./RelationshipTypes";

export interface IRelationship {
  from: Person;
  to: Person;
  type: RelationshipTypes;
}
