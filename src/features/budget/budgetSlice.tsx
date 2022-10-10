import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createBudget,
  getBudget,
  updateBudget,
} from "services/firebase/ferestore/firestore";
import { Budget, Error, IBudget, Status, UserID } from "types/types";

interface IState {
  budget: IBudget | {};
  error: Error;
  status: Status;
}

const initialState: IState = {
  budget: {},
  error: null,
  status: "idle",
};

export const initBudget = createAsyncThunk(
  "budget/init",
  async (
    data: { userId: UserID; date: Date; budget: Budget },
    { rejectWithValue }
  ) => {
    try {
      const { userId, date, budget } = data;
      const res = await createBudget(userId, date, budget);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const editBudget = createAsyncThunk(
  "budget/edit",
  async (
    data: { userId: UserID; date: Date; budget: Budget },
    { rejectWithValue }
  ) => {
    
    try {
      const { userId, date, budget } = data;
      const res = await updateBudget(userId, date, budget);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const budgetFetch = createAsyncThunk(
  "budget/fetch",
  async ({userId, date}: {userId: UserID, date: Date}, { rejectWithValue }) => {
    try {
      const budget = await getBudget(userId, date);
      return budget;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(budgetFetch.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(budgetFetch.fulfilled, (state, action) => {
        state.budget = action.payload;
        state.status = "succeeded";
      })
      .addCase(budgetFetch.rejected, (state, action) => {
        state.error = `${action.payload}`;
        state.status = "failed";
      })
      .addCase(editBudget.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(editBudget.fulfilled, (state, action) => {
        state.budget = action.payload
        state.status = "succeeded";
      })
      .addCase(editBudget.rejected, (state, action) => {
        state.error = `${action.payload}`;
        state.status = "failed";
      })
      .addCase(initBudget.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(initBudget.fulfilled, (state, action) => {
        state.budget = action.payload
        state.status = "succeeded";
      })
      .addCase(initBudget.rejected, (state, action) => {
        state.error = `${action.payload}`;
        state.status = "failed";
      });
  },
});

export default budgetSlice.reducer;
export const budgetStatus = state => state.budget.status