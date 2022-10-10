import { Button } from "common/buttons";
import { useNavigate } from "react-router-dom";
import { SelectDate } from "./common/DatePicker/SelectDate";
import styles from "./CompareSelectDate.module.css";

export const CompareSelectDate = () => {
  const navigate = useNavigate();

  const onComparePageClick = () => {
    navigate("/stats/compare/result");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.edit}>
      <SelectDate />
      </div>
      <Button onClick={onComparePageClick} variant="primary_blue">
        Compare
      </Button>
    </div>
  );
};
