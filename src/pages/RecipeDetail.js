import React, { useEffect, useRef, useState } from "react";
import { Wishheart, BookmarkBt, RateBt } from "../components/common/util/_icon";
import { Tabbtn, Plusbtn } from "../components/common/_common";
import {
  RecipeTime,
  RecipePerson,
  rateBt,
} from "../components/common/util/_icon";

export default function RecipeDetail() {
  const buttonsRef = useRef([]);
  const [heartnumer, setHNum] = useState(1512);

  useEffect(() => {
    const toggleClass = (event) => {
      const button = event.currentTarget;
      button.classList.toggle("active"); // 클래스 토글
      console.log("Toggled classList:", button.classList);

      if (button.classList.contains("wishicon")) {
        setHNum((prev) =>
          button.classList.contains("active") ? prev + 1 : prev - 1
        );
      }
    };

    buttonsRef.current.forEach((button) => {
      if (button) {
        button.addEventListener("click", toggleClass);
      }
    });

    return () => {
      buttonsRef.current.forEach((button) => {
        if (button) {
          button.removeEventListener("click", toggleClass);
        }
      });
    };
  }, []);

  return (
    <div>
      <div
        className="position-relative overflow-hidden rounded-3 mw"
        style={{ height: "400px" }}
      >
        {/* Background Image */}
        <div
          className="position-relative w-100 h-100 overflow-hidden top-0 start-0"
          style={{
            backgroundImage: "url('/img/recipe/0.jpg')", // 이미지 경로
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content */}
        <div className="position-absolute bottom-0 d-flex flex-column justify-content-end p-4 w-100 h-100">
          {/* Metadata */}
          <div className="d-flex start-0 w-100 justify-content-between align-items-center text-white">
            <span className="">2024. 12. 04 · 조회수 1512</span>
            <div className="d-flex align-items-center gap-3">
              <span className="">스크랩</span>
              <span className="">1563</span>
              <span className="">·</span>
              <span className="">조회수</span>
              <span className="">8154</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex position-absolute top-0 w-100 p-3 text-white">
          {[Wishheart, BookmarkBt].map((Icon, index) => (
            <div
              key={`icon${index}`}
              className="d-flex align-items-center gap-2"
            >
              <Icon
                ref={(el) => (buttonsRef.current[index] = el)}
                className={`ms-auto w_icon ${index === 0 ? "wishicon" : ""}`}
              />
              {index === 0 && <span className="fw-bold">{heartnumer}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="mw">
        <div className="d-flex gap-3">
          <Tabbtn>#해시태그</Tabbtn>
          <Tabbtn>#해시태그</Tabbtn>
          <Tabbtn>#해시태그</Tabbtn>
        </div>

        <div>
          <h2 className="kr-h2 mb-3">
            밥 한그릇 뚝딱 소불고기 황금 양념 레시피
          </h2>
          <span className="kr-body">
            레시피 한줄 소개 배가 고프고 너무 졸려요
          </span>
        </div>

        <div>
          <div className="container border rounded p-4 d-flex flex-column gap-3 align-items-end">
            <div className="w-100 d-flex justify-content-between align-items-center px-3">
              <div className="d-flex gap-2 align-items-center">
                <div
                  className="rounded-circle bg-light"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundImage: "url('https://via.placeholder.com/48')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div>
                  <h6 className="mb-1 fw-semibold">오늘뭐먹지</h6>
                  <p className="mb-0 text-body-secondary">
                    한줄 자기소개 자기소개 한줄
                  </p>
                </div>
              </div>
              <button className="btn btn-success rounded-pill px-3">
                팔로우
              </button>
            </div>
            <div className="bg-light p-3 rounded d-flex justify-content-between align-items-center w-100">
              <div className="d-flex gap-2 align-items-center">
                <RecipeTime></RecipeTime>
                <p className="mb-0">20분 소요</p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <RecipePerson></RecipePerson>
                <p className="mb-0">4인분</p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <RateBt></RateBt>
                <p className="mb-0">초급</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
