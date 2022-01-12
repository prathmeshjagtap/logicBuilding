/* 
Write a Program to Print N Odd Number in Descending Order.

Input : 4
Output : 7
5
3
1
 */

const oddNumbers = (num) => {
  for (let i = num * 2 - 1; i >= 1; i -= 2) {
    console.log(i);
  }
};

oddNumbers(5);
