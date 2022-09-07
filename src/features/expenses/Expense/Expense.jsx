import styles from "./Expense.module.css";

export const Expense = ({ expense }) => {
  const { amount, category, details } = expense;

  return (
    <main>
      <div className={styles.category}>
        <span className={styles.title}>Amount</span>
        <div className={styles.amount}>{amount}</div>
      </div>
      <div className={styles.category}>
        <span className={styles.title}>Category</span>
        <div className={styles.cat}>{category}</div>
      </div>
      <div className={styles.category}>
        <span className={styles.title}>Photos</span>
        <div className={styles.photos}>IMG</div>
      </div>
      <div className={styles.category}>
        <span className={styles.title}>More Details</span>
        <div className={styles.details}>{details}</div>
      </div>
    </main>
  );
};
