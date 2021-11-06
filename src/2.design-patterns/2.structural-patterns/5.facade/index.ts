// Facade pattern provides a simplified interface to interact with a library

import { Facade } from "./Facade";

// framework, or other complex set of classes.
export async function FacadePattern() {
  const facade = new Facade();
  facade.doWork();
}
