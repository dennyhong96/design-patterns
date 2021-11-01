import { Adapter } from "./Adapter";
import { ITarget } from "./ITarget";

// Adapter pattern converts the interface of class into another interfce clients expect.
// It lets class work together that couldn't otherwise because of incompatible interfaces.
export async function AdapterPattern() {
  const target: ITarget = new Adapter();
  target.call();
}
