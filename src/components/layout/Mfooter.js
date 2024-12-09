import React from "react";
import { Link, useNavigate } from "react-router-dom";
import mf from "./mfooter.module.scss";
import logo from "../../assets/logo.svg";
import { Allmenulist } from "../common/_common_navi";
import Hcartbtn from "../common/Cartbtn";
import Bellbtn from "../common/Bellbtn";
import SearchBar from "../common/Searchinput";

export default function Mfooter({
  navidb,
  cartItems,
  isLoggedIn,
  handleLogout,
}) {
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
        <div className="h_top d-flex align-items-sm-start align-items-center justify-content-between">
          <ul className={`d-sm-flex d-none fw-400 ${mf.util} lh0-9 `}>
            {/* 로그인/로그아웃 버튼 */}
            {isLoggedIn ? (
              <li className="afterbar position-relative">
                <button
                  className="border-0 bg-transparent text-decoration-none px-0 text-sns-active"
                  onClick={handleLogout}
                >
                  로그아웃
                </button>
              </li>
            ) : (
              <li className="afterbar position-relative">
                <Link to="/login">로그인</Link>
              </li>
            )}
            <li className="afterbar position-relative">
              <button
                className="border-0 bg-transparent text-decoration-none px-0 text-sns-active"
                onClick={handleMyPageClick} // 로그인 여부에 따라 동작 제어
              >
                마이페이지
              </button>
            </li>
            <li>
              <Link to="/support">고객센터</Link>
            </li>
          </ul>
        </div>
        {/* gnav */}
        <div
          className={`d-flex align-items-center justify-content-between ${mf.gnbwrap}`}
        >
          <div className="allNaviwrap position-relative d-none d-md-block">
            <button
              className={`border-0 bg-white d-flex align-items-center px-0 ${mf.allmenu}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
              >
                <path
                  d="M0 15.3339V12.8895H22V15.3339H0ZM0 9.22279V6.77835H22V9.22279H0ZM0 3.11168V0.667236H22V3.11168H0Z"
                  fill="#222222"
                />
              </svg>
              <span>카테고리</span>
            </button>

          </div>

          <ul
            className={`d-flex align-items-center justify-content-between col col-sm-auto ${mf.gnb} me-auto `}
          >
            {navidb.gnavi.map((v, i) => {
              return (
                <li key={`gnb${i}`}>
                  <Link to={v.linkto}>{v.name}</Link>
                </li>
              );
            })}
          </ul>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Side Panel
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
            <div className="position-absolute allNavi start-0 top-100 end-0 d-none">
              <ul
                className={`position-relative d-inline-block ${mf.allNaviul} `}
              >
                {navidb["category"].map((v, i) => (
                  <li key={`naviallmenu${i}`}>
                    <Allmenulist to={v.linkto}>{v.name}</Allmenulist>
                    {v["subcategory"] && (
                      <ul
                        className={`position-absolute start-100 top-0 ${mf.submenu}`}
                      >
                        {v["subcategory"].map((vv, ii) => (
                          <li key={`subcategory${ii}`}>
                            <Link to={`product/${vv.linkto}/${vv.categoryId}`}>
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

          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            Open Side Panel
          </button>
          <div className={`${mf.utilMenu} d-flex align-items-center gap-3 `}>
            <div className="d-none d-md-block">
              <SearchBar placeholder="검색어를 입력하세요" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
