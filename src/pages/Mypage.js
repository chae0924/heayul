import React from "react";
import styles from "./mypage.module.scss";
import {
  MypageCoupon,
  MypageList,
  MypageRecent,
  MypageWish,
} from "../components/common/util/_icon";

const MyPage = () => {
  return (
    <div className="bg-sub01">
      <div className={`${styles.containerFluid} px-0 py-5`}>
        <div className={`${styles.container}`}>
          <div className="row px-0 g-0">
            {/* 왼쪽 4컬럼 영역 */}
            <div className="col-md-4 col-12 mb-3 pe-md-4 px-md-0 px-3">
              <div className={`${styles.sidebar}`}>
                <div>
                  <span>반가워요! 사용자님</span>
                  <span>최초 1회 무료배송</span>
                  <div className="d-flex justify-content-between pt-3 border flex-wrap">
                    <div className={`${styles.bd} col-6 ps-3`}>
                      <p>적립금</p>
                      <strong>0원</strong>
                    </div>
                    <div className="col-6 ps-3">
                      <p>해율캐시</p>
                      <strong>0원</strong>
                    </div>
                    <div className="col-12 mt-3 ps-3 bg-sub01">
                      <p>해율멤버스 2개월 무료 체험하기</p>
                      <span>12월 31일 종료</span>
                    </div>
                  </div>

                </div>
                {/* 주문 내역 */}
                <div className={`${styles.listContainer} pt-4 pb-3 border-0`}>
                  <h5>자주 찾는 메뉴</h5>
                  <ul className="list-group">
                    <li className={`${styles.listGroupItem}`}>
                      <div className="d-flex align-items-center gap-4">
                        <MypageList className="icon" />
                        <span>주문 내역</span>
                      </div>
                    </li>
                    <li className={`${styles.listGroupItem}`}>
                      <div className="d-flex align-items-center gap-4">
                        <MypageCoupon />
                        <span>쿠폰</span>
                      </div>
                      <span className="badge bg-primary">0</span>
                    </li>
                    <li className={`${styles.listGroupItem}`}>
                      <div className="d-flex align-items-center gap-4">
                        <MypageWish />
                        <span>찜한 상품</span>
                      </div>
                      <span className="badge bg-primary">0</span>
                    </li>
                    <li className={`${styles.listGroupItem}`}>
                      <div className="d-flex align-items-center gap-4">
                        <MypageRecent />
                        <span>주문 내역</span>
                      </div>
                      <span className="badge bg-primary">0</span>
                    </li>
                    <li className={`${styles.listGroupItem}`}>
                      <img className="img-fluid" src="/img/sns/mypageEvent.png" alt="멤버쉽이벤트" />
                    </li>
                  </ul>
                </div>

                {/* 쇼핑 */}
                <div className={`${styles.listContainer} pt-4 pb-3`}>
                  <h5>쇼핑</h5>
                  <ul className="list-group">
                    <li className={`${styles.listGroupItem}`}>
                      결제수단 / 해율페이
                    </li>
                    <li className={`${styles.listGroupItem}`}>
                      취소 · 반품 · 환불 내역
                    </li>
                    <li className={`${styles.listGroupItem}`}>상품 리뷰</li>
                    <li className={`${styles.listGroupItem}`}>상품 문의</li>
                  </ul>
                </div>

                {/* 혜택 */}
                <div className={`${styles.listContainer} pt-4 pb-3`}>
                  <h5>혜택</h5>
                  <ul className="list-group">
                    <li className={`${styles.listGroupItem}`}>해율멤버스</li>
                  </ul>
                </div>

                {/* 내 정보관리 */}
                <div className={`${styles.listContainer} pt-4 pb-3`}>
                  <h5>내 정보관리</h5>
                  <ul className="list-group">
                    <li className={`${styles.listGroupItem}`}>배송지 관리</li>
                    <li className={`${styles.listGroupItem}`}>
                      나의 해율스타일
                    </li>
                    <li className={`${styles.listGroupItem}`}>개인정보 수정</li>
                  </ul>
                </div>
                {/* 서비스 */}
                <div className={`${styles.listContainer} pt-4 pb-3`}>
                  <h5>서비스</h5>
                  <ul className="list-group">
                    <li className={`${styles.listGroupItem}`}>배송관련 안내</li>
                    <li className={`${styles.listGroupItem}`}>
                      VIP 회원 가이드
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 오른쪽 8컬럼 영역 */}
            <div className="col-md-8 d-none d-md-block px-0">
              <div className={`${styles.content}`}>
                <div>
                  <h4>주문 내역</h4>
                </div>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      1개월
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      3개월
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      6개월
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      1년
                    </a>
                  </li>
                </ul>
                <div className="mt-3">
                  <p>1개월간 주문 내역이 없습니다.</p>
                  <button className="btn btn-primary">베스트 상품 보기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
