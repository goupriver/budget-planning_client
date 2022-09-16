import "./String.css";

import { Icon } from "common/media";
import { Chart } from "./Chart";
import { useSelector } from "react-redux";
import { selectCurrentMonth } from "features/budget/budgetSlices";
import { getDaysInMonth } from "date-fns";
import { useState } from "react";

export const String = ({ expenses }) => {
  const currentMonth = useSelector(selectCurrentMonth);

  let dateISO = currentMonth.date.split("-");
  let dateNumber = [+dateISO[0], +dateISO[1]];
  let daysInMonth = getDaysInMonth(new Date(dateNumber[0], dateNumber[1]));
  let dayOfMonth = [];
  for (let i = 1; i < daysInMonth + 1; i++) {
    dayOfMonth.push(i);
  }

  const arrFlat =
    Object.values(expenses).length && Object.values(expenses).flat();

  let obj = {};

  arrFlat.forEach((e) => {
    const date = new Date(e.date).getDate();

    if ([date] in obj) {
      obj[date] += e.amount;
    } else {
      obj[date] = e.amount;
    }
  });

  dayOfMonth.forEach((e) => {
    if (!([e] in obj)) {
      obj[e] = 0;
    } else {
    }
  });

  let dates = Object.keys(obj);
  let amount = Object.values(obj);

  const [[firstInterval, lastInterval, count, action], setInterval] = useState([
    0,
    daysInMonth,
    0,
    "+",
  ]);

  const onChangeScaleClick = () => {
    if (lastInterval - firstInterval > 7 && action === "+") {
      setInterval([firstInterval + 3, lastInterval - 3, count + 1, "+"]);
    } else if (lastInterval - firstInterval <= 7 || action === "-") {
      if (count === 0) {
        setInterval([firstInterval + 3, lastInterval - 3, count + 1, "+"]);
      } else {
        setInterval([firstInterval - 3, lastInterval + 3, count - 1, "-"]);
      }
    }
  };

  return (
    <>
      <Chart dates={dates} amount={amount} firstInterval={firstInterval} lastInterval={lastInterval} />
      <div className="btn_wrapper">
        <button className="btn_zoom" onClick={onChangeScaleClick}>
          <h4>Zoom</h4>
          <Icon variant="btn_icon">remove</Icon>
        </button>
      </div>
    </>
  );
};
