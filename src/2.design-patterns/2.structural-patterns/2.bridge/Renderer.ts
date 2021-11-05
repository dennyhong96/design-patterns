import { IRenderer } from "./types/IRenderer";

// An hierarchy of Renderers
export class Renderer implements IRenderer {
  renderCircle(radius: number) {
    console.log(`Renderer: Rendering a circle with radius ${radius}`);
  }
  renderSquare(side: number) {
    console.log(`Renderer: Rendering a square with side ${side}`);
  }
}

export class VectorRender extends Renderer {
  renderCircle(radius: number) {
    console.log(`Vector Renderer: Rendering a circle with radius ${radius}`);
  }
  renderSquare(side: number) {
    console.log(`Vector Renderer: Rendering a square with side ${side}`);
  }
}

export class RasterRenderer extends Renderer {
  renderCircle(radius: number) {
    console.log(`Raster Renderer: Rendering a circle with radius ${radius}`);
  }
  renderSquare(side: number) {
    console.log(`Raster Renderer: Rendering a square with side ${side}`);
  }
}
