import "./style.css";

import {
  cx0,
  cy0,
  multiplicationFactor,
  r0,
  samples,
  svgns,
} from "./constants";

// on trace les graduations
const container = document.querySelector("g.samples");
console.log("container: ", container);
if (container === null) {
  throw new Error("oups...");
}
for (let i = 0; i < samples; i++) {
  const circle = document.createElementNS(svgns, "circle");

  const angle = i * ((2 * Math.PI) / samples) - Math.PI / 2;

  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);

  circle.setAttributeNS(null, "cx", cx + "");
  circle.setAttributeNS(null, "cy", String(cy));
  circle.setAttributeNS(null, "r", "1");
  container.appendChild(circle);
}

// on trace les lignes
const lineContainer = document.querySelector("g.lines");
if (lineContainer === null) {
  throw new Error("oups...");
}
for (let i = 0; i < samples; i++) {
  const line = document.createElementNS(svgns, "line");

  const angle1 = i * ((2 * Math.PI) / samples) - Math.PI / 2;
  const x1 = cx0 + r0 * Math.cos(angle1);
  const y1 = cy0 + r0 * Math.sin(angle1);
  const angle2 =
    multiplicationFactor * i * ((2 * Math.PI) / samples) - Math.PI / 2;
  const x2 = cx0 + r0 * Math.cos(angle2);
  const y2 = cy0 + r0 * Math.sin(angle2);

  line.setAttributeNS(null, "x1", x1 + "");
  line.setAttributeNS(null, "y1", y1 + "");
  line.setAttributeNS(null, "x2", x2 + "");
  line.setAttributeNS(null, "y2", y2 + "");
  lineContainer.appendChild(line);
}
