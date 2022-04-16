import h from "hyperscript";

import { Classic12 } from "./clocks/classic12";
import { Classic24 } from "./clocks/classic24";
import { Day7 } from "./clocks/day7";
import { ConcentricRings } from "./clocks/concentricRings";
import { LoadingBar } from "./clocks/loadingBar";

const mainElement = document.getElementsByTagName("main")[0];
mainElement.appendChild(h("h1", "Time after Time"));
mainElement.appendChild(
  h("p", "An exploration of alternative visualizations of time")
);

const now = new Date();

[Classic12, Classic24, Day7, ConcentricRings, LoadingBar].forEach((clock) =>
  mainElement.appendChild(clock(now))
);

// TODO
// - 10 hour clock. For some fucking reason. It's got to jump the hand now and then.
// - Metric clock. Metric divisions of a day, into sufficiently small increments to see move.
// - 6 hour clock. Rotates 4 times in a day.
// - pendulum clock
//   - keySplines
// - reverse clock
// - rotating face, static hands
// - clock like a calendar
// - LCD digital clock
// - Loading bar
// - A spiral expanding and intersecting with a static circle?
// - Clock face with sunrise and sunset times statically marked on the face itself
//   - This would require GPS I think, since we need both time and latitude
// - A pair of circles roll about each others circumferences
// - Sine waves
