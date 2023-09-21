const samples = 10;
const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");
console.log("container: ", container);

for (let i = 0; i < samples; i++) {
  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", 34);
  circle.setAttributeNS(null, "cy", 23);
  circle.setAttributeNS(null, "r", 1);
  container.appendChild(circle);
}
