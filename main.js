const samples = 10;
const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");

const cx0 = 0;
const cy0 = 0;
const r0 = 55;

for (let i = 0; i < samples; i++) {
  const circle = document.createElementNS(svgns, "circle");

  const angle = i * ((2 * Math.PI) / samples) + Math.PI / 2;

  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);

  circle.setAttributeNS(null, "cx", cx);
  circle.setAttributeNS(null, "cy", cy);
  circle.setAttributeNS(null, "r", 1);
  container.appendChild(circle);
}
