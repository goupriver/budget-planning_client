import styles from "./Button.module.css";

export const Button = ({
  children,
  onClick,
  variant,
  wa,
  widthauto = false,
  type = "button",
}) => {
  const width = wa ? styles.wa : "";
  const autowidth = widthauto ? styles.widthauto : styles.width100

  return (
    <button
      type={type}
      className={styles.btn + " " + styles[variant] + " " + autowidth + " " + width}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
