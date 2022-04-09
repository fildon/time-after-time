import h from "hyperscript";

import { Classic12 } from "./classic12";
import { Classic24 } from "./classic24";

const rootElement = document.getElementById("root");
rootElement?.appendChild(h("article", Classic12(), Classic24()));

// TODO
// - pendulum clock
// - reverse clock
// - rotating face, static hands
// - clock like a calendar
// - LCD digital clock
// - Loading bar
