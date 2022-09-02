import styles from "./LogIn.module.css";

import { useForm } from "react-hook-form";

import { TextField } from "common/forms";
import { Button } from "common/buttons";

export const LogIn = () => {
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
            name="email"
            type="text"
            register={register}
            errors={errors}
            options={{
              required: { value: true, message: "enter your email" },
              pattern: { value: /.+@.+\..+/i, message: "email not valid" },
            }}
          />
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
          />
        </label>
        <a className={styles.forgotPassword} href="#">
          Forgot Password
        </a>
        <Button variant="primary_blue">Log In</Button>
        <h5 className={styles.alternative}>or continue with</h5>
        <div className={styles.authSocial}>
          <Button variant="primary_heavenly">Facebook</Button>
          <Button variant="primary_heavenly">Google</Button>
        </div>
      </form>
    </div>
  );
};
