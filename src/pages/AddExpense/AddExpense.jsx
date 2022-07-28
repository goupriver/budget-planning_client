import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./AddExpense.module.css";

import { Button, Close } from "components/buttons";
import { Icon } from "components/media";
import {
  Select,
  Switch,
  TextFieldAddExpense,
  FileUpload,
  Textarea,
} from "components/forms";
import { getFullDate } from "utils/dates/format.helpers";

export const AddExpense = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onFocus", // ошибки проверяются после потери фокуса
  });

  const onSubmit = (data) => {
    console.log("onSubmit >>> ", data);
    console.log({ ...data, date: JSON.stringify(new Date()) });
    // reset(); // -очистка всех полей формы
    navigate("/", { replace: true });
  };

  const onCloseClick = () => {
    navigate(-1);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <div className={styles.blue}>
          <h1>Add Expense</h1>
          <Close onClick={onCloseClick} variant="white" />
        </div>
        <div className={styles.white}>
          <span>Amount</span>
          <TextFieldAddExpense
            name="amount"
            type="number"
            register={register}
            errors={errors}
            options={{
              required: { value: true, message: "enter number" },
            }}
          />
          <button>
            <span>{getFullDate(new Date())}</span>
            <Icon>calendar</Icon>
          </button>
        </div>
      </div>
      <main>
        <div className={styles.category}>
          <span>Select Category</span>
          <Select
            name="category"
            type="radio"
            register={register}
            errors={errors}
            options={{
              required: { value: true, message: "select category" },
            }}
          />
          <div className={styles.remember}>
            <span>Add This Bill Each Month</span>
            <Switch name="remember" type="checkbox" register={register} />
          </div>
        </div>
        <div className={styles.photo}>
          <span>Add Photo</span>
          <FileUpload name="file" register={register} />
        </div>
        <div className={styles.textarea}>
          <span>More Details</span>
          <Textarea name="details" register={register} />
        </div>
      </main>
      <Button variant="primary_blue">Add</Button>
    </form>
  );
};
