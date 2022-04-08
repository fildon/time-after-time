import h from "hyperscript";

const createMinuteHand = () => {
  const minuteHand = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  Object.entries({
    x1: "0",
    y1: "0",
    stroke: "red",
    "stroke-width": "5",
    "stroke-linecap": "round",
  }).forEach(([k, v]) => minuteHand.setAttribute(k, v));
  return minuteHand;
};

const createHourHand = () => {
  const hourHand = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  Object.entries({
    x1: "0",
    y1: "0",
    stroke: "red",
    "stroke-width": "5",
    "stroke-linecap": "round",
  }).forEach(([k, v]) => hourHand.setAttribute(k, v));
  return hourHand;
};

/**
 * Renders a classic 12 hour clock face
 */
export const Classic12 = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "-100 -100 200 200");

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  Object.entries({
    cx: "0",
    cy: "0",
    r: "75",
    stroke: "red",
    fill: "transparent",
    "stroke-width": "5",
  }).forEach(([k, v]) => circle.setAttribute(k, v));

  const hourHand = createHourHand();
  const minuteHand = createMinuteHand();

  svg.appendChild(circle);
  svg.appendChild(hourHand);
  svg.appendChild(minuteHand);

  setInterval(() => {
    const now = new Date();
    const seconds = now.getSeconds(); // 0 to 59
    const minutes = now.getMinutes(); // 0 to 59
    const hours = now.getHours(); // 0 to 23

    // Seconds since the start of the day, modded by 12 hours
    const secondsToday =
      (60 * 60 * hours + 60 * minutes + seconds) % (12 * 60 * 60);
    const secondsMax = 12 * 60 * 60;

    const ratio = secondsToday / secondsMax;
    const hourX = 45 * Math.sin(ratio * Math.PI * 2);
    const hourY = -45 * Math.cos(ratio * Math.PI * 2);
    hourHand.setAttribute("x2", hourX.toString());
    hourHand.setAttribute("y2", hourY.toString());

    const minuteRatio = (60 * minutes + seconds) / (60 * 60);
    const minuteX = 65 * Math.sin(minuteRatio * Math.PI * 2);
    const minuteY = -65 * Math.cos(minuteRatio * Math.PI * 2);
    minuteHand.setAttribute("x2", minuteX.toString());
    minuteHand.setAttribute("y2", minuteY.toString());
  }, 1000);

  return h(
    "div",
    h("h2", "The Classic 12 hour clock face"),
    svg,
    h("p", "Behold how it keeps track of time")
  );
};
