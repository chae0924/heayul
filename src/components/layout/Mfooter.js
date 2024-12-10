import React from "react";
import { Link, useNavigate } from "react-router-dom";
import mf from "./mfooter.module.scss";
import { Allmenulist } from "../common/_common_navi";
import SearchBar from "../common/Searchinput";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { MainQuickmenu } from "../common/_main_navi";

export default function Mfooter({ navidb, isLoggedIn, handleLogout }) {
  const navigate = useNavigate();

  const handleMyPageClick = () => {
    // 추가: 마이페이지 클릭 시 동작 제어
    if (!isLoggedIn) {
      navigate("/login"); // 로그인 상태가 아니면 로그인 페이지로 이동
    } else {
      navigate("/mypage"); // 로그인 상태면 마이페이지로 이동
    }
  };
  return (
    <footer className={`fixed-bottom bg-white ${mf.mf} zup d-block d-md-none`}>
      <div
        className={`${mf.container} d-flex flex-column mx-auto mw px-3 px-xxl-0`}
      >
        {/* gnav */}
        <div
          className={`d-flex align-items-center justify-content-between ${mf.gnbwrap}`}
        >
          <ul
            className={`d-flex align-items-center justify-content-between col col-md-auto ${mf.gnb} me-auto `}
          >
            {/*홈 버튼(링크) _완료 */}
            <li className="d-flex align-items-center justify-content-center">
              <Link
                to="/"
                className="d-flex align-items-center justify-content-center flex-column"
              >
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.22847 13C1.42089 13 1.02501 12.016 1.60759 11.4567L11.8075 1.66483C12.1944 1.29335 12.8056 1.29335 13.1925 1.66483L23.3924 11.4567M2.22847 13C2.72361 13 3.125 13.4014 3.125 13.8965V23.5C3.125 23.8978 3.28962 24.2794 3.58265 24.5607C3.87567 24.842 4.2731 25 4.6875 25H8.375C8.92728 25 9.375 24.5523 9.375 24V19.1957C9.375 18.7978 9.53962 18.4163 9.83265 18.135C10.1257 17.8537 10.5231 17.6957 10.9375 17.6957H14.0625C14.4769 17.6957 14.8743 17.8537 15.1674 18.135C15.4604 18.4163 15.625 18.7978 15.625 19.1957V24C15.625 24.5523 16.0727 25 16.625 25H20.3125C20.7269 25 21.1243 24.842 21.4174 24.5607C21.7104 24.2794 21.875 23.8978 21.875 23.5V13.8965"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>홈</span>
              </Link>
            </li>
            {/* 검색 버튼 _완료 */}
            <li className="d-flex align-items-center justify-content-center">
              <button
                className="p-0 border-0 bg-transparent d-flex align-items-center justify-content-center flex-column"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 25L19.2 19.2M22.3333 11.6667C22.3333 17.5577 17.5577 22.3333 11.6667 22.3333C5.77563 22.3333 1 17.5577 1 11.6667C1 5.77563 5.77563 1 11.6667 1C17.5577 1 22.3333 5.77563 22.3333 11.6667Z"
                    stroke="#999999"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>검색</span>
              </button>
            </li>
            {/* 카테고리 버튼 _작업중*/}
            <li className="d-flex align-items-center justify-content-center">
              <button
                className="p-0 border-0 bg-transparent d-flex align-items-center justify-content-center flex-column"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNewExample"
                aria-controls="offcanvasNewExample"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20V17.5H24V20H0ZM0 11.6667V9H24V11.6667H0ZM0 2.5V0H24V2.5H0Z"
                    fill="#999999"
                  />
                </svg>

                <span>카테고리</span>
              </button>
            </li>
            {/*ai추천 버튼(링크) _작업중*/}
            <li className="d-flex align-items-center justify-content-center">
              <Link
                to="/"
                className="d-flex align-items-center justify-content-center flex-column"
              >
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0127 18.5347L26 25M11.5543 21.5485C12.9403 21.5485 14.3128 21.2827 15.5933 20.7664C16.8738 20.2501 18.0373 19.4933 19.0173 18.5392C19.9974 17.5852 20.7748 16.4526 21.3052 15.206C21.8356 13.9595 22.1086 12.6235 22.1086 11.2742C22.1086 9.92502 21.8356 8.58899 21.3052 7.34246C20.7748 6.09593 19.9974 4.96331 19.0173 4.00926C18.0373 3.05521 16.8738 2.29841 15.5933 1.78208C14.3128 1.26575 12.9403 1 11.5543 1C8.75513 1 6.0706 2.08246 4.09129 4.00926C2.11197 5.93605 1 8.54935 1 11.2742C1 13.9991 2.11197 16.6124 4.09129 18.5392C6.0706 20.466 8.75513 21.5485 11.5543 21.5485ZM5.43706 11.7296C4.72937 11.6077 4.72937 10.6015 5.43706 10.4795C6.68926 10.2628 7.84804 9.68166 8.76585 8.81014C9.68367 7.93863 10.319 6.81615 10.5909 5.58564L10.6332 5.39316C10.7871 4.69948 11.7813 4.69567 11.9409 5.38744L11.9928 5.61232C12.2763 6.83787 12.9186 7.9532 13.8392 8.81839C14.7599 9.68359 15.9178 10.2601 17.1678 10.4757C17.8794 10.5996 17.8794 11.6096 17.1678 11.7334C15.9182 11.9494 14.7606 12.526 13.8404 13.3912C12.9201 14.2564 12.2781 15.3715 11.9948 16.5968L11.9428 16.8217C11.7832 17.5135 10.789 17.5077 10.6351 16.816L10.5928 16.6254C10.3215 15.3939 9.68615 14.2704 8.76792 13.3982C7.84968 12.5259 6.69012 11.9463 5.43706 11.7296Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>AI 추천</span>
              </Link>
            </li>
            {/* 로그인 버튼 _작업중 */}
            {isLoggedIn ? (
              <li className="d-flex align-items-center justify-content-center">
                <button
                  className="border-0 bg-transparent d-flex align-items-center justify-content-center flex-column "
                  onClick={handleLogout}
                >
                  <svg
                    width="25"
                    height="28"
                    viewBox="0 0 25 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.83824 7.15777C7.83824 4.5397 9.93224 2.43408 12.5 2.43408C15.0678 2.43408 17.1618 4.5397 17.1618 7.15777C17.1618 9.77583 15.0678 11.8815 12.5 11.8815C9.93224 11.8815 7.83824 9.77583 7.83824 7.15777ZM12.5 0.934082C9.08777 0.934082 6.33824 3.72741 6.33824 7.15777C6.33824 10.5881 9.08777 13.3815 12.5 13.3815C15.9122 13.3815 18.6618 10.5881 18.6618 7.15777C18.6618 3.72741 15.9122 0.934082 12.5 0.934082ZM2.42647 24.9472C2.42647 20.8239 5.73812 17.4867 9.79412 17.4867H15.2059C19.2619 17.4867 22.5735 20.8239 22.5735 24.9472V25.5657H2.42647V24.9472ZM9.79412 15.9867C4.89365 15.9867 0.926472 20.0116 0.926472 24.9472V26.3157C0.926472 26.7299 1.26226 27.0657 1.67647 27.0657H23.3235C23.7377 27.0657 24.0735 26.7299 24.0735 26.3157V24.9472C24.0735 20.0116 20.1064 15.9867 15.2059 15.9867H9.79412Z"
                      fill="#999999"
                    />
                  </svg>
                  <span>로그아웃</span>
                </button>
              </li>
            ) : (
              <li>
                <Link
                  className="d-flex align-items-center justify-content-center flex-column"
                  to="/login"
                >
                  <svg
                    width="25"
                    height="28"
                    viewBox="0 0 25 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.83824 7.15777C7.83824 4.5397 9.93224 2.43408 12.5 2.43408C15.0678 2.43408 17.1618 4.5397 17.1618 7.15777C17.1618 9.77583 15.0678 11.8815 12.5 11.8815C9.93224 11.8815 7.83824 9.77583 7.83824 7.15777ZM12.5 0.934082C9.08777 0.934082 6.33824 3.72741 6.33824 7.15777C6.33824 10.5881 9.08777 13.3815 12.5 13.3815C15.9122 13.3815 18.6618 10.5881 18.6618 7.15777C18.6618 3.72741 15.9122 0.934082 12.5 0.934082ZM2.42647 24.9472C2.42647 20.8239 5.73812 17.4867 9.79412 17.4867H15.2059C19.2619 17.4867 22.5735 20.8239 22.5735 24.9472V25.5657H2.42647V24.9472ZM9.79412 15.9867C4.89365 15.9867 0.926472 20.0116 0.926472 24.9472V26.3157C0.926472 26.7299 1.26226 27.0657 1.67647 27.0657H23.3235C23.7377 27.0657 24.0735 26.7299 24.0735 26.3157V24.9472C24.0735 20.0116 20.1064 15.9867 15.2059 15.9867H9.79412Z"
                      fill="#999999"
                    />
                  </svg>
                  <span>로그인</span>
                </Link>
              </li>
            )}
          </ul>
          {/* 모바일 검색 슬라이드 */}
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className={`${mf.utilheader} mt-5 d-flex mx-3`}>
              <div className={`offcanvas-header ${mf.closeBtn} px-0`}>
                <button
                  type="button"
                  className="p-0 border-0 bg-transparent"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <svg
                    className="px-0 me-2"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 7L21 16L12 25"
                      stroke="#999999"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className={`${mf.utilMenu} d-flex align-items-center w-100`}>
                <SearchBar placeholder="검색어를 입력하세요" />
              </div>
            </div>
            <div className="offcanvas-body px-3">
              <div className="allNavi">
                <ul className={`${mf.allNaviul}`}>
                  {navidb["category"].map((v, i) => (
                    <li key={`naviallmenu${i}`}>
                      {/* 대메뉴 */}
                      <div
                        onClick={() => {
                          const submenu = document.getElementById(
                            `submenu-${i}`
                          );
                          if (submenu) {
                            submenu.classList.toggle("d-none"); // 토글: 숨기기/보이기
                          }
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <Allmenulist className="w-100" to={v.linkto}>
                          <div
                            className={`d-flex w-100 justify-content-between align-items-center`}
                          >
                            {v.name}
                            <svg
                              width="8"
                              height="14"
                              viewBox="0 0 8 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 13L7 7L1 1"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </Allmenulist>
                      </div>

                      {/* 소메뉴 */}
                      {v["subcategory"] && (
                        <ul
                          id={`submenu-${i}`}
                          className={`${mf.submenu} d-none`} // 초기 상태: 숨김
                        >
                          {v["subcategory"].map((vv, ii) => (
                            <li key={`subcategory${ii}`}>
                              <Link
                                to={`product/${vv.linkto}/${vv.categoryId}`}
                              >
                                {vv.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* 모바일 카테고리 슬라이드 */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNewExample"
            aria-labelledby="offcanvasNewExampleLabel"
          >
            <div className={`${mf.utilheader} mt-5 d-flex mx-3`}>
              <div className={`offcanvas-header ${mf.closeBtn} px-0`}>
                <button
                  type="button"
                  className="p-0 border-0 bg-transparent"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <svg
                    className="px-0 me-2"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 7L21 16L12 25"
                      stroke="#999999"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${mf.utilMenu} d-flex align-items-center w-100 pe-3`}
              >
                <span className="kr-h5">카테고리</span>
              </div>
            </div>
            {/* 카테고리 슬라이드 바디 */}
            <div className={`${mf.catebody} offcanvas-body px-3 `}>
              <div className="row row-cols-4 g-4 px-4">
                <div className="col d-flex flex-column align-items-center">
                  <MainQuickmenu to={`subscription`} w="40.8"></MainQuickmenu>
                  <span>정기배송</span>
                </div>
                <div className="col d-flex flex-column align-items-center">
                  <MainQuickmenu to={`event`} w="30.2"></MainQuickmenu>
                  <span>이벤트</span>
                </div>
                <div className="col d-flex flex-column align-items-center">
                  <MainQuickmenu to={`coupon`} w="32.7"></MainQuickmenu>
                  <span>쿠폰</span>
                </div>
                <div className="col d-flex flex-column align-items-center">
                  <MainQuickmenu to={`specialEvent`} w="26.2"></MainQuickmenu>
                  <span>기획전</span>
                </div>
                <div className="col d-flex flex-column align-items-center">
                  <MainQuickmenu to={`recipe`} w="35.4"></MainQuickmenu>
                  <span>레시피</span>
                </div>
                <div className="col d-flex flex-column align-items-center">
                  <MainQuickmenu to={`store`} w="26.8"></MainQuickmenu>
                  <span>매장찾기</span>
                </div>
                <div className="col d-flex flex-column align-items-center">
                  <MainQuickmenu to={`gift`} w="32"></MainQuickmenu>
                  <span>선물하기</span>
                </div>
                <div className="col d-flex flex-column align-items-center">
                  <MainQuickmenu to={`mealSalad`} w="37"></MainQuickmenu>
                  <span>밀키트</span>
                </div>
                <div className="col d-flex flex-column align-items-center">
                  <MainQuickmenu to={`lunchBox`} w="38.1"></MainQuickmenu>
                  <span>밥 / 면</span>
                </div>
                <div className="col d-flex flex-column align-items-center">
                  <MainQuickmenu to={`beverage`} w="24.8"></MainQuickmenu>
                  <span>음료</span>
                </div>
                <div className="col d-flex flex-column align-items-center">
                  <MainQuickmenu to={`seafood`} w="27.7"></MainQuickmenu>
                  <span>해조류</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
