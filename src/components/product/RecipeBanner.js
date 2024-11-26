import React, {useEffect, useRef } from 'react'
import { Wishheart , BookmarkBt, CommentBt , RateBt , Syoutube, Sgit, Sinstar , Skakao,  LabelR, LabelC,  LabelPw , Viewicon, Carticon, Wishicon, Bookicon,Badges  } from '../common/util/_icon'

import rcpban from './RecipeBanner.module.scss'

const RecipeBanner = () => {

  const buttonRef = useRef(null);

  const bookRef = useRef(null);

  useEffect(()=>{
    console.log("ProductItem 상품썸네일정보")
    const button = buttonRef?.current; 
    const bookbutton = bookRef?.current; 
    
    const toggleClass = () => {
      button.classList.toggle("active");
    };
      button.addEventListener("click", toggleClass);
    return () => {
      button.removeEventListener("click", toggleClass);
    };  

  }, [])

  return (
    <div className="position-relative bg-dark text-white rounded-3 mw" style={{ height: "400px" }}>
      {/* Gradient Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 rounded-3 bg-gradient" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.2) 100%)" }}>
      </div>

      {/* Content */}
      <div className="d-flex flex-column justify-content-end p-4 h-100">
        {/* Recipe Title */}
        <h2 className="fs-4 fw-bold mb-3">
          레시피 제목 레시피 레시피
        </h2>

        {/* Metadata */}
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center gap-3">
            <span className="text-white">스크랩</span>
            <span className="text-white">00숫자</span>
            <span className="text-white">·</span>
            <span className="text-white">조회수</span>
            <span className="text-white">00숫자</span>
          </div>
          <span className="text-white">닉네임닉네임</span>
        </div>
      </div>

      {/* Buttons */}
        <div className="frame-4 d-flex justify-content-between align-items-center p-3 position-absolute top-0 w-100">
            <div className="d-flex align-items-center gap-2">
              <Wishheart ref={buttonRef} className={`ms-auto w_icon`} ></Wishheart>
                <span className="fw-bold">1,115</span>
            </div>
            <BookmarkBt ref={bookRef} className={`ms-auto w_icon`}></BookmarkBt>
        </div>
    </div>

  );
};

export default RecipeBanner;