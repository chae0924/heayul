import React from "react";
import { Syoutube,Sgit,Sinstar,Skakao,Badges } from "../common/util/_icon";
import ft from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={ft.footer}>
      {/* 쿠폰 프로모션 배경 */}
      <div className={ft.promotionBanner}>
        {/* <p>쿠폰 프로모션 배너 내용</p> */}
      </div>

      {/* 풋터 메인 */}
      <div className={`${ft.footerMain} mw`}>
        {/* 이용약관 */}
        <div className={ft.footerTerms}>
          <div className="d-flex justify-content-between">
            <ul className="d-flex">
              <li>이용약관<img src="/img/footer/vertical-bar.png" alt="" /></li>
              <li>개인정보처리방침<img src="/img/footer/vertical-bar.png" alt="" /></li>
              <li>해율 소개<img src="/img/footer/vertical-bar.png" alt="" /></li>
              <li>기업 안내<img src="/img/footer/vertical-bar.png" alt="" /></li>
              <li>고객센터<img src="/img/footer/vertical-bar.png" alt="" /></li>
            </ul>
            <ul className="d-flex">
              <li>윤슬<img src="/img/footer/vertical-bar.png" alt="" /></li>
              <li>아모레퍼시픽</li>
            </ul>
          </div>
        </div>

        {/* 3개의 덩어리 */}
        <div className={`${ft.footerContent} d-flex`}>
          <div className={ft.contentBox}>
          <h3 className="kr-h5 ">주식회사 해율</h3>

              <ul>
                <li>서울 구리고 새말로 97 (구로동, 신도림테크노마트) 6층</li>
                <li>대표<img src="/img/footer/vertical-bar.png" alt="" /><span>코딩러쉬</span>사업자등록번호<img src="/img/footer/vertical-bar.png" alt="" /><span>123-56-78900</span></li>
                <li>통신판매신고번호<img src="/img/footer/vertical-bar.png" alt="" /><span>제 2024-서울구로-0014호</span>FAX<img src="/img/footer/vertical-bar.png" alt="" /><span>02-1234-1234</span></li>
                <li className={ft.Copyright}>Copyright (c) 2024 Coding Rush All Rights Reserved. <a href="">Figma</a> <a href="">Figjam</a></li>
              </ul>
          </div>

          <div className={ft.contentBox}>
            <h3 className="kr-h5">고객센터</h3>
            <ul className={ft.contactSection}>
              <li>1644-0000</li>
              <li><span>평일</span>오전 10시 ~ 오후 6시(점심시간 12시~1시)</li>
              <li>· 주말 및 공휴일 휴무</li>
              <li><span>이메일</span>help@haeyul.com</li>
              <li>· 기업 문의는 기업 문의 탭을 확인해주세요</li>
            </ul>
          

          </div>

          <div className={ft.contentBox}>
            
            <div className={`d-flex ${ft.iconContainer}`}>
              <a href=""><Sinstar></Sinstar></a>
              <a href=""><Sgit></Sgit></a>
              <a href=""><Syoutube></Syoutube></a>
              <a href=""><Skakao></Skakao></a>
            </div>
            <img className={ft.footerLogo} src="/img/footer/footerLogo.svg" alt="footerLogo.svg" />
            <div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
