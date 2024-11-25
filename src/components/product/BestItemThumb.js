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
      <div className="d-flex align-items-center justify-content-between position-relative">
        <h2 className="kr_h2 mb26">지금 가장 많이 구매하는 인기상품🔥</h2>
        <Plusbtn icon="arrow" to={to}>
          더보기
        </Plusbtn>
      </div>

      <div className="d-flex flex-column">
        {/* Main Product */}
        <div className="row">
          <div className="col-6">
            <div className="MainBastItem">
              <div className={bestcard['img-lg']}>
                <img
                  src={BestItemData.BestProduct.image_url}
                  alt="Featured product"
                  className="img-fluid"
                />
              </div>
              <div className="mt-3">
                <h2 className="title-h2">
                  {BestItemData.BestProduct.simple_description}
                </h2>
                <p className="text-base">{BestItemData.BestProduct.simple_description}</p>
              </div>
            </div>
          </div>

          {/* Side Products */}
          <div className="row col-6">
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
                <div className="content-spacing">
                  <h3 className="kr-body">{product.simple_description}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
