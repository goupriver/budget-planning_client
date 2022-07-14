import React from "react";

import styles from "./TextField.module.css";

export const TextField = ({ onChange, value, name, id, type = "text", placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      id={id}
      type={type}
      className={styles.input}
      onChange={onChange}
      value={value}
    />
  );
};
