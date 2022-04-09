import { Classic12 } from "./classic12";
import { Classic24 } from "./classic24";
import { Day7 } from "./day7";

const mainElement = document.getElementsByTagName("main")[0];
[Classic12, Classic24, Day7].forEach((clock) =>
  mainElement.appendChild(clock())
);

// TODO
// - 10 hour clock. For some fucking reason. It's got to jump the hand now and then.
// - 6 hour clock. Rotates 4 times in a day.
// - pendulum clock
// - reverse clock
// - rotating face, static hands
// - clock like a calendar
// - LCD digital clock
// - Loading bar
// - A spiral expanding and intersecting with a static circle?
// - Clock face with sunrise and sunset times statically marked on the face itself
//   - This would require GPS I think, since we need both time and latitude
