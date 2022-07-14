import React from "react";

import styles from "./TextFieldXL.module.css";

export const TextFieldXL = ({ onChange, value, name, id, type = "text" }) => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      className={styles.input}
      onChange={onChange}
      value={value}
    />
  );
};
