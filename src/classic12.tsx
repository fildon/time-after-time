import h from "hyperscript";

/**
 * Renders a classic 12 hour clock face
 */
export const Classic12 = () => {
  const visual = h("span");
  setInterval(() => (visual.textContent = new Date().toISOString()), 100);

  return h(
    "div",
    h("h2", "The Classic 12 hour clock face"),
    visual,
    h("p", "Behold how it keeps track of time")
  );
};
