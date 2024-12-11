import React, { useEffect, useState  } from 'react'
import { useParams, useSearchParams  } from 'react-router-dom'
import ProductItem from '../components/product/ProductItem'
import { Plusbtn, Arrow } from '../components/common/_common'
import {Link} from 'react-router-dom'

import ms from './productlist.module.scss'

const BADGES_MAP = {
  newArrival: { badges: "N", locationtext: "신상품" },
  discount: { badges: "S", locationtext: "할인상품" },
  hot: { badges: "H", locationtext: "인기상품" },
  default: { badges: "P", locationtext: "기획상품" },
};

export default function ProductList({addToCart, productinfo, naviinfo }) {

  // 주소창에서 필요한 데이터 추출 필터링 기준 1, 2
  const { catenm , cateid  } = useParams(); // 대분류와 소분류를 차이는 cateid 유무


  //검색
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || ""; 

  //예시 )  /search?query=손질오징어 

  
  //상품필터링
  const [datainfo, setDatainfo] = useState(null);

  //상품필터링 비동기함수
  //대분류/소분류, 신상, 할인
  const filterProductLocation = async (naviinfo, cateid, catenm, productinfo, query) => {
    if (cateid) {
      // cateid가 있는 경우 -> 소분류 처리
      const oneDepth = naviinfo.find(
        (subnavi) => String(subnavi.categoryId) === cateid.toString()[0]
      );
      if (!oneDepth) {
        console.log("cateid에 해당하는 대분류 없음");
        return { oneDepth: null, twoDepth: null, productlist: [] };
      }
  
      const twoDepth = oneDepth.subcategory.find(
        (item) => String(item.categoryId) === cateid
      );
      if (!twoDepth) {
        console.log("cateid에 해당하는 소분류 없음");
        return { oneDepth, twoDepth: null, productlist: [] };
      }
  
      const productlist = productinfo.filter(
        (product) => twoDepth.categoryId.toString() === product.categoryId
      );
      return { oneDepth, twoDepth, productlist };
    } else {
      // cateid가 없는 경우 -> 검색 query 가 null 이면 대분류 및 badges 처리 
      console.log("대분류는 아님")

      if( query ){
          // 예시 /search?query=손질오징어 -> query값을 필터링으로 받을 product.name임
          // 왜 실행이 안되지????? 쳇 부탁해

            // productinfo의 데이터 구조 확인
            console.log("productinfo 데이터 확인:", productinfo);

            // query를 포함하는 제품 필터링
            const productlist = productinfo.filter((product) =>
              product.name.includes(query)
            );

            console.log("필터링 결과:", productlist);
            return { oneDepth: null, twoDepth: null, productlist };

      }else{
        
        //대분류
          const oneDepth = naviinfo.find(
            (subnavi) => subnavi.linkto && subnavi.linkto === catenm
          );
    
          if (oneDepth) {
            // catenm이 subnavi.linkto에서 발견된 경우
            const productlist = productinfo.filter(
              (product) => oneDepth.categoryId.toString() === product.categoryId[0]
            );
            return { oneDepth, twoDepth: null, productlist };
          }
    
          // catenm이 subnavi.linkto에서 발견되지 않은 경우 -> badges로 필터링
            console.log("catenm이 subnavi.linkto에서 발견되지 않음, badges로 필터링");
          // 기획분류
            const badgeInfo = BADGES_MAP[catenm] || BADGES_MAP.default;
            const productlist = productinfo.filter(
              (product) =>
                product["badges"].split("|").includes(badgeInfo.badges) &&
                product["badges"] === badgeInfo.badges
            );
            return { oneDepth: null, twoDepth: null, productlist };
      }
     
      
    }
  };
  

  useEffect(() => {

    const fetchLocationData = async () => {
      if (productinfo && naviinfo) {
        try {
          const productpagedata = await filterProductLocation(
            naviinfo,
            cateid,
            catenm, // 대분류, 소분류모두존재하는 값
            productinfo,
            query
          );
          console.log("카테고리 변경시 꼭 확인해 보세요. 공부삼아",productpagedata); 

          setDatainfo(productpagedata);

        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      }
    };  

    fetchLocationData(); // 비동기 함수 호출
    console.log("검색을 위한 값확인", query)
    console.log( "추출된 위치", datainfo,  "소분류일때만 ", cateid)

  }, [productinfo, naviinfo, catenm, cateid, query]);

  useEffect(() => {
    //URL에서 올바른 값을 가져오는지 확인하기
    console.log("검색 쿼리 값:", decodeURIComponent(window.location.search));
  }, []);
  
  

  return (
    <div className="mw px-3 px-xxl-0">
       { 
       
       query ?
       <div>
          <h2>검색 결과</h2>
          <p>
            <strong>"{query}"</strong>에 대한 검색 결과를 표시합니다.
          </p>
      </div>
      : <>
      { datainfo && (
        <div className="location d-flex justify-content-end py-4 align-items-center">
          <span>
            <Link to="/">홈</Link>
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
}
     

      
    <ul className='d-flex flex-wrap row'>      
          {
           datainfo &&  datainfo.productlist.map(( v, i)=> <li className='col-3' key={`prd_item${i}`}>
              <ProductItem info={ v } rateview="show" addToCart={addToCart}></ProductItem>
             </li>)
          }      
    </ul>
       
    <div className='d-flex justify-content-center'>
          <Plusbtn icon="plus2"><span>더보기</span></Plusbtn>
          <Plusbtn icon="plus">더보기</Plusbtn>
        </div>
    </div>

  )

}
