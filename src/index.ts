import h from "hyperscript";

import { Classic12 } from "./classic12";

const rootElement = document.getElementById("root");
rootElement?.appendChild(h("article", Classic12()));
