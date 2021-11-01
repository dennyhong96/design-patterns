import { IPerson } from "./types/IPerson";

export class Person implements IPerson {
  constructor(public name: string) {}
}
