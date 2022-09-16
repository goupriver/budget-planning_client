import "./Horizontal.css";

import { Chart } from "./Chart";
import { getShortMonth } from "services/dates/format.helpers";
import { useSelector } from "react-redux";
import { selectAllExpenses, selectStatusExpenses } from "features/expenses/expensesSlice";
import { selectAllBudget } from "features/budget/budgetSlices";
import { getData } from "services/math/charts";

export const Horizontal = ({type}) => {

  const expenses = useSelector(selectAllExpenses);
  const allBudget = useSelector(selectAllBudget);
  const status = useSelector(selectStatusExpenses);

  const [first, second] = Object.entries(expenses)

  let data 

  if (status === "succeeded") {
    data = getData([first, second], allBudget)
  }

  return (
    <>
      <div className="chart-container-horizontal">
        <Chart content={data} type={type} />
      </div>
      <div className="stats">
        <div className="one">
          <div className="circle"></div>
          <h6 className="text">{getShortMonth(new Date(data.first.year, data.first.month - 1))} {data.first.year}</h6>
          <h4 className="price">{data.second[type]} $</h4>
        </div>
        <div className="two">
          <div className="circle"></div>
          <h6 className="text">{getShortMonth(new Date(data.second.year, data.second.month -1 ))} {data.second.year}</h6>
          <h4 className="price">{data.first[type]} $</h4>
        </div>
      </div>
    </>
  );
};
