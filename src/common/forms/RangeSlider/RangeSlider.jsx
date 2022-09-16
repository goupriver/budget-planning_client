import {
  ChakraProvider,
  RangeSlider as Slider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  RangeSliderMark,
} from "@chakra-ui/react";
import { useState } from "react";

import { style } from "./RangeSlider.styles";

export const RangeSlider = ({ setRangeData, expensesSum }) => {
  const [[first, second], setSliderValue] = useState([
    Math.floor(expensesSum / 3),
    Math.floor(expensesSum / 3 + expensesSum / 3),
  ]);
  const setValue = (val) => {
    setSliderValue(val);
    setRangeData([first, second]);
  };
  return (
    <ChakraProvider>
      <Slider
        defaultValue={[
          Math.floor(expensesSum / 3),
          Math.floor(expensesSum / 3 + expensesSum / 3),
        ]}
        min={0}
        max={expensesSum}
        onChange={(val) => setValue(val)}
      >
        <RangeSliderMark value={first} {...style.rangeSliderMark}>
          {first}
        </RangeSliderMark>
        <RangeSliderMark value={second} {...style.rangeSliderMark}>
          {second}
        </RangeSliderMark>
        <RangeSliderTrack {...style.rangeSliderTrack}>
          <RangeSliderFilledTrack {...style.rangeSliderFilledTrack} />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} {...style.rangeSliderThumb}>
          <Box {...style.box} />
        </RangeSliderThumb>
        <RangeSliderThumb index={1} {...style.rangeSliderThumb}>
          <Box {...style.box} />
        </RangeSliderThumb>
      </Slider>
    </ChakraProvider>
  );
};
