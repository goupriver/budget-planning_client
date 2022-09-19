import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "features/expenses/expensesSlice";
import userReducer from "features/user/userSlice";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    user: userReducer,
  },
});
