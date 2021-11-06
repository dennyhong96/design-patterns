import { Connectable } from "./Connectable";
import { Neuron } from "./Neuron";

// Collection of scalar object
export class NeuronLayer extends Connectable<NeuronLayer> {
  public neurons: Neuron[] = [];

  constructor(count: number) {
    super();
    while (count-- > 0) {
      this.neurons.push(new Neuron());
    }
  }

  toString() {
    return `A layer with ${this.neurons.length} neurons`;
  }

  [Symbol.iterator]() {
    const neurons = this.neurons;
    let index = -1;
    return {
      next: () => ({
        value: neurons[++index],
        done: !(index in neurons),
      }),
    };
  }
}
