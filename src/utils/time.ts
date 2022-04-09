const createTimeRatioGetter =
  (modSeconds: number) =>
  (
    time: Partial<
      Pick<
        Date,
        "getDay" | "getHours" | "getMinutes" | "getSeconds" | "getMilliseconds"
      >
    >
  ) => {
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

export const getDayRatio = createTimeRatioGetter(7 * 24 * 60 * 60);

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
export const getMinuteRatio = createTimeRatioGetter(60 * 60);

export const getSecondRatio = createTimeRatioGetter(60);

export const getMillisRatio = createTimeRatioGetter(1);
