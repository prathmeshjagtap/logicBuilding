/*
Given a sentence, your functions should return the number of words in the sentence.
Example:
Input: noOfWords(We are neoGrammers) ––> Output: 3

*/

const noOfWords = (sentence) => sentence.split(" ").length;

console.log(noOfWords("We are neoGrammers"));
console.log(noOfWords("We are neoGrammers we are rockstar Engineers"));
