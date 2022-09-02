import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
import { formatISO, parseISO } from "date-fns";
import { getDayMonthYearString } from "services/dates/format.helpers";

const initialState = {
  expenses: {
    "2022-08-08": [
      {
        category: "Food",
        amount: faker.finance.amount(60, 800, 0),
        id: faker.random.numeric(5),
        repeat: faker.datatype.boolean(),
        photo: faker.image.food(),
        detail: faker.lorem.text(),
        date: "2022-08-08T08:15:02.124Z",
      },
      {
        category: "Clothes",
        amount: faker.finance.amount(60, 800, 0),
        id: faker.random.numeric(5),
        repeat: faker.datatype.boolean(),
        photo: faker.image.food(),
        detail: faker.lorem.text(),
        date: "2022-08-08T12:15:02.124Z",
      },
    ],
    "2022-08-09": [
      {
        category: "Food",
        amount: faker.finance.amount(60, 800, 0),
        id: faker.random.numeric(5),
        repeat: faker.datatype.boolean(),
        photo: faker.image.food(),
        detail: faker.lorem.text(),
        date: "2022-08-09T08:15:02.124Z",
      },
      {
        category: "Clothes",
        amount: faker.finance.amount(60, 800, 0),
        id: faker.random.numeric(5),
        repeat: faker.datatype.boolean(),
        photo: faker.image.food(),
        detail: faker.lorem.text(),
        date: "2022-08-09T14:15:02.124Z",
      },
    ],
    "2022-08-10": [],
    "2022-08-11": [
      {
        category: "Food",
        amount: faker.finance.amount(60, 800, 0),
        id: faker.random.numeric(5),
        repeat: faker.datatype.boolean(),
        photo: faker.image.food(),
        detail: faker.lorem.text(),
        date: "2022-08-11T10:15:02.124Z",
      },
    ],
  },
  error: null,
  status: "idle", // idle | loading | succeeded | failed
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: {
      reducer: (state, action) => {
        const date = getDayMonthYearString(parseISO(action.payload.date));
        if (state.expenses[date]) {
          state.expenses[date].push(action.payload);
        } else {
          state.expenses[date] = [];
          state.expenses[date].push(action.payload);
        }
      },
      prepare: (init) => {
        const date = formatISO(init.date);
        return {
          payload: {
            // TODO: убрать id поле, id будет генерироваться на сервере
            id: String(Date.now()),
            ...init,
            date,
            // TODO: разобраться как отправлять файлы в редьюсерах и по сети
            file: null,
          },
        };
      },
    },
  },
});

export default expensesSlice.reducer;

export const { addExpense } = expensesSlice.actions;

export const selectAllExpenses = (state) => state.expenses.expenses;
