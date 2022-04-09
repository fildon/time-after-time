import { get12HourRatio, getHourRatio } from "./time";

describe("Time Utils", () => {
  describe("get12HourRatio", () => {
    it.each([
      { hours: 0, expected: 0 },
      { hours: 3, expected: 0.25 },
      { hours: 6, expected: 0.5 },
      { hours: 9, expected: 0.75 },
      { hours: 12, expected: 0 },
      { hours: 15, expected: 0.25 },
      { hours: 18, expected: 0.5 },
      { hours: 21, expected: 0.75 },
      { hours: 24, expected: 0 },
    ])("is $expected at $hours:00", ({ hours, expected }) => {
      const ratio = get12HourRatio({
        getSeconds: () => 0,
        getMinutes: () => 0,
        getHours: () => hours,
      });
      expect(ratio).toBe(expected);
    });
  });

  describe("getHourRatio", () => {
    it.each([
      { minutes: 0, expected: 0 },
      { minutes: 15, expected: 0.25 },
      { minutes: 30, expected: 0.5 },
      { minutes: 45, expected: 0.75 },
      { minutes: 60, expected: 0 },
    ])("is $expected at 00:$minutes", ({ minutes, expected }) => {
      const ratio = getHourRatio({
        getSeconds: () => 0,
        getMinutes: () => minutes,
      });
      expect(ratio).toBe(expected);
    });
  });
});
