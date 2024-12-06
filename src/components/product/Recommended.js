import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Plusbtn, Tabbtn } from "../common/_common";
import PaginationSet from "../common/PaginationSet";

import styles from "./Recommended.module.scss";
import productdb from "../../data/product.json";
import ProductItem from "./ProductItem";

export default function RecommendedSet({
  id, style, ea, filterNV, to, className, addToCart,
}) {
  // 상태 관리
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDimVisible, setIsDimVisible] = useState(true);
  const swiperRef = useRef(null);

  // 카테고리 매핑 (categoryId -> 대체 텍스트)
  const categoryMap = {
    101: "밀키트",
    102: "샌드위치 샐러드",
    103: "시리얼",
    104: "도시락",
  };

  // 상품 데이터 처리
  const productset = productdb;

  // 카테고리 필터 적용
  const filteredProducts = selectedCategory
    ? productset.filter((item) => item.categoryId === selectedCategory)
    : productset;

    const itemsPerPage = 4;
    const maxPages = 2;
    const maxItems = itemsPerPage * maxPages;

    const visibleProducts = filteredProducts.slice(0, maxItems);

  // 페이지 이동 핸들러
  const handlePageChange = (page) => {
    setCurrentPage(page);
    swiperRef.current?.swiper.slideTo((page - 1) * itemsPerPage);
  };

  // 카테고리 필터 핸들러
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    swiperRef.current?.swiper.slideTo(0);
  };

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const updatePagination = () => {
      const newPage = Math.ceil(swiper.activeIndex / itemsPerPage) + 1;
      setCurrentPage(newPage);
    };

    swiper.on("slideChange", updatePagination);
    return () => {
      swiper.off("slideChange", updatePagination);
    };
  }, [itemsPerPage]);

  return (
    <div className={`${className || ""}`} style={style} id={id}>
      <div className='position-relative mw py-5'>
              {/* 딤처리 레이어 */}
      {isDimVisible && (
        <div
          className={styles.dimLayer}
          onClick={() => setIsDimVisible(false)}
        >
          <div className="text-center">
            <h4 className="kr-h4 mb-3" style={{ lineHeight: "1.3" }}>
            나만을 위한 맞춤 상품을<br />보고싶다면?
            </h4>
            <p className="kr-body">로그인 후 AI 맞춤 상품을 볼 수 있어요 !</p>

          </div>

        </div>
      )}
        <div className="d-flex flex-column justify-content-between py-3">
          <h2 className="kr-h2 d-flex gap-1 w-100 row text-center">
            <span>( 안유진 )님을 위한 추천 상품</span>
          </h2>

          {/* 카테고리 선택 버튼 */}
          <div className="d-flex align-items-center justify-content-center gap-3 py-3 mt26">
            {Object.entries(categoryMap).map(([categoryId, categoryName]) => (
              <Tabbtn
                key={categoryId}
                onClick={() => handleCategoryClick(categoryId)}
                className={selectedCategory === categoryId ? "active" : ""}
              >
                {categoryName}
              </Tabbtn>
            ))}
          </div>

          {/* 상품 리스트 */}
          <div className="">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={itemsPerPage}
              slidesPerGroup={itemsPerPage}
              loop={true}
              >
              {visibleProducts.map((product) => (
                <SwiperSlide key={product.productId}>
                  <ProductItem info={product} ct="sale" addToCart={addToCart} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 페이지네이션 컴포넌트 */}
          <div className="d-flex mt26 justify-content-center">
            <PaginationSet
              totalPages={maxPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              variant="dots"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
