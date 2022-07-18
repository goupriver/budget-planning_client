import { useForm } from "react-hook-form";

import { Button, Close } from "components/buttons";
import { TextFieldXL } from "components/forms";
import { MonthAndYear } from "components/text";
import styles from "./EditBudget.module.css";
export const EditBudget = () => {
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
    // reset(); // -очистка всех полей формы
  };
  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <MonthAndYear>{new Date()}</MonthAndYear>
          <Close variant="black" />
        </div>
        <div className={styles.edit}>
          <h3>Budget</h3>
          <TextFieldXL 
           name="number"
           type="number"
           errors={errors}
           options={{
             required: { value: true, message: "enter your budget" },
           }}
           register={register}
          />
        </div>
      </div>
      <Button variant="primary_blue">Save</Button>
    </form>
  );
};
