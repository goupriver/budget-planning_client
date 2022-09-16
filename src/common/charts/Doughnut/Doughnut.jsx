import { selectCurrentMonth } from "features/budget/budgetSlices";

import "./Doughnut.css";

import { Chart } from "./Chart";
import { useSelector } from "react-redux";

export const Doughnut = ({ expenses }) => {
  const currentBudget = useSelector(selectCurrentMonth)

  const { budget } = currentBudget;

  const expensesSum =
    Object.values(expenses).length &&
    Object.values(expenses)
      .flat()
      .reduce((acc, cur) => acc + cur.amount, 0);

  const percentage = isNaN(Math.round((100 * expensesSum) / budget))
    ? 0
    : Math.round((100 * expensesSum) / budget);

  return (
    <div className="doughnut">
      <div className="chart-container">
        <Chart percentage={percentage} />
        <h5 className="progress">{percentage} %</h5>
      </div>
      <h5 className="expenses">
        <span>{expensesSum} $</span>
        <span className="slash">/</span>{" "}
        <span className="limit">{budget} $</span>
      </h5>
    </div>
  );
};
