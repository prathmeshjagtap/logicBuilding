// Easy Questions
//1)Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const addFiveNumbers1 = (num1, num2, num3, num4, num5) =>
  num1 + num2 + num3 + num4 + num5;

console.log(addFiveNumbers1(5, 13, 7, 21, 48));

// optimising

const addFiveNumbers2 = (...rest) =>
  rest.reduce((prevValue, currentValue) => prevValue + currentValue);

console.log(addFiveNumbers2(5, 13, 7, 21, 48));

//2) Write a program to take a number input from user and determine whether the number is odd or even.

//3) Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

//4) Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

//5) Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

//6) Write program to take a month as an input from the user and find out whether the month has 31 days or not.
