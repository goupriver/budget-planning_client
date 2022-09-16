import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import "./DatePicker.css";

export const DatePicker = ({ mode, selectDate, setSelectDate }) => {
  return (
    <DayPicker
      mode={mode || "single"} // "range" | "single" | "multiple"
      min={mode === 'multiple' ? 1 : null}
      max={mode === 'multiple' ? 2 : null}
      // fromDate={new Date(2022, 5, 22)}
      // toDate={new Date(2022, 7, 22)}
      selected={selectDate}
      onSelect={setSelectDate}
      weekStartsOn={1}
    />
  );
};
