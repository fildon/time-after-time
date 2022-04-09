import h from "hyperscript";

import { Circle, Line } from "./svgUtil";
import { ratioToXY } from "./trigUtil";

/**
 * Given a timestamp, returns the ratio of the hours in the day
 */
export const getHourRatio = (time: {
  getSeconds: () => number;
  getMinutes: () => number;
  getHours: () => number;
}) => {
  const seconds = time.getSeconds(); // 0 to 59
  const minutes = time.getMinutes(); // 0 to 59
  const hours = time.getHours(); // 0 to 23

  // Seconds since the start of the day
  const secondsToday = 60 * 60 * hours + 60 * minutes + seconds;

  // We divide by the total seconds in 24 hours
  return secondsToday / (24 * 60 * 60);
};

/**
 * Given a timestamp, returns the ratio of the minutes relative to the hour
 */
export const getMinuteRatio = (time: {
  getSeconds: () => number;
  getMinutes: () => number;
}) => (60 * time.getMinutes() + time.getSeconds()) / (60 * 60);

const getSecondRatio = (time: {
  getSeconds: () => number;
  getMilliseconds: () => number;
}) => (1000 * time.getSeconds() + time.getMilliseconds()) / (60 * 1000);

/**
 * Given a timestamp returns the x and y coordinates of the
 * clock hands, assuming they have a length of 1
 */
export const getHandPositions = (time: {
  getMilliseconds: () => number;
  getSeconds: () => number;
  getMinutes: () => number;
  getHours: () => number;
  getDay: () => number;
}) => {
  const { x: hourX, y: hourY } = ratioToXY(getHourRatio(time));
  const { x: minuteX, y: minuteY } = ratioToXY(getMinuteRatio(time));
  const { x: secondX, y: secondY } = ratioToXY(getSecondRatio(time));

  return {
    hourX,
    hourY,
    minuteX,
    minuteY,
    secondX,
    secondY,
  };
};

const createHourMarkers = () =>
  new Array(24).fill(null).map((_, i) => {
    const ratio = i / 24;
    const x = Math.sin(ratio * Math.PI * 2);
    const y = -Math.cos(ratio * Math.PI * 2);
    const length = i % 2 === 0 ? 10 : 5;
    return Line({
      x1: 95 * x,
      x2: (95 - length) * x,
      y1: 95 * y,
      y2: (95 - length) * y,
      color: i % 2 === 0 ? "black" : "grey",
    });
  });

/**
 * Updates hands according to the time now
 *
 * WARNING operates by side effect
 */
const updateHandPositions = (
  hourHand: SVGLineElement,
  minuteHand: SVGLineElement,
  secondHand: SVGLineElement
) => {
  const { hourX, hourY, minuteX, minuteY, secondX, secondY } = getHandPositions(
    new Date()
  );

  hourHand.setAttribute("x2", (60 * hourX).toString());
  hourHand.setAttribute("y2", (60 * hourY).toString());
  minuteHand.setAttribute("x2", (80 * minuteX).toString());
  minuteHand.setAttribute("y2", (80 * minuteY).toString());
  secondHand.setAttribute("x2", (80 * secondX).toString());
  secondHand.setAttribute("y2", (80 * secondY).toString());
};

/**
 * Constructs element containing an animated 24 hour clock face
 */
export const Classic24 = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "-100 -100 200 200");

  const hourHand = Line({ color: "blue" });
  const minuteHand = Line();
  const secondHand = Line({ strokeWidth: 3 });

  updateHandPositions(hourHand, minuteHand, secondHand);
  setInterval(() => {
    updateHandPositions(hourHand, minuteHand, secondHand);
  }, 10);

  createHourMarkers().forEach((marker) => svg.appendChild(marker));
  svg.appendChild(Circle());
  svg.appendChild(hourHand);
  svg.appendChild(minuteHand);
  svg.appendChild(secondHand);

  return h(
    "article",
    h("h2", "24 hour clock face"),
    h(
      "p",
      "The usual 12 radial markers are displayed in large. An additional 12 smaller grey markers are interleaved providing 24 markers, one for each hour of the day. The hour hand (displayed in blue) moves only a half as fast as on a conventional 12 hour clock face. It completes one rotation only once per full day."
    ),
    svg
  );
};
