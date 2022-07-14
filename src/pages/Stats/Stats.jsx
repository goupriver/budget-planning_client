import { TabBar } from "components/forms";
import { Icon } from "components/media";
import { ExpensesLog } from "./ExpensesLog/ExpensesLog";
import styles from "./Stats.module.css";

export const Stats = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.name}>Stats</h1>
        <div className={styles.buttons}>
          <button>
            <Icon>balance</Icon>
          </button>
          <button>
            <Icon>calendar</Icon>
          </button>
        </div>
      </header>
      <TabBar first="General" last="Expenses Log" />
      <main className={styles.main}>
        <ExpensesLog />{" "}
      </main>
    </>
  );
};
