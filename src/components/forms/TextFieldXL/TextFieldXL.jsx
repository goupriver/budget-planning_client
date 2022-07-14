import React from "react";

import styles from "./TextFieldXL.module.css";

export const TextFieldXL = ({ onChange, value, name, id, type = "text", placeholder }) => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      className={styles.input}
      onChange={onChange}
      value={value}
    />
  );
};
