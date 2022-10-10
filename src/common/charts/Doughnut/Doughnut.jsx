import "./Doughnut.css";

import { Chart } from "./Chart";
import { budgetPercentage, totalAmount } from "services/calculation/calculation";

export const Doughnut = ({expensesList, budget}) => {
  const percentage = budgetPercentage(expensesList, budget.budget)
  const total = totalAmount(expensesList)
  const budgetCurrent = budget.budget

  return (
    <div className="doughnut">
      <div className="chart-container">
        <Chart budgetCurrent={budgetCurrent} total={total} />
        <h5 className="progress">{percentage} %</h5>
      </div>
      <h5 className="expenses">
        <span>{total} $ </span>
        <span className="slash">/</span> <span className="limit">{budgetCurrent} $</span>
      </h5>
    </div>
  );
};
