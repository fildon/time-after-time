import h from "hyperscript";

import { Circle, Line, SVGBuilder } from "./utils/svg";

const createHourMarkers = () =>
  new Array(12).fill(null).map((_, i) => {
    const ratio = i / 12;
    const x = Math.sin(ratio * Math.PI * 2);
    const y = -Math.cos(ratio * Math.PI * 2);
    const length = i % 3 === 0 ? 10 : 5;
    return Line({
      x1: 95 * x,
      y1: 95 * y,
      x2: (95 - length) * x,
      y2: (95 - length) * y,
      strokeWidth: 3,
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
    });
  });

export const ConcentricRings = () => {
  const hourCircle = Circle();
  const minuteCircle = Circle({ r: 75 });
  const secondCircle = Circle({ r: 55 });

  const hourMarkers = createHourMarkers();
  const minuteMarkers = createMinuteMarkers();
  const secondMarkers = createSecondMarkers();

  // TODO animate the circles

  const svg = SVGBuilder()
    .with(hourCircle)
    .with(minuteCircle)
    .with(secondCircle)
    .with(...hourMarkers)
    .with(...minuteMarkers)
    .with(...secondMarkers)
    .build();

  return h(
    "article",
    h("h2", "Concentric Rings"),
    h(
      "p",
      "Concentric rings rotate around a common centre. The outer most ring rotates once every 12 hours. The middle ring once every hour. The innermost ring once every minute."
    ),
    svg
  );
};
