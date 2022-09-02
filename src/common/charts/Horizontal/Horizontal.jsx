import "./Horizontal.css";

import { Chart } from "./Chart";

export const Horizontal = () => {
  return (
    <>
      <div className="chart-container-horizontal">
        <Chart />
      </div>
      <div className="stats">
        <div className="one">
          <div className="circle"></div>
          <h6 className="text">Sept 2019</h6>
          <h4 className="price">1 250 $</h4>
        </div>
        <div className="two">
          <div className="circle"></div>
          <h6 className="text">Oct 2019</h6>
          <h4 className="price">2 000 $</h4>
        </div>
      </div>
    </>
  );
};
