//Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

const sum = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};

console.log(sum([10, 4, 5, 2, 5, 6, 9]));
console.log(sum([1, 2, 3, 4, 5]));
