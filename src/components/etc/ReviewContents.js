// ReviewContents 컴포넌트
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import rs from "./reviewContents.module.scss";
import reviews from "../../data/review.json"; 


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
            spaceBetween: 100,
          },
        }}
      >
     
     {reviews.map((item, index) =>   <SwiperSlide className={rs.className}>
          <div className={rs.wrapper}>
            {/* 메인 이미지 */}
            <img
              src={item.image_url}
              className="img-fluid"
              style={{ borderRadius: "8px" }}
              alt={item.image_alt}
            />
          </div>

          <div className="d-flex">
            {/* 리뷰 내용 */}
            <div className={rs.contentsbox}>
              <div className={`${rs.text} kr-body`}>
                {item.userReview}
              </div>
              <div className="kr-h5 ms-2">{item.userId}</div>
            </div>

            {/* 작성자 이미지 및 제품 이름 */}
            <div>
              <img
                src={item.userImg}
                className={`img-fluid ${rs.smallpicture}`}
                alt={`${item.userId}의 리뷰 이미지`}
              />
              <p className={`${rs.productName} kr-body`}>{item.name}</p>
            </div>
          </div>
        </SwiperSlide>
      )}
      
        
      </Swiper>
    </div>
  );
}
