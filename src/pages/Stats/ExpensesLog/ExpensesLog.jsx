import { ListExpenses } from "components/layout";
import { MonthAndYear } from "components/text";
import styles from "./ExpensesLog.module.css";

export const ExpensesLog = () => {
  return (
    <>
      <div className={styles.date}>
        <MonthAndYear>{new Date()}</MonthAndYear>
        <button className={styles.filter}>Filter</button>
      </div>
      <ListExpenses />
    </>
  );
};
