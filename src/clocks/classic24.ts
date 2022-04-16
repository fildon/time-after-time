import h from "hyperscript";

import { Circle, Line, RotationAnimation, SVG } from "../utils/svg";
import {
  get24HourRatio,
  getHourRatio,
  getMinuteRatio,
  Time,
} from "../utils/time";

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
      color: i % 2 === 0 ? "black" : "blue",
    });
  });

/**
 * Constructs element containing an animated 24 hour clock face
 */
export const Classic24 = (now: Time) => {
  const hourHand = Line({
    y2: -60,
    color: "blue",
    children: [
      RotationAnimation({
        startOffset: get24HourRatio(now),
        duration: "24h",
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
    ...createHourMarkers(),
    Circle(),
    hourHand,
    minuteHand,
    secondHand
  );

  return h(
    "article",
    h("h2", "24 hour clock face"),
    h(
      "p",
      `
        The usual 12 radial markers are displayed in large.
        An additional 12 smaller blue markers are interleaved providing 24 markers, one for each hour of the day.
        The hour hand (displayed in blue) moves only a half as fast as on a conventional 12 hour clock face.
        It completes one rotation only once per full day.
      `
    ),
    svg
  );
};
