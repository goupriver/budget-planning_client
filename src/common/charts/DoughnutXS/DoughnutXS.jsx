import "./DoughnutXS.css";

import { Chart } from "./Chart";

export const DoughnutXS = () => {
  return (
    <div className="doughnutXS">
      <div className="money">
        <h4 className="expenses">150 $</h4>
        <h5 className="total">/ 1000 $</h5>
      </div>
      <div className="chart-container-doughnutXS">
        <Chart />
      </div>
      <h4 className="percentage">15 %</h4>
    </div>
  );
};
