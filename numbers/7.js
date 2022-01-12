/* Write a program to calculate sum of N natural digits, as input by the users?

 Enter a positive integer: 100
 Sum = 5050
 */

const sumOfNumbers1 = (num) => {
  let sum = 0;
  while (num != 0) {
    sum += num;
    num--;
  }
  return sum;
};

const sumOfNumbers2 = (num) => (num * (num + 1)) / 2;

console.log(sumOfNumbers1(100));
console.log(sumOfNumbers2(100));
