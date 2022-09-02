import { Icon } from "common/media";

import styles from "./TextFieldAddExpense.module.css";

export const TextFieldAddExpense = ({
  name,
  type,
  register,
  errors,
  options = undefined,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <input
          name={name}
          type={type}
          {...register(name, options)}
          className={styles.input}
        />
        <span>$</span>
      </div>
      
      {errors[name]?.message && (
        <div className={styles.error}>
          <Icon>error</Icon> <h5>{errors[name].message}</h5>
        </div>
      )}
    </>
  );
};
