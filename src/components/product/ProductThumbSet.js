import React from 'react';
import { Plusbtn } from '../common/_common';
import productdb from '../../data/product.json';

import ProductItem from './ProductItem';

export default function ProductThumbSet({ id, style, ea, filterNV, to, rateview }) {
  
  const listea = ea || 4; // 노출 전체 개수 (기본값 4)
  const filternm = filterNV ? filterNV.split("|")[0] : null; // 필터 이름
  const filtervalue = filterNV ? filterNV.split("|")[1] : null; // 필터 값

  // 상품 데이터 필터링
  const productset = productdb.filter((item) => {
    if (!filternm || !filtervalue) return true; // 필터가 없으면 전체 출력
    return item[filternm]?.toString().includes(filtervalue); // 필터 조건 확인
  });

  // 리스트 제한
  const limitedProducts = productset.slice(0, listea);

  return (
    <div id={id} className="productThumbSet mw">
      <h2 className="kr_h2 mb26">새로운 상품이 왔어요!</h2>
      <div className="productThumb">
        <ul className='d-flex flex-wrap'>
          {
                limitedProducts.map((product) => (
                  <li key={product.productId} className={`${style} product-item`}>
                    <ProductItem info={product}  ></ProductItem>
                  </li>
                ))
          }
        </ul>
      </div>
      <div className="d-flex justify-content-center mt32">
        <Plusbtn icon="arrow" to={to}>더보기</Plusbtn>
      </div>
    </div>
  );


}

ProductThumbSet.defaultProps = {
  rateview: true, // 명시되지 않은 경우 기본값
};


