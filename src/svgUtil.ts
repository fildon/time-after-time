export const Line = ({
  x1 = 0,
  x2 = 0,
  y1 = 0,
  y2 = 0,
}: {
  x1?: number;
  x2?: number;
  y1?: number;
  y2?: number;
} = {}) => {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  Object.entries({
    x1: x1.toString(),
    x2: x2.toString(),
    y1: y1.toString(),
    y2: y2.toString(),
    stroke: "black",
    "stroke-width": "5",
    "stroke-linecap": "round",
  }).forEach(([k, v]) => line.setAttribute(k, v));
  return line;
};

export const Circle = () => {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  Object.entries({
    cx: "0",
    cy: "0",
    r: "95",
    stroke: "black",
    fill: "transparent",
    "stroke-width": "5",
  }).forEach(([k, v]) => circle.setAttribute(k, v));
  return circle;
};
