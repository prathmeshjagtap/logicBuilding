/*
Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

Input: CP = 1500, SP = 2000
Output: 500 Profit

Input: CP = 3125, SP = 1125
Output: 2000 Loss
*/
const profitOrLoss = (costPrice, sellingPrice) => {
  if (costPrice > sellingPrice) {
    return `${costPrice - sellingPrice} Loss`;
  } else {
    return `${sellingPrice - costPrice} Profit`;
  }
};

console.log(profitOrLoss(1500, 2000));
console.log(profitOrLoss(3125, 1125));
