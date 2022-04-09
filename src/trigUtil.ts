/**
 * Given a ratio between 0 and 1, returns the xy-coordinate of a point on the unit circle
 * such that 0 is straight up, and it increases clockwise until returing up at 1.
 */
export const ratioToXY = (ratio: number) => ({
  x: Math.sin(ratio * Math.PI * 2),
  y: -Math.cos(ratio * Math.PI * 2),
});
