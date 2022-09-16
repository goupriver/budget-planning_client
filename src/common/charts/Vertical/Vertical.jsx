import "./Vertical.css";

import { Chart } from "./Chart";
import { useSelector } from "react-redux";
import { selectAllExpenses, selectStatusExpenses } from "features/expenses/expensesSlice";
import { selectAllBudget } from "features/budget/budgetSlices";
import { getData } from "services/math/charts";

export const Vertical = () => {

  const expenses = useSelector(selectAllExpenses);
  const allBudget = useSelector(selectAllBudget);
  const status = useSelector(selectStatusExpenses);

  const [first, second] = Object.entries(expenses)

  let data 

  if (status === "succeeded") {
    data = getData([first, second], allBudget)
  }

  return (
    <>
      <div className="chart-container-vertical">
        <Chart content={data} />
      </div>
      <div className="stats">
        <div className="one">
          <div className="circle"></div>
          <h4 className="price">{data.second.expenses} $</h4>
        </div>
        <div className="two">
          <div className="circle"></div>
          <h4 className="price">{data.first.expenses} $</h4>
        </div>
      </div>
    </>
  );
};
