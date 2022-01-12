/*
Write a JavaScript program to compute the sum of all digits that occur in a given string.

Input: 1234
Output: 1+2+3+4 = 10

*/

const sumOfDigits = (num) => {
  const numbers = num.split("");
  const sum = numbers.reduce((prev, current) => Number(prev) + Number(current));
  return sum;
};

const sumOfDigits1 = (str) => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
};

console.log(sumOfDigits("1234"));
console.log(sumOfDigits1("1234"));
