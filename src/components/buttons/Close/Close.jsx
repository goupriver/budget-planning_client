import styles from "./Close.module.css";

export const Close = ({ onClick, variant }) => {
  console.log(styles);
  return (
    <button className={styles.close + " " + styles[variant]} onClick={onClick}>
      <span className={"material-icons " + styles["mi" + variant]}>close</span>
    </button>
  );
};
