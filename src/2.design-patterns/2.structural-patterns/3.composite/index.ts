import { Circle } from "./Circle";
import { GraphicObject } from "./GraphicObject";
import { Neuron } from "./Neuron";
import { NeuronLayer } from "./NeuronLayer";
import { Square } from "./Square";
import { GraphicObjectColorTypes } from "./types/GraphicObjectColorTypes";

export async function CompositePattern() {
  // Graphic Objects
  const rootDrawing = new GraphicObject();
  rootDrawing.children.push(new Circle("a", GraphicObjectColorTypes.RED));
  rootDrawing.children.push(new Square("b", GraphicObjectColorTypes.YELLOW));

  const childDrawing = new GraphicObject();
  childDrawing.children.push(new Square("c", GraphicObjectColorTypes.BLUE));
  childDrawing.children.push(new Circle("d", GraphicObjectColorTypes.YELLOW));
  rootDrawing.children.push(childDrawing);

  // The interface is consistent no matter if we are dealing
  // with a single GraphicObject instance or a tree of GraphicObject instances
  console.log(rootDrawing.toString());

  // Neural Network
  const neuron1 = new Neuron();
  const neuron2 = new Neuron();
  const neuronLayer1 = new NeuronLayer(3);
  const neuronLayer2 = new NeuronLayer(4);

  neuron1.connectTo(neuron2);
  neuron1.connectTo(neuronLayer2);
  neuronLayer2.connectTo(neuron1);
  neuronLayer1.connectTo(neuronLayer2);

  console.log(neuron1.toString());
  console.log(neuron2.toString());
  console.log(neuronLayer1.toString());
  console.log(neuronLayer2.toString());
}
