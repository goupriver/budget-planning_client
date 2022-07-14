import styles from "./AddExpense.module.css";

import { Button, Close } from "components/buttons";
import { Icon } from "components/media";
import {
  Select,
  Switch,
  TextField,
  FileUpload,
  Textarea,
} from "components/forms";
import { getFullDate } from "utils/dates/format.helpers";

export const AddExpense = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.blue}>
          <h1>Add Expense</h1>
          <Close variant="white" />
        </div>
        <div className={styles.white}>
          <span>Amount</span>
          <TextField />
          <button>
            <span>{getFullDate(new Date())}</span>
            <Icon>calendar</Icon>
          </button>
        </div>
      </div>
      <main>
        <div className={styles.category}>
          <span>Select Category</span>
          <Select />
          <div className={styles.remember}>
            <span>Add This Bill Each Month</span>
            <Switch />
          </div>
        </div>
        <div className={styles.photo}>
          <span>Add Photo</span>
          <FileUpload />
        </div>
        <div className={styles.textarea}>
          <span>More Details</span>
          <Textarea />
        </div>
      </main>
      <Button variant="primary_blue">Add</Button>
    </>
  );
};
