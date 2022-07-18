import { Icon } from "components/media";

import styles from "./TextField.module.css";

export const TextField = ({
  name,
  type,
  register,
  errors,
  options = undefined,
}) => {
  return (
    <>
      <input
        name={name}
        type={type}
        {...register(name, options)}
        className={styles.input}
      />

      {errors[name]?.message && (
        <div className={styles.error}>
          <Icon>error</Icon> <h5>{errors[name].message}</h5>
        </div>
      )}
    </>
  );
};
