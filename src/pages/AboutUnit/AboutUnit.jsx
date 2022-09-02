import { Close } from "common/buttons";
import { useNavigate } from "react-router-dom";
import { dateOfWeek, getDayAndMonth } from "services/dates/format.helpers";
import styles from "./AboutUnit.module.css";

export const AboutUnit = () => {
  const navigate = useNavigate();

  const onCloseClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.date}>
          <h2>{dateOfWeek(new Date())}, </h2>
          <span>{getDayAndMonth(new Date())}</span>
        </div>
        <Close onClick={onCloseClick} variant="black" />
      </header>
      <main>
        <div className={styles.category}>
          <span className={styles.title}>Amount</span>
          <div className={styles.amount}>500$</div>
        </div>
        <div className={styles.category}>
          <span className={styles.title}>Category</span>
          <div className={styles.cat}>BILLS</div>
        </div>
        <div className={styles.category}>
          <span className={styles.title}>Photos</span>
          <div className={styles.photos}>IMG</div>
        </div>
        <div className={styles.category}>
          <span className={styles.title}>More Details</span>
          <div className={styles.details}>Electricity bill</div>
        </div>
      </main>
    </div>
  );
};
