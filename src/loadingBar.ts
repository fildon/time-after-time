import h from "hyperscript";
import { Group, Rectangle, SVGBuilder } from "./utils/svg";
import { createTimeRatioGetter } from "./utils/time";

/**
 * @param duration - duration in seconds for a full cycle
 * @param yOffset - Distance in viewBox units to offset the bar from the top
 * @param id - Must be globally unique! Or the animations might break.
 */
const createLoadingBar = (duration: number, yOffset: number, id: string) => {
  const containerBox = Rectangle({ yOffset, width: 180 });

  const timeRatioGetter = createTimeRatioGetter(duration);
  const initialTimeRatio = timeRatioGetter(new Date());

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
    width: 100,
  });
  animatedBar.appendChild(initialToFull);
  animatedBar.appendChild(emptyToInitial);

  return Group(animatedBar, containerBox);
};

export const LoadingBar = () => {
  const hourBar = createLoadingBar(24 * 60 * 60, -95, "hour");
  const minuteBar = createLoadingBar(60 * 60, -25, "minute");
  const secondBar = createLoadingBar(60, 45, "second");

  const svg = SVGBuilder()
    .with(hourBar)
    .with(minuteBar)
    .with(secondBar)
    .build();

  return h(
    "article",
    h("h2", "Loading Bar"),
    h(
      "p",
      "The three clock hands are replaced with loading bars. The first bar shows progress from midnight to midnight. The second bar shows progress in the current hour. The third bar shows progress in the current minute."
    ),
    svg
  );
};
