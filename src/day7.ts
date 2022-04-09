import h from "hyperscript";

import { Circle, Line, SVGBuilder } from "./svgUtil";
import { ratioToXY } from "./trigUtil";

const getDayRatio = (time: {
  getDay: () => number;
  getHours: () => number;
  getMinutes: () => number;
}) => {
  const days = time.getDay();
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return (24 * 60 * days + 60 * hours + minutes) / (7 * 24 * 60);
};

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

  // We divide by the total seconds in 12 hours and mod by 1 to wrap at noon
  return (secondsToday / (12 * 60 * 60)) % 1;
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
  const { x: dayX, y: dayY } = ratioToXY(getDayRatio(time));
  const { x: hourX, y: hourY } = ratioToXY(getHourRatio(time));
  const { x: minuteX, y: minuteY } = ratioToXY(getMinuteRatio(time));
  const { x: secondX, y: secondY } = ratioToXY(getSecondRatio(time));

  return {
    dayX,
    dayY,
    hourX,
    hourY,
    minuteX,
    minuteY,
    secondX,
    secondY,
  };
};

const createDayMarkers = () =>
  new Array(7).fill(null).map((_, i) => {
    const ratio = i / 7;
    const x = Math.sin(ratio * Math.PI * 2);
    const y = -Math.cos(ratio * Math.PI * 2);
    return Line({
      x1: 95 * x,
      x2: 90 * x,
      y1: 95 * y,
      y2: 90 * y,
      color: "green",
    });
  });

/**
 * Updates hands according to the time now
 *
 * WARNING operates by side effect
 */
const updateHandPositions = (
  dayHand: SVGLineElement,
  hourHand: SVGLineElement,
  minuteHand: SVGLineElement,
  secondHand: SVGLineElement
) => {
  const { dayX, dayY, hourX, hourY, minuteX, minuteY, secondX, secondY } =
    getHandPositions(new Date());

  dayHand.setAttribute("x2", (60 * dayX).toString());
  dayHand.setAttribute("y2", (60 * dayY).toString());
  hourHand.setAttribute("x2", (60 * hourX).toString());
  hourHand.setAttribute("y2", (60 * hourY).toString());
  minuteHand.setAttribute("x2", (80 * minuteX).toString());
  minuteHand.setAttribute("y2", (80 * minuteY).toString());
  secondHand.setAttribute("x2", (80 * secondX).toString());
  secondHand.setAttribute("y2", (80 * secondY).toString());
};

/**
 * Constructs element containing an animated 7 day clock face
 */
export const Day7 = () => {
  const dayHand = Line({ color: "green" });
  const hourHand = Line();
  const minuteHand = Line();
  const secondHand = Line({ strokeWidth: 3 });

  updateHandPositions(dayHand, hourHand, minuteHand, secondHand);
  setInterval(() => {
    updateHandPositions(dayHand, hourHand, minuteHand, secondHand);
  }, 10);

  const svg = SVGBuilder()
    .withMany(createDayMarkers())
    .with(Circle())
    .with(dayHand)
    .with(hourHand)
    .with(minuteHand)
    .with(secondHand)
    .build();

  return h(
    "article",
    h("h2", "7 day clock face"),
    h(
      "p",
      "There are 7 days in a week. The day hand (displayed in green) treats the midnight between Saturday and Sunday as the start of the week, and completes a full rotation exactly once per week. Each radial marker represents one day."
    ),
    svg
  );
};
