import { DrawPointService } from "./DrawPointService";
import { LineToPointAdapter } from "./LineToPointAdapter";
import { Point } from "./Point";
import { VectorRectangle } from "./Vector";

// Getting the interface you want from the interface you need.
export async function AdapterPattern() {
  // The DrawPointService service does NOT know how to work with VectorRectangle interface
  const vectorRectangle = new VectorRectangle(5, 5, 10, 10);
  drawPoints(vectorRectangle); // Generate Points from the VectorRectangle's lines
  drawPoints(vectorRectangle); // Points are retrived from the Adapter's cache
}

function drawPoints(vectorRectangle: VectorRectangle) {
  for (const line of vectorRectangle) {
    // LineToPointAdapter transforms the VectorRectangle interface to Point interface so we can use DrawPointService
    const lineToPointAdapter = new LineToPointAdapter(line);
    lineToPointAdapter.points.forEach((point: Point) => {
      // DrawPointService API only knows how to work with the Point interface
      new DrawPointService(point).draw();
    });
  }
}
