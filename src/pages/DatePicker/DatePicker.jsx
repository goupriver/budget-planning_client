import { Button } from "components/buttons";
import { DatePicker as DatePickerLib } from "components/forms";
import styles from "./DatePicker.module.css";

export const DatePicker = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.edit}>
        <DatePickerLib />
      </div>
      <Button variant="primary_blue">Select</Button>
    </div>
  );
};
