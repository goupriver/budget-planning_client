import React from "react";
import styles from "./LogIn.module.css";

import { TextField } from "components/forms";
import { Button } from "components/buttons";

export const LogIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.selector}>
        <a href="#">Log In</a>
        <a href="#">Register</a>
      </div>
      <form className={styles.form}>
        <label htmlFor="email">
          <h4>E-mail</h4>
          <TextField
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </label>
        <label htmlFor="password">
          <h4>Password</h4>
          <TextField
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
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
