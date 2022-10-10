import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./DatePicker.module.css";

export const SelectDate = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.year}>
        <div className={styles.year1}>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={0}
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            className="mySwiper">
            <SwiperSlide>
              <div className={styles.create}>2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>3</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>3</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>2</div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.year2}>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={0}
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            className="mySwiper">
            <SwiperSlide>
              <div className={styles.create}>3</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>5</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>3</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>3</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>4</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.month}>
        <div className={styles.month1}>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={0}
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
            </SwiperSlide>
              <div className={styles.create}>1</div>
            <SwiperSlide>
              <div className={styles.create}>1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>2</div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.month2}>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={0}
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            className="mySwiper">
            <SwiperSlide>
              <div className={styles.create}>3</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>3</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>5</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.create}>3</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
