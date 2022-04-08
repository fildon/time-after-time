import h from "hyperscript";

/**
 * Given a timestamp, returns the ratio of the hours in the day mod 12
 */
export const getHourHandRatio = (time: {
  getSeconds: () => number;
  getMinutes: () => number;
  getHours: () => number;
}) => {
  const seconds = time.getSeconds(); // 0 to 59
  const minutes = time.getMinutes(); // 0 to 59
  const hours = time.getHours(); // 0 to 23

  // Seconds since the start of the day
  const secondsToday = 60 * 60 * hours + 60 * minutes + seconds;

  // We divide by the total seconds in 12 hours and mod by 1 to wrap at noon
  return (secondsToday / (12 * 60 * 60)) % 1;
};

/**
 * Given a timestamp, returns the ratio of the minutes relative to the hour
 */
export const getMinuteHandRatio = (time: {
  getSeconds: () => number;
  getMinutes: () => number;
}) => (60 * time.getMinutes() + time.getSeconds()) / (60 * 60);

/**
 * Given a timestamp returns the x and y coordinates of the
 * hour and minute hands, assuming they have a length of 1
 */
export const getHandPositions = (time: {
  getSeconds: () => number;
  getMinutes: () => number;
  getHours: () => number;
}) => {
  const hourRatio = getHourHandRatio(time);
  const hourX = Math.sin(hourRatio * Math.PI * 2);
  const hourY = -Math.cos(hourRatio * Math.PI * 2);

  const minuteRatio = getMinuteHandRatio(time);
  const minuteX = Math.sin(minuteRatio * Math.PI * 2);
  const minuteY = -Math.cos(minuteRatio * Math.PI * 2);

  return {
    hourX,
    hourY,
    minuteX,
    minuteY,
  };
};

const createMinuteHand = () => {
  const minuteHand = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  Object.entries({
    x1: "0",
    y1: "0",
    stroke: "black",
    "stroke-width": "5",
    "stroke-linecap": "round",
  }).forEach(([k, v]) => minuteHand.setAttribute(k, v));
  return minuteHand;
};

const createHourHand = () => {
  const hourHand = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  Object.entries({
    x1: "0",
    y1: "0",
    stroke: "black",
    "stroke-width": "5",
    "stroke-linecap": "round",
  }).forEach(([k, v]) => hourHand.setAttribute(k, v));
  return hourHand;
};

const createClockFace = () => {
  const clockFace = document.createElementNS(
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
  }).forEach(([k, v]) => clockFace.setAttribute(k, v));
  return clockFace;
};

const createHourMarkers = () => {
  const markers = new Array(12)
    .fill(null)
    .map(() => document.createElementNS("http://www.w3.org/2000/svg", "line"));

  markers.forEach((marker, i) => {
    const ratio = i / 12;
    const x = Math.sin(ratio * Math.PI * 2);
    const y = -Math.cos(ratio * Math.PI * 2);
    Object.entries({
      x1: (95 * x).toString(),
      x2: (90 * x).toString(),
      y1: (95 * y).toString(),
      y2: (90 * y).toString(),
      stroke: "black",
      "stroke-width": "5",
      "stroke-linecap": "round",
    }).forEach(([k, v]) => marker.setAttribute(k, v));
  });
  return markers;
};

/**
 * Updates hour and minute hands according to the time now
 *
 * WARNING operates by side effect
 */
const updateHandPositions = (
  hourHand: SVGLineElement,
  minuteHand: SVGLineElement
) => {
  const { hourX, hourY, minuteX, minuteY } = getHandPositions(new Date());

  hourHand.setAttribute("x2", (60 * hourX).toString());
  hourHand.setAttribute("y2", (60 * hourY).toString());
  minuteHand.setAttribute("x2", (80 * minuteX).toString());
  minuteHand.setAttribute("y2", (80 * minuteY).toString());
};

/**
 * Constructs Div element containing an animated 12 hour clock face
 */
export const Classic12 = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "-100 -100 200 200");

  const hourHand = createHourHand();
  const minuteHand = createMinuteHand();

  updateHandPositions(hourHand, minuteHand);
  setInterval(() => {
    updateHandPositions(hourHand, minuteHand);
  }, 1000);

  svg.appendChild(createClockFace());
  createHourMarkers().forEach((marker) => svg.appendChild(marker));
  svg.appendChild(hourHand);
  svg.appendChild(minuteHand);

  return h("section", h("h2", "The Classic 12 hour clock face"), svg);
};
