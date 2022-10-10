import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addExpense, getExpenses } from "services/firebase/ferestore/firestore";
import { Error, IExpense, INewExpense, Status, UserID } from "types/types";

interface IState {
  expenses: IExpense[];
  error: Error;
  status: Status;
}

const initialState: IState = {
  expenses: [],
  error: null,
  status: 'idle'
}

interface IFetchExpenses {
  userId: UserID;
  date: Date;
}

interface IAddExpenses {
  userId: UserID;
  expense: INewExpense;
}


export const expensesFetch = createAsyncThunk('expenses/fetch', async ({ userId, date }: IFetchExpenses, { rejectWithValue }) => {
  try {
    const expenses = await getExpenses(userId, date)
    return expenses
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const createExpense = createAsyncThunk('expense/create', async (data: IAddExpenses, { rejectWithValue }) => {
  try {
    const { userId, expense } = data
    const res = await addExpense(userId, expense)
    return res
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(expensesFetch.pending, (state, action) => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(expensesFetch.fulfilled, (state, action) => {
        state.expenses = action.payload!
        state.status = "succeeded"
      })
      .addCase(expensesFetch.rejected, (state, action) => {
        state.error = `${action.payload}`
        state.status = "failed"
      })
      .addCase(createExpense.pending, (state) => {
        state.error = null
        state.status = 'loading'
      })
      .addCase(createExpense.fulfilled, (state, action) => {
        state.expenses.push(action.payload)
        state.status = "succeeded"
      })
      .addCase(createExpense.rejected, (state, action) => {
        state.error = `${action.payload}`
        state.status = "failed"
      })
  }
});

export default expensesSlice.reducer;

export const status = state => state.expenses.status
export const expenses = state => state.expenses.expenses