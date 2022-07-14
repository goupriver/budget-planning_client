import React from "react";
import styles from "./Register.module.css";

import { TextField } from "components/forms";
import { Button } from "components/buttons";

export const Register = () => {
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
      </form>
      <Button variant="primary_blue">Register</Button>
    </div>
  );
};
