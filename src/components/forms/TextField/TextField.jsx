import React from "react";

import styles from "./TextField.module.css";

export const TextField = ({ onChange, value }) => {
  return (
    <input
      type="text"
      className={styles.module}
      onChange={onChange}
      value={value}
    />
  );
};
