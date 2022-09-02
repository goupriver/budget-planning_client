import { Outlet, useNavigate } from "react-router-dom";

import { TabBar } from "common/forms";
import { Icon } from "common/media";
import styles from "./Stats.module.css";

export const Stats = () => {
  const navigate = useNavigate();

  const onNavigateClick = (e) => {
    e.target.checked ? navigate("log") : navigate("general");
  };

  const onCompareClick = () => {
    navigate("/stats/compare");
  };

  const onOpenCalendarClick = () => {
    navigate("/stats/calendar");
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.name}>Stats</h1>
        <div className={styles.buttons}>
          <button onClick={onCompareClick}>
            <Icon>balance</Icon>
          </button>
          <button onClick={onOpenCalendarClick}>
            <Icon>calendar</Icon>
          </button>
        </div>
      </header>
      <TabBar onClick={onNavigateClick} first="General" last="Expenses Log" />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
