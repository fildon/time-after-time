import h from "hyperscript";

import { Circle, Line, SVGBuilder } from "./utils/svg";
import {
  get12HourRatio,
  getMillisRatio,
  getMinuteRatio,
  getSecondRatio,
} from "./utils/time";

const createHourMarkers = () =>
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
      rotationOpts: {
        duration: "12h",
        startOffset: get12HourRatio(new Date()),
      },
    });
  });

const createMinuteMarkers = () =>
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
      rotationOpts: {
        duration: "1h",
        startOffset: getMinuteRatio(new Date()),
      },
    });
  });

const createSecondMarkers = () =>
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
      rotationOpts: {
        duration: "60s",
        startOffset: getSecondRatio(new Date()),
      },
    });
  });

const createMillisecondMarkers = () =>
  new Array(1).fill(null).map((_, i) => {
    const ratio = i / 1;
    const x = Math.sin(ratio * Math.PI * 2);
    const y = -Math.cos(ratio * Math.PI * 2);
    return Line({
      x1: 35 * x,
      y1: 35 * y,
      x2: 30 * x,
      y2: 30 * y,
      strokeWidth: 5,
      color: i === 0 ? "red" : "black",
      rotationOpts: {
        duration: "1s",
        startOffset: getMillisRatio(new Date()),
      },
    });
  });

export const ConcentricRings = () => {
  const hourCircle = Circle();
  const minuteCircle = Circle({ r: 75 });
  const secondCircle = Circle({ r: 55 });
  const millisecondCircle = Circle({ r: 35 });

  const hourMarkers = createHourMarkers();
  const minuteMarkers = createMinuteMarkers();
  const secondMarkers = createSecondMarkers();
  const millisecondMarkers = createMillisecondMarkers();

  const svg = SVGBuilder()
    .with(...hourMarkers)
    .with(...minuteMarkers)
    .with(...secondMarkers)
    .with(...millisecondMarkers)
    .with(hourCircle)
    .with(minuteCircle)
    .with(secondCircle)
    .with(millisecondCircle)
    .build();

  return h(
    "article",
    h("h2", "Concentric Rings"),
    h(
      "p",
      "Concentric rings rotate around a common centre. The outer most ring rotates once every 12 hours. The second ring once every hour. The third ring once every minute. The innermost ring once every second. Red markers correspond to the zero on each dial."
    ),
    svg
  );
};
