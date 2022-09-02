import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import "./DatePicker.css";

export const DatePicker = ({ mode }) => {
  const [selected, setSelected] = React.useState();

  return (
    <DayPicker
      mode={mode || "single" || "range"}
      fromDate={new Date(2022, 5, 22)}
      toDate={new Date(2022, 7, 22)}
      selected={selected}
      onSelect={setSelected}
      weekStartsOn={1}
    />
  );
};
