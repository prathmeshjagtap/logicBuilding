//Find maximum and minimum of an array.

const maxmin = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
  }
  return { max, min };
};

let objmaxmin = maxmin([1, 2, 3, 4, 5, 6]);
let objmaxmin1 = maxmin([11, 13, 6, 8, 19, 20]);

console.log(`max is ${objmaxmin.max} and min is ${objmaxmin.min}`);
console.log(`max is ${objmaxmin1.max} and min is ${objmaxmin1.min}`);
