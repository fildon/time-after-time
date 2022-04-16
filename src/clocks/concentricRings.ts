import h from "hyperscript";

import { Circle, Line, RotationAnimation, SVG } from "../utils/svg";
import {
  get12HourRatio,
  getHourRatio,
  getMinuteRatio,
  Time,
} from "../utils/time";

const createHourMarkers = (now: Time) =>
  new Array(12).fill(null).map((_, i) => {
    const ratio = i / 12;
    const x = Math.sin(ratio * Math.PI * 2);
    const y = -Math.cos(ratio * Math.PI * 2);
    return Line({
      x1: 95 * x,
      y1: 95 * y,
      x2: 85 * x,
      y2: 85 * y,
      color: i === 0 ? "red" : "black",
      children: [
        RotationAnimation({
          duration: "12h",
          startOffset: get12HourRatio(now),
        }),
      ],
    });
  });

const createMinuteMarkers = (now: Time) =>
  new Array(60).fill(null).map((_, i) => {
    const ratio = i / 60;
    const x = Math.sin(ratio * Math.PI * 2);
    const y = -Math.cos(ratio * Math.PI * 2);
    const length = i % 5 === 0 ? 10 : 5;
    return Line({
      x1: 75 * x,
      y1: 75 * y,
      x2: (75 - length) * x,
      y2: (75 - length) * y,
      strokeWidth: 2,
      color: i === 0 ? "red" : "black",
      children: [
        RotationAnimation({
          duration: "1h",
          startOffset: getHourRatio(now),
        }),
      ],
    });
  });

const createSecondMarkers = (now: Time) =>
  new Array(60).fill(null).map((_, i) => {
    const ratio = i / 60;
    const x = Math.sin(ratio * Math.PI * 2);
    const y = -Math.cos(ratio * Math.PI * 2);
    const length = i % 5 === 0 ? 10 : 5;
    return Line({
      x1: 55 * x,
      y1: 55 * y,
      x2: (55 - length) * x,
      y2: (55 - length) * y,
      strokeWidth: 2,
      color: i === 0 ? "red" : "black",
      children: [
        RotationAnimation({
          duration: "60s",
          startOffset: getMinuteRatio(now),
        }),
      ],
    });
  });

export const ConcentricRings = (now: Time) => {
  const hourCircle = Circle();
  const minuteCircle = Circle({ r: 75 });
  const secondCircle = Circle({ r: 55 });

  const hourMarkers = createHourMarkers(now);
  const minuteMarkers = createMinuteMarkers(now);
  const secondMarkers = createSecondMarkers(now);

  const svg = SVG(
    ...hourMarkers,
    ...minuteMarkers,
    ...secondMarkers,
    hourCircle,
    minuteCircle,
    secondCircle
  );

  return h(
    "article",
    h("h2", "Concentric Rings"),
    h(
      "p",
      "Concentric rings rotate around a common centre. The outer most ring rotates once every 12 hours. The middle ring once every hour. The innermost ring once every minute. Red markers correspond to the zero on each ring."
    ),
    svg
  );
};
