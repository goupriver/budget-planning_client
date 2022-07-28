import { Button } from "components/buttons";
import { DatePicker as DatePickerLib } from "components/forms";
import { useNavigate } from "react-router-dom";
import styles from "./CompareSelectDate.module.css";

export const CompareSelectDate = () => {
  const navigate = useNavigate();

  const onComparePageClick = () => {
    navigate("/stats/compare/result");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.edit}>
        <DatePickerLib mode="range" />
      </div>
      <Button onClick={onComparePageClick} variant="primary_blue">
        Compare
      </Button>
    </div>
  );
};
