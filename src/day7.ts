import h from "hyperscript";

import { Circle, Line, RotationAnimation, SVG } from "./utils/svg";
import {
  getWeekRatio,
  get12HourRatio,
  getHourRatio,
  getMinuteRatio,
} from "./utils/time";

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
 * Constructs element containing an animated 7 day clock face
 */
export const Day7 = () => {
  const now = new Date();

  const dayHand = Line({
    y2: -60,
    color: "green",
    children: [
      RotationAnimation({
        startOffset: getWeekRatio(now),
        duration: "168h", // There are 168 hours in a week
      }),
    ],
  });

  const hourHand = Line({
    y2: -60,
    children: [
      RotationAnimation({
        startOffset: get12HourRatio(now),
        duration: "12h",
      }),
    ],
  });

  const minuteHand = Line({
    y2: -80,
    children: [
      RotationAnimation({
        startOffset: getHourRatio(now),
        duration: "60min",
      }),
    ],
  });

  const secondHand = Line({
    strokeWidth: 3,
    y2: -80,
    children: [
      RotationAnimation({
        startOffset: getMinuteRatio(now),
        duration: "60s",
      }),
    ],
  });

  const svg = SVG(
    ...createDayMarkers(),
    Circle(),
    dayHand,
    hourHand,
    minuteHand,
    secondHand
  );

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
