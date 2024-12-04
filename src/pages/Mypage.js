import React from "react";
import "./mypage.module.scss";

const MyPage = () => {
  return (
    <div className="container-fluid px-0 py-5">
      <div className="container">
        <div className="row">
          {/* 왼쪽 4컬럼 영역 */}
          <div className="col-md-4 col-12 mb-3">
            <div className="p-3 border rounded">
              <h4>반가워요! 사용자님</h4>
              <p>
                현재 포인트: <strong>0P</strong>
              </p>
              <p>
                적립 예정 포인트: <strong>0P</strong>
              </p>
              <button className="btn btn-success btn-sm mt-2">포인트 더 보기</button>

              {/* 주문 내역 */}
              <div className="mt-4">
                <h5>자주 찾는 메뉴</h5>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    주문 내역
                    <span className="badge bg-primary">0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    배송 중
                    <span className="badge bg-primary">0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    취소 및 환불
                    <span className="badge bg-primary">0</span>
                  </li>
                </ul>
              </div>

              {/* 추천 배너 */}
              <div className="mt-4">
                <h5>추천 배너</h5>
                <div className="bg-info text-white p-3 rounded">
                  <p>최대 60% 할인! 지금 구매하세요.</p>
                </div>
              </div>

              {/* 쇼핑 */}
              <div className="mt-4">
                <h5>쇼핑</h5>
                <ul className="list-group">
                  <li className="list-group-item">결제수단 / 배송지</li>
                  <li className="list-group-item">취소 · 반품 · 환불 내역</li>
                  <li className="list-group-item">상품 후기</li>
                  <li className="list-group-item">찜한 상품</li>
                </ul>
              </div>

              {/* 혜택 */}
              <div className="mt-4">
                <h5>혜택</h5>
                <ul className="list-group">
                  <li className="list-group-item">해율멤버스</li>
                </ul>
              </div>

              {/* 서비스 */}
              <div className="mt-4">
                <h5>서비스</h5>
                <ul className="list-group">
                  <li className="list-group-item">배송관련 안내</li>
                  <li className="list-group-item">VIP 회원 가이드</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 오른쪽 8컬럼 영역 */}
          <div className="col-md-8 d-none d-md-block">
            <div className="p-3 border rounded">
              <h4>주문 내역</h4>
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
  );
};

export default MyPage;
