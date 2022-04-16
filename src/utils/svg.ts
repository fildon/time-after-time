export const SVG = (...children: Array<SVGElement>) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "-100 -100 200 200");
  children.forEach((child) => svg.appendChild(child));
  return svg;
};

export const Group = (...children: Array<SVGElement>) => {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

  children.forEach((child) => group.appendChild(child));

  return group;
};

export const Line = ({
  color = "black",
  strokeWidth = 5,
  x1 = 0,
  x2 = 0,
  y1 = 0,
  y2 = 0,
  children = [],
}: {
  color?: string;
  strokeWidth?: number;
  x1?: number;
  x2?: number;
  y1?: number;
  y2?: number;
  children?: Array<SVGElement>;
} = {}) => {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  Object.entries({
    x1: x1.toString(),
    x2: x2.toString(),
    y1: y1.toString(),
    y2: y2.toString(),
    stroke: color,
    "stroke-width": strokeWidth.toString(),
    "stroke-linecap": "round",
  }).forEach(([k, v]) => line.setAttribute(k, v));
  children.forEach((child) => line.appendChild(child));
  return line;
};

export const Circle = ({
  cx = 0,
  cy = 0,
  r = 95,
  strokeWidth = 5,
}: { cx?: number; cy?: number; r?: number; strokeWidth?: number } = {}) => {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  Object.entries({
    cx: cx.toString(),
    cy: cy.toString(),
    r: r.toString(),
    stroke: "black",
    fill: "transparent",
    "stroke-width": strokeWidth.toString(),
  }).forEach(([k, v]) => circle.setAttribute(k, v));
  return circle;
};

export const Rectangle = ({
  color = "black",
  yOffset = 10,
  width = 100,
  fill = "transparent",
}: {
  color?: string;
  yOffset?: number;
  width?: number;
  fill?: "transparent" | "green";
} = {}) => {
  const rectangle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );

  Object.entries({
    "stroke-width": "2",
    fill,
    height: "50",
    stroke: color,
    width: width.toString(),
    x: "-90",
    y: yOffset.toString(),
  }).forEach(([k, v]) => rectangle.setAttribute(k, v));

  return rectangle;
};

type RotationOpts = {
  startOffset: number;
  duration: `${number}${"h" | "min" | "s" | "ms"}`;
  reverse?: boolean;
};

/**
 * Builds an SVG animateTransform specifically for rotation
 *
 * @param startOffset is between 0 and 1
 * @param duration is a duration string conforming to 'Clock-value'
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#clock-value
 */
export const RotationAnimation = ({
  startOffset,
  duration,
  reverse = false,
}: RotationOpts) => {
  const animation = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animateTransform"
  );

  let [from, to] = [
    `${360 * startOffset} 0 0`,
    `${360 * startOffset + 360} 0 0`,
  ];

  if (reverse) {
    [from, to] = [to, from];
  }

  Object.entries({
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    from,
    to,
    dur: duration,
    repeatCount: "indefinite",
  }).forEach(([k, v]) => animation.setAttribute(k, v));

  return animation;
};
