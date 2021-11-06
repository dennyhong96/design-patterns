import { Connectable } from "./Connectable";

// Scalar object
export class Neuron extends Connectable<Neuron> {
  public in: Neuron[] = [];
  public out: Neuron[] = [];

  constructor() {
    super();
  }

  toString() {
    return `A neuron with ${this.in.length} inputs and ${this.out.length} outputs`;
  }

  // The scalar object masks itself as a "collections"
  // By implementing an iteractor that only returns itself when looped
  [Symbol.iterator]() {
    const neurons = [this];
    let index = -1;
    return {
      next: () => ({
        value: neurons[++index],
        done: !(index in neurons),
      }),
    };
  }
}
