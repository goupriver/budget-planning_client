import "./DoughnutXS.css";

import { Chart } from "./Chart";

export const DoughnutXS = ({budget, expenses}) => {
  const expensesSum =
    Object.values(expenses).length &&
    Object.values(expenses)
      .flat()
      .reduce((acc, cur) => acc + cur.amount, 0);

  const percentage = isNaN(Math.round((100 * expensesSum) / budget))
    ? 0
    : Math.round((100 * expensesSum) / budget);

  return (
    <div className="doughnutXS">
      <div className="money">
        <h4 className="expenses">{expensesSum} $</h4>
        <h5 className="total">/ {budget} $</h5>
      </div>
      <div className="chart-container-doughnutXS">
        <Chart percentage={percentage} />
      </div>
      <h4 className="percentage">{percentage} %</h4>
    </div>
  );
};
