import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import pn from "./partner.module.scss";

const FooterPartners = () => {
  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기에 따라 모바일 여부 판단
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 모바일 기준
    };

    checkMobile(); // 초기 상태 설정
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile); // cleanup
    };
  }, []);

  const partners = [
    "partner1.gif",
    "partner2.gif",
    "partner3.gif",
    "partner4.gif",
    "partner5.gif",
    "partner6.gif",
    "partner7.gif",
    "partner8.gif",
    "partner9.gif",
    "partner10.gif",
  ];

  return (
    <div className={`footer-partners mt120 mb120 ${pn.wrapper}`}>
     <h2 className="kr_h2 mb26 mw" >함께하는 기업</h2>
      <div className="container">
        {isMobile ? (
          // 모바일: Swiper로 슬라이드 구현
          <Swiper slidesPerView="auto" spaceBetween={15}>
            {partners.map((partner, index) => (
              <SwiperSlide
                key={index}
                style={{
                  width: `calc((100% - 60px) / 7)`, // 7개의 슬라이드가 보이도록 설정
                  flexShrink: 0,
                }}
              >
                <div className={pn.overflowBOX}>
                <img
                  src={`/img/partner/${partner}`}
                  alt={`Partner ${index + 1}`}
                  className={`partner-img ${pn.img}`}
                />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // 데스크톱: 모든 이미지를 나열
          <div className={`partner-list d-flex justify-content-between mw ${pn.list}`}>
            {partners.map((partner, index) => (
              <div key={index} className={`partner-item ${pn.item}`}>
                <img
                  src={`/img/partner/${partner}`}
                  alt={`Partner ${index + 1}`}
                  className={`partner-img ${pn.img}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterPartners;
