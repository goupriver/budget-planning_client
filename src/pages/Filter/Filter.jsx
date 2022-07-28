import { Close, Button } from "components/buttons";
import { RangeSlider, Select } from "components/forms";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./Filter.module.css";

export const Filter = () => {
  const navigate = useNavigate()
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
    // navigate("/", { replace: true });
  };

  const onCloseClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <span>Filter by</span>
        <Close onClick={onCloseClick} variant="black" />
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          name="amount"
          type="checkbox"
          register={register}
          errors={errors}
          options={{
            required: { value: true, message: "select category" },
          }}
        />
        <div className={styles.range}>
          <span>Amount</span>
          <RangeSlider />
        </div>
        <div className={styles.buttons}>
          <Button variant="primary_heavenly">Reset</Button>
          <Button variant="primary_blue">Apply</Button>
        </div>
      </form>
    </div>
  );
};
