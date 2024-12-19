import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductItem from '../components/product/ProductItem';
import { Plusbtn, Arrow } from '../components/common/_common';
import { Link } from 'react-router-dom';

import ms from './productlist.module.scss';

const BADGES_MAP = {
  newArrival: { badges: "N", locationtext: "신상품" },
  discount: { badges: "S", locationtext: "할인상품" },
  hot: { badges: "H", locationtext: "인기상품" },
  default: { badges: "P", locationtext: "기획상품" },
};

export default function ProductList({ addToCart, productinfo, naviinfo }) {
  const { catenm, cateid } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const [datainfo, setDatainfo] = useState(null);
  const [sortOption, setSortOption] = useState('추천순'); // 정렬 기준 상태

  const filterProductLocation = async (naviinfo, cateid, catenm, productinfo, query) => {
    if (cateid) {
      const oneDepth = naviinfo.find(
        (subnavi) => String(subnavi.categoryId) === cateid.toString()[0]
      );
      if (!oneDepth) return { oneDepth: null, twoDepth: null, productlist: [] };

      const twoDepth = oneDepth.subcategory.find(
        (item) => String(item.categoryId) === cateid
      );
      if (!twoDepth) return { oneDepth, twoDepth: null, productlist: [] };

      const productlist = productinfo.filter(
        (product) => twoDepth.categoryId.toString() === product.categoryId
      );
      return { oneDepth, twoDepth, productlist };
    } else if (query) {
      // 검색 쿼리가 있는 경우
      const productlist = productinfo.filter((product) =>
        product.name.includes(query)
      );
      console.log("검색 필터링 결과:", productlist);
      return { oneDepth: null, twoDepth: null, productlist };
    } else {
      const oneDepth = naviinfo.find(
        (subnavi) => subnavi.linkto && subnavi.linkto === catenm
      );
      if (oneDepth) {
        const productlist = productinfo.filter(
          (product) => oneDepth.categoryId.toString() === product.categoryId[0]
        );
        return { oneDepth, twoDepth: null, productlist };
      }
      const badgeInfo = BADGES_MAP[catenm] || BADGES_MAP.default;
      const productlist = productinfo.filter(
        (product) =>
          product["badges"].split("|").includes(badgeInfo.badges) &&
          product["badges"] === badgeInfo.badges
      );
      return { oneDepth: null, twoDepth: null, productlist };
    }
  };

  const countBadges = (info) => {
    let badgeCount = 0;
  
    // "NEW" 뱃지 체크
    if (info.badges && info.badges.includes("N")) badgeCount++;
  
    // "SALE" 뱃지 체크
    if (info.badges && info.badges.includes("S")) badgeCount++;
  
    // "쿠폰" 뱃지 체크
    if (info.coupon && info.coupon.trim() !== "" && info.coupon !== '""') badgeCount++;
  
    return badgeCount;
  };
  
  const sortProducts = (productlist, option) => {
    switch (option) {
      case '추천순':
        return productlist; // 기본 순서대로 출력 (DB 순)
  
      case '인기순':
        return [...productlist].sort((a, b) => {
          if (b.rating === a.rating) {
            return b.reviews - a.reviews; // rating이 같으면 reviews가 큰 순으로 정렬
          }
          return b.rating - a.rating; // rating이 높은 순으로 정렬
        });
  
      case '혜택순':
        return [...productlist].sort((a, b) => {
          const badgeCountA = countBadges(a);
          const badgeCountB = countBadges(b);
          return badgeCountB - badgeCountA; // 뱃지 개수 많은 순으로 정렬
        });
  
      case '낮은 가격순':
        return [...productlist].sort((a, b) => {
          const priceA = a.discountPrice || a.originalPrice; // discountPrice가 있으면 사용, 없으면 originalPrice
          const priceB = b.discountPrice || b.originalPrice;
          return priceA - priceB; // 가격 낮은 순
        });
  
      case '높은 가격순':
        return [...productlist].sort((a, b) => {
          const priceA = a.discountPrice || a.originalPrice; // discountPrice가 있으면 사용, 없으면 originalPrice
          const priceB = b.discountPrice || b.originalPrice;
          return priceB - priceA; // 가격 높은 순
        });
  
      default:
        return productlist;
    }
  };
  
  
  useEffect(() => {
    const fetchLocationData = async () => {
      if (productinfo && naviinfo) {
        try {
          const productpagedata = await filterProductLocation(
            naviinfo,
            cateid,
            catenm,
            productinfo,
            query
          );
          const sortedProductlist = sortProducts(productpagedata.productlist, sortOption);
          setDatainfo({ ...productpagedata, productlist: sortedProductlist });
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      }
    };

    fetchLocationData();
  }, [productinfo, naviinfo, catenm, cateid, query, sortOption]); // sortOption이 변경될 때마다 다시 실행


  useEffect(() => {
    setSortOption('추천순');
  }, [catenm, cateid]); 

  
  const handleSortChange = (option) => {
    setSortOption(option); // 선택된 정렬 기준으로 상태 변경
  };

  return (
    <div className="mw px-3 px-xxl-0 mb120">
      <div className={ms.banner}>
      <img src="https://raw.githubusercontent.com/chae0924/heayul/2ba2d44cdd4b8d409e689deac1f3fb3e82863552/productlist_banner_1.jpg" alt="레시피 이벤트 배너" />
      <img src="https://raw.githubusercontent.com/chae0924/heayul/2668f40b617df2520f531dc59a8bacfaed5d989d/productlist_banner_2.jpg" alt="블랙프라이데이 배너" />
      <img src="https://raw.githubusercontent.com/chae0924/heayul/7fa55ab40ca426ec73a8ec4497c86a200f643ef0/productlist_banner_3.jpg" alt="정기배송 배너" />
      </div>

      {query ? (
        <div className='text-center my-4'>
          <p className='kr-h3'>
            "<span className='text-labeln'>{query}</span>" 에 대한 검색 결과
          </p>
        </div>
      ) : (
        <>
          {datainfo && (
            <div className="location d-flex justify-content-end pt-3 pb-4 align-items-center">
              <span>
                <Link to="/"> 
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='me-1'>
                    <path d="M5.66666 10.6666V7.33331H8.33333V10.6666C8.33333 11.0333 8.63333 11.3333 9 11.3333H11C11.3667 11.3333 11.6667 11.0333 11.6667 10.6666V5.99998H12.8C13.1067 5.99998 13.2533 5.61998 13.02 5.41998L7.44666 0.39998C7.19333 0.173314 6.80666 0.173314 6.55333 0.39998L0.979997 5.41998C0.75333 5.61998 0.89333 5.99998 1.2 5.99998H2.33333V10.6666C2.33333 11.0333 2.63333 11.3333 3 11.3333H5C5.36666 11.3333 5.66666 11.0333 5.66666 10.6666Z" fill="#555555"/>
                  </svg>
                  홈
                </Link>
              </span>
              <span className="mx-2">
                <Arrow icon="gray" />
              </span>
              {datainfo.oneDepth && (
                <span>
                  <Link to={`/product/${datainfo.oneDepth.linkto}`}>
                    {datainfo.oneDepth.name}
                  </Link>
                </span>
              )}
              {BADGES_MAP[catenm] && (
                <span>{BADGES_MAP[catenm]?.locationtext}</span>
              )}
              {cateid && datainfo.twoDepth && (
                <>
                  <span className="mx-2">
                    <Arrow icon="gray" />
                  </span>
                  <span>
                    <Link
                      to={`/product/${datainfo.twoDepth.linkto}/${datainfo.twoDepth.categoryId}`}
                    >
                      {datainfo.twoDepth.name}
                    </Link>
                  </span>
                </>
              )}
            </div>
          )}
        </>
      )}

      {query && datainfo?.productlist?.length === 0 && (
        <div className="text-center py-5">
          <p>
            <strong>"{query}"</strong>에 대한 검색 결과가 없습니다.
          </p>
          <p>다른 검색어를 입력해 주세요.</p>
        </div>
      )}

{datainfo?.productlist?.length > 0 && (
  <>

      <span className='d-flex justify-content-center kr-h2 mt-1 mb-5 pb-2'>
        {datainfo && cateid && datainfo.twoDepth ? (
          <span>
            <Link to={`/product/${datainfo.twoDepth.linkto}/${datainfo.twoDepth.categoryId}`}>
              {datainfo.twoDepth.name}
            </Link>
          </span>
        ) : datainfo && datainfo.oneDepth ? (
          <span>
            <Link to={`/product/${datainfo.oneDepth.linkto}`}>
              {datainfo.oneDepth.name}
            </Link>
          </span>
        ) : BADGES_MAP[catenm] ? (
          <span>{BADGES_MAP[catenm]?.locationtext}</span>
        ) : null}
      </span>

      <div className="d-flex justify-content-between pb-3 kr-body fw-500 flex-wrap gap-3">
  <span>총 {datainfo?.productlist?.length || 0} 개</span>
  <ul className={`${ms.filter} d-flex kr-body fw-300 justify-content-end`}>
    <li
      className={`pe-2 afterbar position-relative ${sortOption === '추천순' ? 'fw-500' : ''}`}
      onClick={() => handleSortChange('추천순')}
    >
      추천순
    </li>
    <li
      className={`px-2 afterbar position-relative ${sortOption === '인기순' ? 'fw-500' : ''}`}
      onClick={() => handleSortChange('인기순')}
    >
      인기순
    </li>
    <li
      className={`px-2 afterbar position-relative ${sortOption === '혜택순' ? 'fw-500' : ''}`}
      onClick={() => handleSortChange('혜택순')}
    >
      혜택순
    </li>
    <li
      className={`px-2 afterbar position-relative ${sortOption === '낮은 가격순' ? 'fw-500' : ''}`}
      onClick={() => handleSortChange('낮은 가격순')}
    >
      낮은 가격순
    </li>
    <li
      className={`ps-2 ${sortOption === '높은 가격순' ? 'fw-500' : ''}`}
      onClick={() => handleSortChange('높은 가격순')}
    >
      높은 가격순
    </li>
  </ul>
</div>
</>
)}


      <ul className={`${ms.productGrid} px-0 pb-5`}>
        {datainfo &&
          datainfo.productlist.map((v, i) => (
            <li key={`prd_item${i}`}>
              <ProductItem
                info={v}
                rateview="show"
                addToCart={addToCart}
              ></ProductItem>
            </li>
          ))}
      </ul>

      <div className="d-flex justify-content-center">
        <Plusbtn icon="plus">더보기</Plusbtn>
      </div>
    </div>
  );
}
