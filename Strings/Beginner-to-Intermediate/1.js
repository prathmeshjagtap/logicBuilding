// Write a program that converts the string into uppercase

const convertToUpperCase = (str) => str.toUpperCase();
const convertToUpperCase1 = (str) => {
  let toUpperCase = "";
  for (let i = 0; i < str.length; i++)
    toUpperCase += String.fromCharCode(
      str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123
        ? str.charCodeAt(i) - 32
        : str.charCodeAt(i)
    );
  return toUpperCase;
};
console.log(convertToUpperCase("prathmesh JAgtap"));
console.log(convertToUpperCase1("prathmesh JAgtap"));
