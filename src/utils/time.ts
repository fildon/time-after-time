/**
 * A minimal subset of the builtin `Date` type
 */
export type Time = Partial<
  Pick<
    Date,
    "getDay" | "getHours" | "getMinutes" | "getSeconds" | "getMilliseconds"
  >
>;

export const createTimeRatioGetter = (modSeconds: number) => (time: Time) => {
  const day = time.getDay?.() ?? 0;
  const hours = time.getHours?.() ?? 0;
  const minutes = time.getMinutes?.() ?? 0;
  const seconds = time.getSeconds?.() ?? 0;
  const millis = time.getMilliseconds?.() ?? 0;

  const totalSeconds =
    (24 * 60 * 60 * 1000 * day +
      60 * 60 * 1000 * hours +
      60 * 1000 * minutes +
      1000 * seconds +
      millis) /
    1000;

  return (totalSeconds % modSeconds) / modSeconds;
};

export const getWeekRatio = createTimeRatioGetter(7 * 24 * 60 * 60);

/**
 * Given a timestamp, returns the ratio of the hours in the day
 */
export const get24HourRatio = createTimeRatioGetter(24 * 60 * 60);

/**
 * Given a timestamp, returns the ratio of the hours in the day mod 12
 */
export const get12HourRatio = createTimeRatioGetter(12 * 60 * 60);

/**
 * Given a timestamp, returns the ratio of the minutes relative to the hour
 */
export const getHourRatio = createTimeRatioGetter(60 * 60);

export const getMinuteRatio = createTimeRatioGetter(60);
