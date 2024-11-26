import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // 수정된 부분

export default function SwiperBanner({id}) {
  return (

    <div id={id}>
       <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // 자동 재생 설정
        pagination={{ type: "fraction" }} // Fraction 형식의 페이지네이션
        navigation // 앞뒤 버튼 활성화
        loop={true} // 무한 루프
     
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
 

    </div>
  )
}
