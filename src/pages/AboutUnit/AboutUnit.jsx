import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./AboutUnit.module.css";

import { dateOfWeek, getDayAndMonth } from "services/dates/format.helpers";
import { Close } from "common/buttons";
import { Expense } from "features/expenses/Expense/Expense";
import {
  selectExpenseById,
  selectStatusExpenses,
} from "features/expenses/expensesSlice";

export const AboutUnit = () => {
  const navigate = useNavigate();

  const { expenseId } = useParams();

  const expense = useSelector((state) => selectExpenseById(state, expenseId));
  const status = useSelector(selectStatusExpenses);

  const onCloseClick = () => {
    navigate(-1);
  };

  let content;

  if (status === "loading") {
    content = "loading";
  } else if (status === "succeeded") {
    content = (
      <>
        <header>
          <div className={styles.date}>
            <h2>{dateOfWeek(expense.date)}, </h2>
            <span>{getDayAndMonth(expense.date)}</span>
          </div>
          <Close onClick={onCloseClick} variant="black" />
        </header>
        <Expense expense={expense} />
      </>
    );
  }

  return <div className={styles.wrapper}>{content}</div>;
};
