import h from "hyperscript";
import { Group, Line, Rectangle, SVG } from "../utils/svg";
import { createTimeRatioGetter, Time } from "../utils/time";

/**
 * @param duration - Duration in seconds for a full cycle.
 * @param yOffset - Distance in viewBox units to offset the bar from the top.
 * @param id - Must be globally unique! Or the animations might break.
 * @param sectionCount - How seconds should be separated by markers.
 */
const createLoadingBar = (
  now: Time,
  duration: number,
  yOffset: number,
  id: string,
  sectionCount: number
) => {
  const timeRatioGetter = createTimeRatioGetter(duration);
  const initialTimeRatio = timeRatioGetter(now);

  /**
   * This double animation element is necessary to handle the two separate linear animations from inital to end and start to initial
   *
   * The `begin` attribute handles scheduling the two animations, so that they smoothly alternate control of the width property.
   */

  const initialToFull = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animate"
  );
  Object.entries({
    id: `${id}first`,
    attributeName: "width",
    values: `${initialTimeRatio * 180};180`,
    dur: `${duration - initialTimeRatio * duration}s`,
    begin: `0s;${id}second.end`,
  }).forEach(([k, v]) => initialToFull.setAttribute(k, v));
  const emptyToInitial = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animate"
  );
  Object.entries({
    id: `${id}second`,
    attributeName: "width",
    values: `0;${initialTimeRatio * 180}`,
    dur: `${initialTimeRatio * duration}s`,
    begin: `${id}first.end`,
  }).forEach(([k, v]) => emptyToInitial.setAttribute(k, v));

  const animatedBar = Rectangle({
    color: "green",
    fill: "green",
    yOffset,
  });
  animatedBar.appendChild(initialToFull);
  animatedBar.appendChild(emptyToInitial);

  const gapBetweenMarkers = 180 / sectionCount;
  // Fence-post theory: we have n+1 fence posts for n sections of fence.
  // But we also don't need the first or last fence post because of the containing box
  // so we only need sectionCount + 1 - 2 = sectionCount - 1
  const markers = new Array(sectionCount - 1).fill(null).map((_, i) => {
    const x = (i + 1) * gapBetweenMarkers - 90;
    return Line({ x1: x, y1: yOffset, x2: x, y2: yOffset + 5, strokeWidth: 1 });
  });

  const containerBox = Rectangle({ yOffset, width: 180 });
  return Group(animatedBar, ...markers, containerBox);
};

export const LoadingBar = (now: Time) => {
  const hourBar = createLoadingBar(now, 24 * 60 * 60, -95, "hour", 24);
  const minuteBar = createLoadingBar(now, 60 * 60, -25, "minute", 12);
  const secondBar = createLoadingBar(now, 60, 45, "second", 12);

  const svg = SVG(hourBar, minuteBar, secondBar);

  return h(
    "article",
    h("h2", "Loading Bar"),
    h(
      "p",
      `
        The three clock hands are replaced with loading bars.
        The first bar shows progress from midnight to midnight.
        The second bar shows progress in the current hour.
        The third bar shows progress in the current minute.
      `
    ),
    svg
  );
};
