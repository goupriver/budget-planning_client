import "./Vertical.css";

import { Chart } from "./Chart";

export const Vertical = () => {
  return (
    <>
      <div className="chart-container-vertical">
        <Chart />
      </div>
      <div className="stats">
        <div className="one">
          <div className="circle"></div>
          <h4 className="price">1 250 $</h4>
        </div>
        <div className="two">
          <div className="circle"></div>
          <h4 className="price">2 000 $</h4>
        </div>
      </div>
    </>
  );
};
