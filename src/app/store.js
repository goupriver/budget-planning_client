import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "features/expenses/expensesSlice";
import userReducer from "features/user/userSlice";
import budgetReducer from "features/budget/budgetSlices";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    user: userReducer,
    budget: budgetReducer,
  },
});
