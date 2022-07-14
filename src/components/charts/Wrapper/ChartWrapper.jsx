import styles from "./ChartWrapper.module.css";

export const ChartWrapper = ({ children }) => {
  return <div className={styles.wrapperChart}>{children}</div>;
};