import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./CompareSelectDate.module.css";

import { Button } from "common/buttons";
import { DatePicker as DatePickerLib } from "common/forms";
import { compereMonth } from "features/expenses/expensesSlice";
import { fetchAllBudget } from "features/budget/budgetSlices";

export const CompareSelectDate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectDate, setSelectDate] = useState();

  useEffect(() => {
    dispatch(fetchAllBudget());
  }, [dispatch]);

  const onComparePageClick = async () => {
    if (
      selectDate[0] &&
      selectDate[1] &&
      selectDate[0].toLocaleDateString().split("/")[0] !=
        selectDate[1].toLocaleDateString().split("/")[0]
    ) {
      await dispatch(compereMonth(selectDate));
      navigate("/stats/compare/result");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.edit}>
        <DatePickerLib
          mode="multiple"
          selectDate={selectDate}
          setSelectDate={setSelectDate}
        />
      </div>
      <Button onClick={onComparePageClick} variant="primary_blue">
        Compare
      </Button>
    </div>
  );
};
