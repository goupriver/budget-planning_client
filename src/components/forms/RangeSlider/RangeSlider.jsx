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

export const RangeSlider = () => {
  const [[first, second], setSliderValue] = useState([50, 80]);

  return (
    <ChakraProvider>
      <Slider
        defaultValue={[50, 80]}
        min={0}
        max={300}
        onChange={(val) => setSliderValue(val)}
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
