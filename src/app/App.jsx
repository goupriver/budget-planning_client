import { Route, Routes } from "react-router-dom";

import { ScrollToTop } from "app/ScrollToTop/ScrollToTop";
import { Layout } from "app/Layout/Layout";
import {
  AboutUnit,
  AddExpense,
  Compare,
  CompareSelectDate,
  DatePicker,
  EditBudget,
  Filter,
  Home,
  Settings,
  Stats,
} from "pages";
import { General } from "pages/Stats/General/General";
import { ExpensesLog } from "pages/Stats/ExpensesLog/ExpensesLog";
import { fetchUser } from "features/user/userSlice";
import { budgetFetch } from "features/budget/budgetSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchExpenses, status } from "features/expenses/expensesSlice";
import { FetchData } from "./FetchData/FetchData";
import { Skeleton } from "pages/Home/common/Skeleton/Skeleton";
import { useSelector } from "react-redux";
import { SetBudget } from "pages/SetBudget/SetBudget";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <FetchData />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="editbudget" element={<EditBudget />} />
          <Route path="setbudget" element={<SetBudget />} />
          <Route path="stats" element={<Stats />} />
          <Route path="addexpense" element={<AddExpense />} />
          <Route path="compare" element={<CompareSelectDate />} />
        </Route>

        {/* <Route path="stats" element={<Stats />}>
            <Route index element={<General />} />
            <Route path="general" element={<General />} />
            <Route path="log" element={<ExpensesLog />} />
          </Route> */}
        {/* <Route path="settings" element={<Settings />} /> */}
        {/* </Route> */}
        {/* <Route path="item/:expenseId" element={<AboutUnit />} />
        <Route path="stats/compare/" element={<CompareSelectDate />} />
        <Route path="stats/compare/result" element={<Compare />} />
        <Route path="stats/calendar" element={<DatePicker />} />
        <Route path="stats/filter" element={<Filter />} />  */}
      </Routes>
    </>
  );
};

export default App;
