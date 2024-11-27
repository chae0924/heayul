import React, { useRef } from 'react';  // useRef를 임포트해야 합니다.
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from '../css/SwiperBanner.module.css';

export default function SwiperBanner({id}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  return(
      <>
        <div id={id} className={styles.swiperBanner}>
          <Swiper 
            spaceBetween={0} 
            loop={true}  
            modules={[Navigation,Autoplay]}  
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.swiper-button-prev', // 기본 Swiper 버튼 사용
              nextEl: '.swiper-button-next',
            }}
            onBeforeInit={(swiper) => {
              // 초기화 전에 네비게이션 버튼을 swiper에 할당합니다.
              swiper.params.navigation.prevEl = '.swiper-button-prev';
              swiper.params.navigation.nextEl = '.swiper-button-next';
            }} 
            speed={700} 
            className="mySwiper"
          >
            <SwiperSlide>
        <img src="https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/312e94b3-bcaa-4f0a-8539-12851c4dcc10.jpg" decoding="async" data-nimg="fill" className="w-100"  sizes="100vw" srcSet="https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/312e94b3-bcaa-4f0a-8539-12851c4dcc10.jpg 640w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/312e94b3-bcaa-4f0a-8539-12851c4dcc10.jpg 750w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/312e94b3-bcaa-4f0a-8539-12851c4dcc10.jpg 828w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/312e94b3-bcaa-4f0a-8539-12851c4dcc10.jpg 1080w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/312e94b3-bcaa-4f0a-8539-12851c4dcc10.jpg 1200w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/312e94b3-bcaa-4f0a-8539-12851c4dcc10.jpg 1920w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/312e94b3-bcaa-4f0a-8539-12851c4dcc10.jpg 2048w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/312e94b3-bcaa-4f0a-8539-12851c4dcc10.jpg 3840w"></img>
      </SwiperSlide>
      <SwiperSlide>
      <img alt="메인배너" src="https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/46efd25d-695c-4294-8b2f-3595173828d8.jpg" decoding="async" data-nimg="fill" className="w-100"  sizes="100vw" srcSet="https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/46efd25d-695c-4294-8b2f-3595173828d8.jpg 640w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/46efd25d-695c-4294-8b2f-3595173828d8.jpg 750w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/46efd25d-695c-4294-8b2f-3595173828d8.jpg 828w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/46efd25d-695c-4294-8b2f-3595173828d8.jpg 1080w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/46efd25d-695c-4294-8b2f-3595173828d8.jpg 1200w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/46efd25d-695c-4294-8b2f-3595173828d8.jpg 1920w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/46efd25d-695c-4294-8b2f-3595173828d8.jpg 2048w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/46efd25d-695c-4294-8b2f-3595173828d8.jpg 3840w" />
      </SwiperSlide>
      <SwiperSlide>
      <img alt="메인배너" src="https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/09193c01-e241-4666-9d41-ec55deeff5e7.jpg" decoding="async" data-nimg="fill" className="w-100"  sizes="100vw" srcSet="https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/09193c01-e241-4666-9d41-ec55deeff5e7.jpg 640w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/09193c01-e241-4666-9d41-ec55deeff5e7.jpg 750w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/09193c01-e241-4666-9d41-ec55deeff5e7.jpg 828w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/09193c01-e241-4666-9d41-ec55deeff5e7.jpg 1080w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/09193c01-e241-4666-9d41-ec55deeff5e7.jpg 1200w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/09193c01-e241-4666-9d41-ec55deeff5e7.jpg 1920w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/09193c01-e241-4666-9d41-ec55deeff5e7.jpg 2048w, https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/09193c01-e241-4666-9d41-ec55deeff5e7.jpg 3840w" />
      </SwiperSlide>
  
          </Swiper>

          {/* 기본 버튼 클래스 사용 */}
          <div className={styles.swiperNavigation}>
            <div className={`swiper-button-prev ${styles.swiperPrev} ${styles.bt}`}></div>
            <div className={`swiper-button-next ${styles.swiperNext} ${styles.bt}`}></div>
          </div>
        </div>
      </>
  );
}
