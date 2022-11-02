import styles from "./Register.module.css";
import './active.css'

import { useForm } from "react-hook-form";

import { TextField } from "common/forms";
import { Button } from "common/buttons";
import { createUserEmail } from "services/firebase/auth/auth";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onFocus",
  });

  const [userNot, setUserNot] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setUserNot(false);
    const req = await createUserEmail(data.email, data.password);
    if (req === "auth/email-already-in-use") {
      setUserNot({ field: "email", message: "this email is already in use" });
      return 
    }
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.selector}>
        {/* <Link to="/login">Log In</Link>
        <Link to="/register">Register</Link> */}
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : null)}
        >Log In</NavLink>
         <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? "active" : null)}
        >Register</NavLink>
        
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <h4>E-mail</h4>
          <TextField
            userNot={userNot}
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
            userNot={userNot}
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
        <div className={styles.but}><Button variant="primary_blue" type="submit">
          Register
        </Button></div>
      </form>
    </div>
  );
};
