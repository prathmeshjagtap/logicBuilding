/*
Given length of a regular hexagon, your function should return area of the hexagon.
Example:
Input: areaOfHexagon(10) ––> Output: 259.80

*/

const areaOfHexagon = (length) =>
  console.log(((3 * Math.sqrt(3) * length * length) / 2).toFixed(2));

areaOfHexagon(10);
