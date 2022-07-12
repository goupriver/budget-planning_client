import React from "react";

import styles from "./TextField.module.css";

export const TextField = ({ onChange, value, type = "text" }) => {
  return (
    <input
      type={type}
      className={styles.module}
      onChange={onChange}
      value={value}
    />
  );
};
