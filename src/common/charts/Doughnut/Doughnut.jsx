import "./Doughnut.css";

import { Chart } from "./Chart";

export const Doughnut = () => {
  return (
    <div className="doughnut">
      <div className="chart-container">
        <Chart />
        <h5 className="progress">50%</h5>
      </div>
      <h5 className="expenses">
        <span>1 000 $ </span>
        <span className="slash">/</span> <span className="limit">2 000 $</span>
      </h5>
    </div>
  );
};
