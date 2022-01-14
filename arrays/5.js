/*
Find sum of two arrays.
[3,5,2,9,4] = 3+5+2+9+4 = 23
[6,2,8,1,3] = 6+2+8+1+3 = 20
Final Output : 20+23 = 43

*/

const sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
