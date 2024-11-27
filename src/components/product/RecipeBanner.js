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
    <div className="position-relative bg-dark text-white rounded-3 mw" style={{ height: "400px" }}>
      <div
        className="position-absolute top-0 start-0 w-100 h-100 rounded-3 bg-gradient"
        style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.2) 100%)" }}
      ></div>

      {/* Content */}
      <div className="d-flex flex-column justify-content-end p-4 h-100">
        {/* Recipe Title */}
        <h2 className="fs-4 fw-bold mb-3">레시피 제목 레시피 레시피</h2>

        {/* Metadata */}
        <div className="d-flex justify-content-between align-items-center w-100">
          <span className="text-white">닉네임닉네임</span>
          <div className="d-flex align-items-center gap-3">
            <span className="text-white">스크랩</span>
            <span className="text-white">00숫자</span>
            <span className="text-white">·</span>
            <span className="text-white">조회수</span>
            <span className="text-white">00숫자</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="frame-4 d-flex justify-content-between align-items-center p-3 position-absolute top-0 w-100">
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
