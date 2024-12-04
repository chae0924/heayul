import React, { useState } from "react";

import productdb from "../../data/product.json";
import ProductItem from "./ProductItem";

import { Plusbtn } from "../common/_common";

export default function EventitemSet({
  id,
  style,
  ea,
  filterNV,
  to,
  className,
  addToCart,
  couponFilter,
}) {
  const [itemsToShow, setItemsToShow] = useState(4);
  const itemsPerPage = 4;

  const groupedProducts = productdb.reduce((acc, product) => {
    if (!product.coupon || product.coupon !== couponFilter) return acc; // 필터 값과 일치하지 않는 쿠폰 제외
    if (!acc[product.coupon]) {
      acc[product.coupon] = []; // 새로운 쿠폰 그룹 생성
    }
    acc[product.coupon].push(product); // 상품을 쿠폰 그룹에 추가
    return acc;
  }, {});

  const handleLoadMore = () => {
    setItemsToShow((prevCount) => prevCount + itemsPerPage); 
  };
  

  return (
    <div className={`${className || ""}`} id={id}>
      <ul className="">
        {Object.entries(groupedProducts).map(([coupon, products]) => (
          <div key={coupon} className="event-group d-flex flex-wrap gap-3">
            
            {products.slice(0, itemsToShow).map((product) => (
              <li
                key={product.productId}
                className={'product-item'}
              >
                <ProductItem
                  key={product.productId}
                  info={product} 
                  ct="org"
                  addToCart={addToCart}
                />
              </li>
            ))}
          </div>
        ))}
      </ul>

      <div className="d-flex justify-content-center mt32">
        {itemsToShow < productdb.length && (
          <Plusbtn icon="arrow" to={to} onClick={handleLoadMore}>
            더보기
          </Plusbtn>
        )}
      </div>
    </div>
  );
}
