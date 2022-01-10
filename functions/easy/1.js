/* 
1) Given a and b, your function should return the value of ab
Example:
Input: power(2,3) ––> Output: 8
*/

const power = (base, exponent) => {
  let ans = 1;
  while (exponent !== 0) {
    ans = base * ans;
    exponent--;
  }
  return ans;
};
console.log(power(2, 3));
console.log(power(7, 3));
// Using inbuilt Functions
console.log(Math.pow(2, 3));
console.log(Math.pow(7, 3));
