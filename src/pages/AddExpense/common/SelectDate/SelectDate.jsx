import styles from "./SelectDate.module.css";

import { getFullDate } from "services/dates/format.helpers";
import { Icon } from "common/media";
import { DatePicker } from "common/forms";
import { Button } from "common/buttons";
import { useState } from "react";

export const SelectDate = ({ date, setDate }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectDate, setSelectDate] = useState();

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const onSelectDateClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDate(selectDate);
    setIsActive(!isActive);
  };

  return (
    <div className={styles.wrapper} onClick={() => setIsActive(!isActive)}>
      <div className={styles.date}>
        <span>{getFullDate(date)}</span>
        <Icon>calendar</Icon>
      </div>
      {isActive && (
        <div className={styles.position}>
          <div className={styles.modal} onClick={stopPropagation}>
            <DatePicker selectDate={selectDate} setSelectDate={setSelectDate} />
            <Button variant="primary_blue" onClick={onSelectDateClick}>
              Select
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
