import { IPerson } from "./IPerson";

export interface IPersonBulder {
  lives: IPersonBulder;
  works: IPersonBulder;
  build(): IPerson;
}
