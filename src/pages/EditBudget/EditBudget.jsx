import { Button, Close } from "components/buttons";
import { TextFieldXL } from "components/forms";
import { MonthAndYear } from "components/text";
import styles from "./EditBudget.module.css";

export const EditBudget = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <MonthAndYear>{new Date()}</MonthAndYear>
          <Close variant="black" />
        </div>
        <div className={styles.edit}>
          <h3>Budget</h3>
          <TextFieldXL />
        </div>
      </div>
      <Button variant="primary_blue">Save</Button>
    </div>
  );
};
