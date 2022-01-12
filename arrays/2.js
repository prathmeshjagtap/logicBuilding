//Find average of an array and display the output

const average = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum / arr.length;
};

console.log(average([10, 4, 5, 2, 5, 6, 9]));
console.log(average([1, 2, 3, 4, 5]));
