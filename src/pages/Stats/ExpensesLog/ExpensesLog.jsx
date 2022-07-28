import { ListExpenses } from "components/layout";
import { MonthAndYear } from "components/text";
import { useNavigate } from "react-router-dom";
import styles from "./ExpensesLog.module.css";

export const ExpensesLog = () => {
  const navigate = useNavigate()
  
const onCallFilterClcik = () => {
  navigate('/stats/filter')
}

  return (
    <>
      <div className={styles.date}>
        <MonthAndYear>{new Date()}</MonthAndYear>
        <button onClick={onCallFilterClcik} className={styles.filter}>Filter</button>
      </div>
      <ListExpenses />
    </>
  );
};
