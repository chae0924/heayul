import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Plusbtn } from "../common/_common";
import PaginationSet from "../common/PaginationSet";

import styles from "./EventCard.module.scss";
import productdb from "../../data/product.json";
import ProductItem from "./ProductItem";

export default function SaleItemSet({
  id,
  style,
  ea,
  filterNV,
  to,
  className,
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
    swiperRef.current?.swiper.slideTo((page - 1) * itemsPerPage); // Swiper의 슬라이드 변경
  };

  return (
    <div className={`${className || ""}`} >
      <div className="d-flex position-relative mw py-5 align-items-stretch">
      
        <div className="col-9">
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
              <ProductItem info={product} ct="sale" />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </div>
  );
}
