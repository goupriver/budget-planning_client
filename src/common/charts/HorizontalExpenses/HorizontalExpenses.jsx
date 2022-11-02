import "./HorizontalExpenses.css";

import { Chart } from "./Chart";
import { getMonthStringShort } from "services/dates/format.helpers";
import { totalAmount } from "services/calculation/calculation";

export const HorizontalExpenses = ({ compareList, budgetCompare }) => {
  const {
    date: { a, b },
  } = budgetCompare;

  const [totalA, totalB] = [
    totalAmount(compareList.a),
    totalAmount(compareList.b),
  ];

  return (
    <>
      <div className="chart-container-horizontal">
        {(!!compareList.a.length || !!compareList.b.length) && (
          <Chart
            totalA={totalA}
            totalB={totalB}
            budgetCompare={budgetCompare}
          />
        )}
      </div>
      <div className="stats">
        <div className="two">
          <div className="circle"></div>
          <h6 className="text">
            {getMonthStringShort(new Date(a.year, a.month))} {a.year}
          </h6>
          <h4 className="price">{totalA ? `${totalA} $` : "no expenses"}</h4>
        </div>
        <div className="one">
          <div className="circle"></div>
          <h6 className="text">
            {getMonthStringShort(new Date(b.year, b.month))} {b.year}
          </h6>
          <h4 className="price">{totalB ? `${totalB} $` : "no expenses"}</h4>
        </div>
      </div>
    </>
  );
};
