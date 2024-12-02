import React, {useEffect, useRef } from 'react'
import { Wishheart , BookmarkBt, CommentBt , RateBt , Syoutube, Sgit, Sinstar , Skakao,  LabelR, LabelC,  LabelPw , Viewicon, Carticon, Wishicon, Bookicon,Badges  } from '../common/util/_icon'

import salecard from './SaleProduct.module.scss' 

export default function SaleProduct({info ,  addToCart }) {

  const buttonRef = useRef(null);

const discountPrice = Number(info.discountPrice) || 0;
const originalPrice = Number(info.originalPrice);


const handleAddToCart = (e) => {
  addToCart(info, e);  // 장바구니에 상품 추가
};

  useEffect(()=>{
    console.log("SaleItem 상품썸네일정보",info)
    const button = buttonRef?.current; 
    const toggleClass = () => {
      button.classList.toggle("active");
    };
      button.addEventListener("click", toggleClass);
    return () => {
      button.removeEventListener("click", toggleClass);
    };  

  }, [])

  return (
    <div
    className="org position-relative d-inline-block pb-3"
    data-id={info.productId}
  >
    {/* 뱃지 표시 */}
    <div className="position-absolute d-flex oriinner gap-1">
      {info.badges && info.badges.includes('S') && (
        <Badges className="S">SALE</Badges>
      )}
    </div>

    {/* 상품 이미지 */}
    <div className="org-img overflow-hidden position-relative">
      <img
        src={info.image_url}
        alt={info.image_alt}
        className="img-fluid"
      />
      <div className="position-absolute top-0 w-100 h-100 start-0 justify-content-center align-items-center thumbwrap">
        <div className="d-flex justify-content-center align-items-center gap-3">
          <Carticon onClick={handleAddToCart}></Carticon>
          <Viewicon to={`/detail/${info.productId}`}></Viewicon>
        </div>
      </div>
    </div>

    {/* 상품 정보 */}
    <div className="product-info oriinner pt-0 pb-0">
      <h3 className="kr-body org-prdnm">{info.name}</h3>
      <p className="d-none">{info.description}</p>
      <span className="kr-btn org-price me-auto">
          {originalPrice.toLocaleString()}원
        </span>
      <div className="price d-flex justify-content-between gap-1 align-items-end">
        {/* 할인율 표시 */}
        {discountPrice > 0 && (
          <span className="kr-h5 org-current-price text-discount">
            {`${Math.round((discountPrice / originalPrice) * 100)}%`}
          </span>
        )}

        {/* 가격 표시 */}
        <span className="kr-h5 org-current-price">
          {discountPrice > 0
            ? discountPrice.toLocaleString()
            : originalPrice.toLocaleString()}
          원
        </span>


        <Wishheart ref={buttonRef} className={`ms-auto w_icon`} ></Wishheart>
      </div>

    {/* <BookmarkBt></BookmarkBt>
    <CommentBt></CommentBt>
    
    <Syoutube></Syoutube>
    <Sinstar></Sinstar>
    <Skakao></Skakao>
    <Sgit></Sgit>
    <LabelR></LabelR>
    <LabelC></LabelC>
    <LabelPw></LabelPw> 
    
    <Wishicon></Wishicon>
    <Bookicon></Bookicon> */}

    </div>
  </div>


  )
}
