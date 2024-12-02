import React from "react";
import { Plusbtn } from "../common/_common";
import bestitemdb from "../../data/best.json";
import bestcard from './BestItemThumb.module.scss'

export default function ProductThumbSet({ id, style, ea, filterNV, to, className, addToCart, rateview }) {

  const listea = ea || 4; // 노출 전체 개수 (기본값 4)
  const filternm = filterNV ? filterNV.split("|")[0] : null; // 필터 이름
  const filtervalue = filterNV ? filterNV.split("|")[1] : null; // 필터 값

  const productset = bestitemdb.filter((item) => {
    if (!filternm || !filtervalue) return true; // 필터가 없으면 전체 출력
    return item[filternm]?.toString().includes(filtervalue); // 필터 조건 확인
  });

  const limitedProducts = productset.slice(0, listea);

  const BestItemData = {
    BestProduct: bestitemdb[0], 
    sideProducts: bestitemdb.slice(1, 5), 
  };

  return (
    <div id={id} className={className}>
      <div className="d-flex align-items-top justify-content-between position-relative">
        <h2 className="kr_h2 mb26">지금 가장 많이 구매하는 인기상품<span className="emoji kr_h3">🔥</span></h2>
        <Plusbtn icon="arrow" to={to}>
          더보기
        </Plusbtn>
      </div>

      <div>
        {/* Main Product */}
        <div className="d-flex flex-wrap">
          <div className="col-6">
            <div className="d-flex flex-wrap">
              <div className={bestcard['img-lg']}>
                <img
                  src={BestItemData.BestProduct.image_url}
                  alt="Featured product"
                  className="img-fluid"
                />
              </div>
              <div className='content-spacing'>
                <div className='text-overflow'>
                  <h2 className="kr_h4 pt-2 pb-2">
                  {BestItemData.BestProduct.simple_description}
                  </h2>
                </div>
                <p className="kr-body">{BestItemData.BestProduct.name}</p>
              </div>
            </div>
          </div>

          {/* Side Products */}
          <div className="d-flex flex-wrap col-6">
            {BestItemData.sideProducts.map((product, index) => (
              <div key={index} className="col-6">
                <div className={bestcard['img-sm']}>
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={`Product ${index + 1}`}
                      className="img-fluid"
                    />
                  ) : (
                    <div className="placeholder"></div>
                  )}
                </div>
                <div className='content-spacing text-overflow'>
                  <h3 className="kr-body pt-2 mx-3">{product.simple_description}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
