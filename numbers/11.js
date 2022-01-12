/*
Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

Example-
Enter a Number : 1234
Enter the Number of Rotations : 2
Output : 3412

*/

const rotateByX = (num, x) => {
  const arr = Array.from(String(num), Number);
  for (let i = 0; i < x; i++) {
    let temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
  }
  const ans = +arr.join("");
  return ans;
};

console.log(rotateByX(1234, 2));
console.log(rotateByX(1234, 1));
