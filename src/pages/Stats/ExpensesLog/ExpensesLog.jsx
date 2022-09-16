import { ListExpenses } from "features/expenses/ListExpenses/ListExpenses";
import { MonthAndYear } from "common/text";
import { useNavigate } from "react-router-dom";
import styles from "./ExpensesLog.module.css";
import { useDispatch } from "react-redux";
import { fetchExpenses } from "features/expenses/expensesSlice";

export const ExpensesLog = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

const onCallFilterClcik = async () => {
  await dispatch(fetchExpenses())
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
