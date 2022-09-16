import { Close, Button } from "common/buttons";
import { RangeSlider, Select } from "common/forms";
import { fetchExpenses, filterExpenses, selectAllExpenses, selectStatusExpenses } from "features/expenses/expensesSlice";
import { useEffect, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Filter.module.css";

export const Filter = () => {
  const expenses = useSelector(selectAllExpenses)
  const status = useSelector(selectStatusExpenses)

  const expRes = status === 'succeeded' ? Object.values(expenses).flat() : 0
  const expensesSum = !!expRes && expRes.reduce((acc ,element) => acc + element.amount, 0)

  const [[min, max], setRangeData] = useState([0, expensesSum]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    dispatch(filterExpenses({ ...data, amount: { min, max } }));
    navigate("/stats/log", { replace: true });
  };

  const onCloseClick = () => {
    navigate(-1);
  };

  // const onResetStoreClick = () => {
  //   dispatch(fetchExpenses())
  // }

  return (
    <div className={styles.wrapper}>
      <header>
        <span>Filter by</span>
        <Close onClick={onCloseClick} variant="black" />
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          name="category"
          type="checkbox"
          register={register}
          errors={errors}
          options={{
            required: { value: true, message: "select category" },
          }}
        />
        <div className={styles.range}>
          <span>Amount</span>
          <RangeSlider expensesSum={expensesSum} setRangeData={setRangeData} />
        </div>
        <div className={styles.buttons}>
          <Button  variant="primary_heavenly">Reset</Button>
          <Button variant="primary_blue">Apply</Button>
        </div>
      </form>
    </div>
  );
};
