import { cx0, cy0, r0 } from "../constants";
import { Point } from "../interfaces/Point";

export const getAngle = (i: number, samples: number): number => {
  return i * ((2 * Math.PI) / samples) - Math.PI / 2;
};

/**
 *
 * truc bidule
 *
 * @param {number} angle
 * @return {*}  {Point}
 */
export const getPointOnCircleFromAngle = (angle: number): Point => {
  return {
    x: cx0 + r0 * Math.cos(angle),
    y: cy0 + r0 * Math.sin(angle),
  };
};
