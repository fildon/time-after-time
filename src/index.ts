import h from "hyperscript";

import { Classic12 } from "./classic12";
import { Classic24 } from "./classic24";
import { Day7 } from "./day7";

const rootElement = document.getElementById("root");
rootElement?.appendChild(h("article", Classic12(), Classic24(), Day7()));

// TODO
// - pendulum clock
// - reverse clock
// - rotating face, static hands
// - clock like a calendar
// - LCD digital clock
// - Loading bar
// - A spiral expanding and intersecting with a static circle?
