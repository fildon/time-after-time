import h from "hyperscript";

import { Circle, Line, RotationAnimation, SVG } from "../utils/svg";
import {
  get12HourRatio,
  getHourRatio,
  getMinuteRatio,
  Time,
} from "../utils/time";

const createHourMarkers = () =>
  new Array(12).fill(null).map((_, i) => {
    const ratio = i / 12;
    const x = Math.sin(ratio * Math.PI * 2);
    const y = -Math.cos(ratio * Math.PI * 2);
    return Line({
      x1: 95 * x,
      x2: 90 * x,
      y1: 95 * y,
      y2: 90 * y,
    });
  });

type Foo = SVGElement;

/**
 * Constructs element containing an animated 12 hour clock face
 */
export const Classic12 = (now: Time) => {
  const hourHand = Line({
    y2: -60,
    children: [
      RotationAnimation({ startOffset: get12HourRatio(now), duration: "12h" }),
    ],
  });

  const minuteHand = Line({
    y2: -80,
    children: [
      RotationAnimation({ startOffset: getHourRatio(now), duration: "60min" }),
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
    Circle(),
    ...createHourMarkers(),
    hourHand,
    minuteHand,
    secondHand
  );

  return h("article", h("h2", "12 hour clock face"), svg);
};
