import { Budget, IExpense } from "types/types";

export const budgetPercentage = (arr: IExpense[], budget: Budget): number => {
  return  Math.round((arr.reduce((a, b) => a + b.amount, 0) * 100) / budget);
};

export const totalAmount = (arr: IExpense[]): number => {
  return arr.reduce((a, b) => a + b.amount, 0);
};
