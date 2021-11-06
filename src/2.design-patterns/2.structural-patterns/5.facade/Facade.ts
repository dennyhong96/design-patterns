import { SubSystem1 } from "./SubSystem1";
import { SubSystem2 } from "./SubSystem2";

export class Facade {
  // Complex sub systems
  protected subsystem1: SubSystem1;
  protected subsystem2: SubSystem2;

  constructor(subSystem1?: SubSystem1, subSystem2?: SubSystem2) {
    this.subsystem1 = subSystem1 ?? new SubSystem1();
    this.subsystem2 = subSystem2 ?? new SubSystem2();
  }

  doWork(): void {
    console.log("Facade delegating work to sub systems...");
    this.subsystem1.init();
    this.subsystem2.init();
    this.subsystem1.exec();
    this.subsystem2.exec();
  }
}
