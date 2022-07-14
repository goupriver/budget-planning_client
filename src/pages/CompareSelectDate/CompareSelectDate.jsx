import { Button } from "components/buttons";
import { DatePicker as DatePickerLib } from "components/forms";
import styles from "./CompareSelectDate.module.css";

export const CompareSelectDate = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.edit}>
        <DatePickerLib mode="range" />
      </div>
      <Button variant="primary_blue">Compare</Button>
    </div>
  );
};
