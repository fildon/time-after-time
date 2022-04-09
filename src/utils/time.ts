const getTimeRatio = (
  time: Partial<
    Pick<Date, "getDay" | "getHours" | "getMinutes" | "getSeconds">
  >,
  modSeconds: number
) => {
  const day = time.getDay?.() ?? 0;
  const hours = time.getHours?.() ?? 0;
  const minutes = time.getMinutes?.() ?? 0;
  const seconds = time.getSeconds?.() ?? 0;

  const totalSeconds =
    24 * 60 * 60 * day + 60 * 60 * hours + 60 * minutes + seconds;

  return (totalSeconds % modSeconds) / modSeconds;
};

export const getDayRatio = (
  time: Pick<Date, "getDay" | "getHours" | "getMinutes">
) => getTimeRatio(time, 7 * 24 * 60 * 60);

/**
 * Given a timestamp, returns the ratio of the hours in the day
 */
export const get24HourRatio = (
  time: Pick<Date, "getSeconds" | "getMinutes" | "getHours">
) => getTimeRatio(time, 24 * 60 * 60);

/**
 * Given a timestamp, returns the ratio of the hours in the day mod 12
 */
export const get12HourRatio = (
  time: Pick<Date, "getSeconds" | "getMinutes" | "getHours">
) => getTimeRatio(time, 12 * 60 * 60);

/**
 * Given a timestamp, returns the ratio of the minutes relative to the hour
 */
export const getMinuteRatio = (time: Pick<Date, "getMinutes" | "getSeconds">) =>
  getTimeRatio(time, 60 * 60);

export const getSecondRatio = (time: Pick<Date, "getSeconds">) =>
  getTimeRatio(time, 60);
