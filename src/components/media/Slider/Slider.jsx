import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export const Slider = ({ children }) => {
  return (
    <Swiper spaceBetween={15}>
      <SwiperSlide>{children}</SwiperSlide>
    </Swiper>
  );
};
