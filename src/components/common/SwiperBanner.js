import React, { useRef, useEffect, useState } from 'react';  // useRef를 임포트해야 합니다.
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from 'react-router-dom';
import styles from './SwiperBanner.module.scss';

export default function SwiperBanner({id}) {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [device, setDevice] = useState("desktop");

  const images = {
    desktop: [
      { src: "/img/banner/black_pc.jpg", path: "/event" },
      { src: "/img/banner/deliver_pc.jpg", path: "/subscription" },
      { src: "/img/banner/recipe_pc.jpg", path: "/recipe" },
    ],
    tablet: [
      { src: "/img/banner/black_tap.jpg", path: "/event" },
      { src: "/img/banner/deliver_tap.jpg", path: "/subscription" },
      { src: "/img/banner/recipe_tap.jpg", path: "/recipe" },
    ],
    mobile: [
      { src: "/img/banner/black_mobile.jpg", path: "/event" },
      { src: "/img/banner/deliver_mobile.jpg", path: "/subscription" },
      { src: "/img/banner/recipe_mobile.jpg", path: "/recipe" },
    ],
  };

    // 반응형 디바이스 크기 감지
    const updateDevice = () => {
      if (window.innerWidth <= 768) {
        setDevice("mobile");
      } else if (window.innerWidth <= 1024) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };
  
    useEffect(() => {
      updateDevice();
      window.addEventListener("resize", updateDevice);
      return () => {
        window.removeEventListener("resize", updateDevice);
      };
    }, []);
  

  return(
      <>
        <div id={id} className={styles.swiperBanner}>
          <Swiper 
            spaceBetween={0} 
            loop={true}  
            modules={[Navigation,Autoplay]}  
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.swiper-button-prev', 
              nextEl: '.swiper-button-next',
            }}
            onBeforeInit={(swiper) => {
              // 초기화 전에 네비게이션 버튼을 swiper에 할당합니다.
              swiper.params.navigation.prevEl = '.swiper-button-prev';
              swiper.params.navigation.nextEl = '.swiper-button-next';
            }} 
            speed={700} 
            className={styles.mySwiper}
          >
        {images[device].map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={`Banner ${index + 1}`}
              className="w-100"
              sizes="100vw"
              onClick={() => navigate(image.path)}
              style={{ cursor: 'pointer' }}
            />
          </SwiperSlide>
        ))}
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
