import { Route, Routes } from "react-router-dom";

import { ScrollToTop } from "components/other";
import { Layout } from "components/other";
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

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="stats" element={<Stats />}>
            <Route index element={<General />} />
            <Route path="general" element={<General />} />
            <Route path="log" element={<ExpensesLog />} />
          </Route>
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="add" element={<AddExpense />} />
        <Route path="edit" element={<EditBudget />} />
        <Route path="item/:id" element={<AboutUnit />} />
        <Route path="stats/compare/" element={<CompareSelectDate />} />
        <Route path="stats/compare/result" element={<Compare />} />
        <Route path="stats/calendar" element={<DatePicker />} />
        <Route path="stats/filter" element={<Filter />} />
      </Routes>
    </>
  );
};

export default App;
