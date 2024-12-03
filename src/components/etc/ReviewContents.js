// ReviewContents 컴포넌트
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import CustomerReview from "./CustomerReviews";
import rs from "./reviewContents.module.scss";

export default function ReviewContents() {
  return (
    <div className={`${rs.reviewContents} mt120 mb120`}>
      <h2 className=".kr_h2 mb26 mw">소비자의 생생한 이용후기</h2>
      <Swiper
        loop={false}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={false}
        breakpoints={{
          500: {
            slidesPerView: 1.2, // 모바일에서 1.2개의 슬라이드 표시
            spaceBetween: 10, // 슬라이드 간 간격 설정
          },
          1300: {
            slidesPerView: 4.6,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
        <SwiperSlide className={rs.swiperSlide}>
          <CustomerReview />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
