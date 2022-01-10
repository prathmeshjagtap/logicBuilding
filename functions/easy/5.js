/*
Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMax(3,5) ––> Output: 5
Input: findMax(3,5,9,1) ––> Output: 9


*/

const findMax = (...rest) => console.log(Math.max(...rest));

findMax(3, 5); // 5
findMax(3, 5, 9, 1); //9
