import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button, Close } from "common/buttons";
import { TextFieldXL } from "common/forms";
import { MonthAndYear } from "common/text";
import styles from "./EditBudget.module.css";
import {
  editCurrentMonth,
  fetchCurrentMonth,
} from "features/budget/budgetSlices";

export const EditBudget = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onCloseClick = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  const onSubmit = async (data) => {
    await dispatch(
      editCurrentMonth({ budget: Number(data.budget), date: new Date() })
    );
    
    dispatch(fetchCurrentMonth(new Date()));

    navigate("/", { replace: true });
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <MonthAndYear>{new Date()}</MonthAndYear>
          <Close onClick={onCloseClick} variant="black" />
        </div>
        <div className={styles.edit}>
          <h3>Budget</h3>
          <TextFieldXL
            name="budget"
            type="number"
            errors={errors}
            options={{
              required: { value: true, message: "enter your budget" },
              min: {value: 1, message: "enter a value greater than 0"},
              max: {value: 999999999, message: "enter a value less than a billion"}
            }}
            register={register}
          />
        </div>
      </div>
      <Button variant="primary_blue">Save</Button>
    </form>
  );
};
