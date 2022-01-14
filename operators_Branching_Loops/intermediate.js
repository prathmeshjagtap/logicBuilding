/*
1)Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

*/

const arr = [];

for (let i = 1; i < 100; i++) {
  let message = "";
  if (i % 5 === 0 && i % 3 === 0) message = "FizzBuzz";
  else if (i % 5 === 0) message = "Buzz";
  else if (i % 3 === 0) message = "Fizz";
  else i;

  arr.push(message || i);
}

console.log(arr);

/*
2)Print the following star pattern :-

*
* *
* * *
* * * *
* * * * *
*/
//Solution

let pattern = "";
const printPattern = (num) => {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
};

console.log(printPattern(5));

/*
3)Write a program to take a number input from user and print multiplication table 12 times for that number.
*/

const table = (num) => {
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};
console.log(table(5));
/*
4)Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
*/
const fibonacci = (num) => {
  let n1 = 0;
  let n2 = 1;
  let n3;
  console.log(n1);
  console.log(n2);

  for (let i = 1; i < num; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    console.log(n3);
  }
};
console.log(fibonacci(5));

/*
5)Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120
*/

const factorial = (num) => {
  let fac = 1;
  while (num !== 0) {
    fac *= num;
    num--;
  }
  return fac;
};
console.log(factorial(5));

/*
6)Write a Program to take a number input from user and find if the number is Prime or not.
*/
const checkPrime = (num) => {
  let isPrime = true;
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) isPrime = false;
  }
  return isPrime;
};

const isPrime = checkPrime(7);
if (isPrime) {
  console.log("Prime number");
} else {
  console.log("Not a Prime number");
}

/*
7)Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
*/

const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday"];

const weekend = ["saturday", "sunday"];

const checkDay = (day) => {
  day = day.toLowerCase();
  if (day === "saturday" || day === "sunday") {
    console.log(`${day} is Weekend`);
  } else {
    console.log(`${day} is WeekDay`);
  }
};

checkDay("Monday");
checkDay("SUNDAY");
