import styles from "./Button.module.css";

export const Button = ({ children, onClick, variant }) => {
  return (
    <button className={styles.btn + " " + styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
};
