import { ListExpenses } from "features/expenses/ListExpenses/ListExpenses";
import { MonthAndYear } from "common/text";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./ExpensesLog.module.css";
import { useSelector } from "react-redux";
import {
  currentActivity,
  statusActivity,
} from "features/activity/activitySlice";
import { useMemo } from "react";

export const ExpensesLog = () => {
  const activity = useSelector(currentActivity);
  const status = useSelector(statusActivity);
  const navigate = useNavigate();

  const onCallFilterClcik = () => {
    navigate("/filter");
  };
  const domain = process.env.REACT_APP_DOMAIN;

  const location = useLocation();
  const searchParams = useMemo(() => {
    const url = new URL(`${domain}${location.pathname}${location.search}`);
    const q = url.searchParams.get("filter");
    const searchParam = JSON.parse(q);
    return searchParam;
  }, []);

  return (
    <>
      <div className={styles.date}>
        {status === "succeeded" ? (
          <MonthAndYear>{new Date(activity.year, activity.month)}</MonthAndYear>
        ) : (
          <div>loading...</div>
        )}

        <button
          onClick={onCallFilterClcik}
          className={searchParams ? styles.filter : styles.nofilter}
        >
          Filter
        </button>
      </div>
      <ListExpenses searchParams={searchParams} />
    </>
  );
};
