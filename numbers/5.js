/*
Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
Formula :
Area: a*a
Perimeter: 4*a
Surface Area: 6*a*a
Volume: a*a*a

*/
const squareArea = (side) => side * side;
const squarePerimeter = (side) => 4 * side;
const cubeSurfaceArea = (side) => 6 * side * side;
const cubeVolume = (side) => side * side * side;

console.log(squareArea(2));
console.log(squarePerimeter(2));
console.log(cubeSurfaceArea(2));
console.log(cubeVolume(2));
