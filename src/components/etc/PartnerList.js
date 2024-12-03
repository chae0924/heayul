import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 

// 화면 크기에 따라 모바일 여부를 업데이트하는 함수
const FooterPartners = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);  // 모바일 화면 여부
    };

    checkMobile();  // 처음 페이지가 로드될 때 화면 크기 체크
    window.addEventListener('resize', checkMobile);  // 화면 크기 변경 시 체크

    return () => {
      window.removeEventListener('resize', checkMobile);  // clean up
    };
  }, []);

  const partners = [
    'partner1.gif',
    'partner2.gif',
    'partner3.gif',
    'partner4.gif',
    'partner5.gif',
    'partner6.gif',
    'partner7.gif',
    'partner8.gif',
    'partner9.gif',
    'partner10.gif',,
  ];

  return (
    <div className="footer-partners mt120 mb120">
     <h2 className="kr-h2 mb26 mw" >함께하는 기업</h2>
      <div className="container">
        {isMobile ? (
          <Swiper
            slidesPerView={7} // 모든 화면 크기에서 7개의 이미지를 보여줍니다.
            spaceBetween={10}  // 슬라이드 간격을 10px로 설정
            breakpoints={{
            320: { slidesPerView: 4, spaceBetween: 50 },  // 320px 이상에서는 7개

  }}
>
  {partners.map((partner, index) => (
    <SwiperSlide key={index}>
      <img src={`/img/partner/${partner}`} alt={`Partner ${index + 1}`} className="partner-img" />
    </SwiperSlide>
  ))}
</Swiper>

        ) : (
          // PC 화면에서는 그냥 이미지 나열
          <div className="partner-list d-flex justify-content-between" style={{ maxWidth: '1200px', margin: '0 auto' }}>

            {partners.map((partner, index) => (
              <div key={index} className="partner-item">
                <img src={`/img/partner/${partner}`} alt={`Partner ${index + 1}`} className="partner-img" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterPartners;
