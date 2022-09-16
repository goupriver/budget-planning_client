import { getYearMonth } from "services/dates/format.helpers";
import {
  FeditBudget,
  FgetAllBudget,
  FgetBudget,
  FsetBudget,
} from "services/firebase/ferestore/firestore";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
  budget: { budget: 0, date: getYearMonth(new Date()) },
  allBudget: [],
  status: "idle", // 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchAllBudget = createAsyncThunk(
  "budget/fetchAllBudget",
  async () => {
    return await FgetAllBudget()
  }
)

export const fetchCurrentMonth = createAsyncThunk(
  "budget/fetchCurrentMonth",
  async (date) => {
    let budget;
    budget = await FgetBudget(getYearMonth(date));

    if (!budget) {
      budget = await FsetBudget(getYearMonth(date));
    }

    return budget;
  }
);

export const editCurrentMonth = createAsyncThunk(
  "bidget/editCurrentMonth",
  async ({ date, budget }) => {
    await FeditBudget({ date: getYearMonth(date), budget });
  }
);

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentMonth.fulfilled, (state, action) => {
      state.budget = action.payload;
    })
    .addCase(fetchAllBudget.pending, (state, action) => {
      state.allBudget = []
      state.status = 'loading'
    })
    .addCase(fetchAllBudget.fulfilled, (state, action) => {
      state.allBudget = action.payload
      state.status = 'succeeded'
    })
  },
});

export default budgetSlice.reducer;

export const selectCurrentMonth = (state) => state.budget.budget;
export const selectAllBudget = (state) => state.budget.allBudget;
export const selectStatusBudget = (state) => state.budget.status

