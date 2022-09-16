import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endOfDay, startOfDay } from "date-fns";
import {
  getDayMonthString,
  getDayMonthYearString,
} from "services/dates/format.helpers";
import {
  add,
  compareByDate,
  get,
  getCompereMonth,
  getFiltered,
  getFilteredByDate,
} from "services/firebase/ferestore/firestore";

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

export const filterExpenses = createAsyncThunk(
  "expenses/filter",
  async (category, amount) => {
    const data = await getFiltered(category, amount);

    return data;
  }
);

export const filterExpensesByDate = createAsyncThunk(
  "expenses/filterByDate",
  async (date) => {
    const { from, to } = date;

    const start = startOfDay(from)
    const end = endOfDay(to)

    const data = await getFilteredByDate({ start, end });

    return data;
  }
);

export const compareExpensesByDate = createAsyncThunk(
  "expenses/compareExpensesByDate",
  async (date) => {
    const data = await compareByDate(date);

    return data;
  }
);

export const compereMonth = createAsyncThunk(
  "expenses/compareMonth",
  async (date) => {
    const result = await getCompereMonth(date);

    return result;
  }
);

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addExpense.pending, (state, action) => {
        state.expenses = {}
        state.error = null;
        state.status = "loading";
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        // const date = action.payload.date;
        // if (state.expenses[date]) {
        //   state.expenses[date].push(action.payload);
        // } else {
        //   state.expenses[date] = [];
        //   state.expenses[date].push(action.payload);
        // }
        // state.status = "succeeded";
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      })
      .addCase(fetchExpenses.pending, (state, action) => {
        state.error = null;
        state.expenses = {};
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
      })
      .addCase(filterExpenses.pending, (state, action) => {
        state.error = null;
        state.expenses = {};
        state.status = "loading";
      })
      .addCase(filterExpenses.fulfilled, (state, action) => {
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
      .addCase(filterExpensesByDate.pending, (state, action) => {
        state.error = null;
        state.expenses = {};
        state.status = "loading";
      })
      .addCase(filterExpensesByDate.fulfilled, (state, action) => {
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
      .addCase(compareExpensesByDate.pending, (state, action) => {
        state.error = null;
        state.expenses = {};
        state.status = "loading";
      })
      .addCase(compareExpensesByDate.fulfilled, (state, action) => {
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
      .addCase(compereMonth.pending, (state, action) => {
        state.error = null;
        state.expenses = {};
        state.status = "loading";
      })
      .addCase(compereMonth.fulfilled, (state, action) => {
        action.payload.forEach((el) => {
          if (state.expenses[getDayMonthString(el.date)]) {
            state.expenses[getDayMonthString(el.date)].push(el);
          } else {
            state.expenses[getDayMonthString(el.date)] = [];
            state.expenses[getDayMonthString(el.date)].push(el);
          }
        });
        state.status = "succeeded";
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
