import { samples, svgns, multiplicationFactor } from "./constants";
import { Config } from "./interfaces/Config";
import { querySelector, setAttribute } from "./misc/document";
import { getAngle, getPointOnCircleFromAngle } from "./misc/math";

export class Board {
  config: Config = {
    samples: 1,
    multiplicationFactor: 1,
  };

  draw() {
    const { multiplicationFactor, samples } = this.config;

    // on trace les graduations
    const container = querySelector("g.samples");
    for (let i = 0; i < samples; i++) {
      const circle = document.createElementNS(svgns, "circle");
      const angle = getAngle(i, samples);
      const p = getPointOnCircleFromAngle(angle);

      setAttribute(circle, "cx", p.x);
      setAttribute(circle, "cy", p.y);
      setAttribute(circle, "r", 1);
      container.appendChild(circle);
    }

    // on trace les lignes
    const lineContainer = querySelector("g.lines");
    for (let i = 0; i < samples; i++) {
      const line = document.createElementNS(svgns, "line");

      const angle1 = getAngle(i, samples);
      const p1 = getPointOnCircleFromAngle(angle1);
      const angle2 = getAngle(i * multiplicationFactor, samples);
      const p2 = getPointOnCircleFromAngle(angle2);

      setAttribute(line, "x1", p1.x);
      setAttribute(line, "y1", p1.y);
      setAttribute(line, "x2", p2.x);
      setAttribute(line, "y2", p2.y);
      lineContainer.appendChild(line);
    }
  }

  setConfig(config: Config) {
    this.config = config;
  }
}
