import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./AboutUnit.module.css";

import { dateOfWeek, getDayAndMonth } from "services/dates/format.helpers.ts";
import { Close } from "common/buttons";
import { Expense } from "features/expenses/Expense/Expense";

export const AboutUnit = () => {
  const navigate = useNavigate();

  const { expenseId } = useParams();

  const onCloseClick = () => {
    navigate(-1);
  };



  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.date}>
          {/* <h2>{dateOfWeek(new Date())}, </h2> */}
          <span>{getDayAndMonth(new Date())}</span>
        </div>
        <Close onClick={onCloseClick} variant="black" />
      </header>
      <Expense expense={{amount:200, category: 'Food', details: ''}} />
    </div>)
}