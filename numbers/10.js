/*
Write a JavaScript program that reverses a number.

Example:

Input:  32243;
Output:  34223

*/

const reverseNumber = (num) => {
  num = String(num);
  const reverseNum = num.split("").reverse().join("");
  return Number(reverseNum);
};

const reverseNumber1 = (num) => {
  num = String(num);
  let reverseNum = "";

  for (let i = num.length - 1; i >= 0; i--) {
    reverseNum += num[i];
  }
  return Number(reverseNum);
};

console.log(reverseNumber(32243));
console.log(reverseNumber1(12345));
