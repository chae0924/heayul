import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Plusbtn } from "../common/_common";
import PaginationSet from "../common/PaginationSet";

import styles from "./SaleItemSet.module.scss";
import productdb from "../../data/product.json";
import ProductItem from "./ProductItem";

export default function SaleItemSet({
  id,
  style,
  ea,
  filterNV,
  to,
  className,
  addToCart
}) {
  // 상태 관리
  const [currentPage, setCurrentPage] = useState(1);
  const swiperRef = useRef(null);

  // 상품 데이터 처리
  const productset = productdb.filter(
    (item) => item.badges && item.badges.includes("S")
  );
  const itemsPerPage = 4;
  const maxPages = 5;
  const maxItems = itemsPerPage * maxPages;
  const visibleProducts = productset.slice(0, maxItems);

  // 페이지 이동 핸들러
  const handlePageChange = (page) => {
    setCurrentPage(page);
    swiperRef.current?.swiper.slideTo((page - 1) * itemsPerPage); 
  };

  return (
    <div className={`${className || ""} px-3 px-xxl-0 `} style={style} id={id}>
      <div className={`${styles.container} d-flex row position-relative mw align-items-stretch py-5 py-sm-auto`}>
        <div className="d-flex flex-column justify-content-between align-items-stretch col-12 col-sm-3 py-3 px-0">
          
            <h2 className="kr-h2 d-flex gap-1 w-100 row text-align-left">
              <span>놓치기 아쉬운</span>
              <span className={`${styles.textGreen}`}>할인 상품</span>
            </h2>
            <svg className="vector-5 d-none d-sm-block" width="180" height="1" viewBox="0 0 180 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1L180 1.00002" stroke="#898989" />
            </svg>
            
            <p className="kr-body d-flex w-100 py-2 lh1-5 mb-0">
              가격 인하 상품을
              <br />
              지금 바로 확인해보세요!
            </p>

            <div className='d-none d-sm-flex'>
              <Plusbtn icon="plus2" className={`${styles.plusBtn} my-4`}>더보기</Plusbtn>
            </div>

            {/* 페이지네이션 컴포넌트 */}
            <div className="d-none d-sm-flex">
            <PaginationSet
              totalPages={maxPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
            </div>
        </div>
        
        <div className="col-9 px-0">
        {/* Swiper 컴포넌트 */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={itemsPerPage}
          slidesPerGroup={itemsPerPage}
          // navigation={{ nextEl: null, prevEl: null }}
          loop={true}
          onSlideChange={(swiper) => {
            const newPage = Math.ceil(swiper.activeIndex / itemsPerPage) + 1;
            setCurrentPage(newPage); // 현재 페이지 상태 업데이트
          }}
        >
          {visibleProducts.map((product) => (
            <SwiperSlide key={product.productId}>
              <ProductItem info={product} ct="sale" addToCart={addToCart}  />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div className='d-sm-none px-0'>
              <Plusbtn icon="plus2" className={`${styles.mplusBtn} my-2`}>더보기</Plusbtn>
        </div>
      </div>
    </div>
  );
}
