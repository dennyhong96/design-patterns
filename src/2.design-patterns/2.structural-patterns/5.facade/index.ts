import { Facade } from "./Facade";

// Facade pattern provides a simplified interface to interact with one or several complex sub systems
export async function FacadePattern() {
  const facade = new Facade();
  facade.doWork();
}
