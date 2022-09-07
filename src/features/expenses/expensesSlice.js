import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDayMonthYearString } from "services/dates/format.helpers";
import { add, get } from "services/firebase/ferestore/firestore";

const initialState = {
  expenses: {},
  error: null,
  status: "idle", // idle | loading | succeeded | failed
};

export const addExpense = createAsyncThunk(
  "expenses/addExpense",
  async (expense, { rejectWithValue }) => {
    try {
      const data = await add(expense);
      return {
        ...expense,
        id: data,
        date: getDayMonthYearString(expense.date),
      };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async (_, { rejectWithValue }) => {
    try {
      const data = await get();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addExpense.pending, (state, action) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        const date = action.payload.date;

        if (state.expenses[date]) {
          state.expenses[date].push(action.payload);
        } else {
          state.expenses[date] = [];
          state.expenses[date].push(action.payload);
        }
        state.status = "succeeded";
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      })
      .addCase(fetchExpenses.pending, (state, action) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        action.payload.forEach((el) => {
          if (state.expenses[getDayMonthYearString(el.date)]) {
            state.expenses[getDayMonthYearString(el.date)].push(el);
          } else {
            state.expenses[getDayMonthYearString(el.date)] = [];
            state.expenses[getDayMonthYearString(el.date)].push(el);
          }
        });
        state.status = "succeeded";
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default expensesSlice.reducer;

export const selectAllExpenses = (state) => state.expenses.expenses;

export const selectExpenseById = (state, expenseId) => {
  const expenses = state.expenses.expenses;
  const expensesList = Object.values(expenses).flat();
  const expenseDesired = expensesList.find((el) => el.id === expenseId);
  return expenseDesired;
};

export const selectErrorExpenses = (state) => state.expenses.error;
export const selectStatusExpenses = (state) => state.expenses.status;
