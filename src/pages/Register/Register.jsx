import styles from "./Register.module.css";

import { useForm } from "react-hook-form";

import { TextField } from "common/forms";
import { Button } from "common/buttons";

export const Register = () => {
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
    <div className={styles.wrapper}>
      <div className={styles.selector}>
        <a href="#">Log In</a>
        <a href="#">Register</a>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <h4>E-mail</h4>
          <TextField
            type="email"
            name="email"
            register={register}
            errors={errors}
            options={{
              required: { value: true, message: "enter your email" },
              pattern: { value: /.+@.+\..+/i, message: "email not valid" },
            }}
          ></TextField>
        </label>
        <label htmlFor="password">
          <h4>Password</h4>
          <TextField
            name="password"
            type="password"
            errors={errors}
            options={{
              required: { value: true, message: "enter your password" },
              minLength: { value: 8, message: "password is too short" },
            }}
            register={register}
          ></TextField>
        </label>
      </form>
      <Button variant="primary_blue">Register</Button>
    </div>
  );
};
