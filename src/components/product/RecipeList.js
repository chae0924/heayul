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
    <div className="d-flex flex-column gap-3 align-items-center justify-content-start position-relative" style={{ paddingBottom: "8px" }}>

      <svg className="w-100 rounded" width="590" height="316" viewBox="0 0 590 316" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 8.00001C0 3.58173 3.58172 0 8 0H582C586.418 0 590 3.58172 590 8V158V308C590 312.418 586.418 316 582 316H8.00001C3.58173 316 0 312.418 0 308V8.00001Z"
          fill="#D9D9D9"
        />
      </svg>

      <div className="p-3 w-100">

        <h4 className="kr_h4">
          레시피 제목 이름 레시피 제목 이름
        </h4>

        <div className="d-flex justify-content-between align-items-center">

          <span className="kr-body">닉네임 닉네임</span>

          <div className="d-flex gap-2 align-items-center">
            <span className="kr-body text-muted">스크랩</span>
            <span className="kr-body text-muted">00숫자</span>
            <span className="kr-body text-muted">·</span>
            <span className="kr-body text-muted">조회수</span>
            <span className="kr-body text-muted">00숫자</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RecipeList;