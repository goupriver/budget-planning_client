import styles from "./TextFieldAddExpense.module.css";

export const TextFieldAddExpense = ({
  onChange,
  value,
  name,
  id,
  placeholder,
}) => {
  return (
    <div className={styles.wrapper}>
      <input
      placeholder={placeholder}
      name={name}
      id={id}
      type="number"
      className={styles.input}
      onChange={onChange}
      value={value}
    />
    <span>$</span>
    </div>
  );
};
