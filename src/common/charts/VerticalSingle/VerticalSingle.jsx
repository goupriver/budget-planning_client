import "./VerticalSingle.css";

import { Chart } from "./Chart";

export const VerticalSingle = ({ expenses }) => {
  return (
    <div className="chart-container-vertical-single">
      <Chart expenses={expenses} />
    </div>
  );
};
