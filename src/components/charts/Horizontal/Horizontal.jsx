import "./Horizontal.css";

import { Chart } from "./Chart";
import { ChartWrapper } from "..";
import { TitleChart } from "components/text";

export const Horizontal = () => {
  return (
    <>
      <ChartWrapper>
        <TitleChart align="left">Expenses</TitleChart>
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
      </ChartWrapper>
    </>
  );
};
