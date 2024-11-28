import React, { useEffect, useRef, useState } from "react";
import { Wishheart, BookmarkBt } from "../common/util/_icon";

import "./RecipeBanner.module.scss";

const RecipeBanner = () => {
  const buttonsRef = useRef([]);
  const [heartnumer, setHNum] = useState(1512);

  useEffect(() => {

    const toggleClass = (event) => {
      const button = event.currentTarget;
      button.classList.toggle("active"); // 클래스 토글
      console.log("Toggled classList:", button.classList);

      if (button.classList.contains("wishicon")) {
        setHNum((prev) => (button.classList.contains("active") ? prev + 1 : prev - 1));
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
    <div className="position-relative overflow-hidden rounded-3 mw" style={{ height: "400px" }}>
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
      <div className="d-flex flex-column justify-content-end p-4 h-100">
        {/* Recipe Title */}
        <h2 className="fs-4 fw-bold mb-3">오징어 볶음, 향과 맛이 일품! 백종원 오징어 볶음</h2>

        {/* Metadata */}
        <div className="position-absolute bottom-0 start-0 w-100 d-flex justify-content-between align-items-center px-4 py-3 text-white">
          <span className="text-white">오늘은뭐먹지</span>
          <div className="d-flex align-items-center gap-3">
            <span className="text-white">스크랩</span>
            <span className="text-white">1563</span>
            <span className="text-white">·</span>
            <span className="text-white">조회수</span>
            <span className="text-white">8154</span>
          </div>
        </div>

      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-between align-items-center p-3 position-absolute text-white top-0 w-100">
        {[Wishheart, BookmarkBt].map((Icon, index) => (
          <div key={`icon${index}`} className="d-flex align-items-center gap-2">
            <Icon
              ref={(el) => (buttonsRef.current[index] = el)} 
              className={`ms-auto w_icon ${index === 0 ? "wishicon" : ""}`} 
            />
            {index === 0 && <span className="fw-bold">{heartnumer}</span>}
          </div>
        ))}
      </div>

    </div>
  );
};

export default RecipeBanner;
