import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./DatePicker.module.css";

import { Button } from "common/buttons";
import { DatePicker as DatePickerLib } from "common/forms";
import { filterExpensesByDate } from "features/expenses/expensesSlice";
import { useNavigate } from "react-router-dom";

export const DatePicker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectDate, setSelectDate] = useState();

  const onSelectDateClick = () => {
    if (selectDate.from && selectDate.to) {
      dispatch(filterExpensesByDate(selectDate));
    }

    navigate("/stats/log");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.edit}>
        <DatePickerLib
          mode="range"
          setSelectDate={setSelectDate}
          selectDate={selectDate}
        />
      </div>
      <Button variant="primary_blue" onClick={onSelectDateClick}>
        Select
      </Button>
    </div>
  );
};
