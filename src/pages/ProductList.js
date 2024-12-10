import React, { useEffect, useState  } from 'react'
import { useParams, useSearchParams  } from 'react-router-dom'
import ProductItem from '../components/product/ProductItem'
import { Plusbtn, Arrow } from '../components/common/_common'
import {Link} from 'react-router-dom'

import ms from './productlist.module.scss'

export default function ProductList({addToCart, productinfo, naviinfo }) {

  // 주소창에서 필요한 데이터 추출 필터링 기준 1, 2
  const { catenm , cateid  } = useParams(); // 대분류와 소분류를 차이는 cateid 유무
  // 필러링기준 3
  const [isCatenmFound, setisCatenmFound] =useState();

  //검색
  const [searchParams] = useSearchParams(); // Search query from URL
  const query = searchParams.get('query') || ''; // Extract 'query' parameter from URL


  
  //상품필터링
  const [datainfo, setDatainfo] = useState(null);

  //상품필터링 비동기함수
  //대분류/소분류, 신상, 할인
  const filterProductLocation = async (naviinfo, cateid, catenm, productinfo) => {
    if (cateid) {
        // 소분류
        for (const subnavi of naviinfo) {
            if (String(subnavi.categoryId) === cateid.toString()[0]) {
                console.log(cateid, "첫자리를 이요해서 대분류부터 찾아내었음");

                const twoDepth = subnavi.subcategory.find(
                    (item) => String(item.categoryId) === cateid
                );

                if (!twoDepth) {
                    console.log("cateid에 해당하는 소분류가 없습니다.");
                    return { oneDepth: subnavi, twoDepth: null, productlist: [] };
                }

                const productlist = productinfo.filter(
                    (product) => twoDepth.categoryId.toString() === product.categoryId
                ); // 세자리 모두 비교해서 같은 것만, 즉 소분류 상품만 색출

                return { oneDepth: subnavi, twoDepth, productlist };
            }
        }

        console.log("이 글이 보인다면 라우터에 cateid가 존재하나 상품db에서 소분류가 없는 것으로 둘중 하나 수정할것");

        return { oneDepth: null, twoDepth: null, productlist: [] };

    } else {
        // cateid가 없는 경우 처리
        let isCatenmFound = false;

        for (const subnavi of naviinfo) {
            if (subnavi.linkto && subnavi.linkto === catenm) {
                // catenm이 subnavi.linkto에서 발견됨
                console.log(subnavi.linkto, "카테고리 필터링 진행");

                const productlist = productinfo.filter(
                    (product) => subnavi.categoryId.toString() === product.categoryId[0]
                );

                isCatenmFound = true; // 대분류라서 최종선택인 벳지로 출력여부 판단변수
                return { oneDepth: subnavi, twoDepth: null, productlist };
            }
        }

        if (!isCatenmFound) {
            // catenm이 subnavi.linkto에서 발견되지 않음 -> badges로 처리
            console.log(catenm, "카테고리 없음, badges로 필터링 진행");


            let badges ;
            switch (catenm) {
                case "newArrival":
                    badges = "N";
                    break;
                case "discount":
                    badges = "S";
                    break;
                case "hot":
                    badges = "H";
                    break;
                default:
                    badges = "P";
            }

            const productlist = productinfo.filter(
                (product) =>
                    product["badges"].split('|').includes(badges) &&
                    product["badges"] === badges
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
            productinfo
          );
          console.log("카테고리 변경시 꼭 확인해 보세요. 공부삼아",productpagedata); 

          setDatainfo(productpagedata);

        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      }
    };  

    fetchLocationData(); // 비동기 함수 호출

    console.log( "추출된 위치", datainfo,  "소분류일때만 ", cateid)

  }, [productinfo, naviinfo, catenm, cateid]);
  

  return (
    <div className="mw">

     
      { datainfo  && 
                <div className="location d-flex justify-content-end py-4 align-items-center">
                 
                  <span><Link to='/'>
                        홈
                  </Link></span>
                 
                  <span className="mx-2">
                    <Arrow icon="gray"></Arrow>
                  </span>
                 { datainfo.oneDepth && 
                  <span>
                    <Link to={`/product/${datainfo.oneDepth.linkto}`}>
                    {  datainfo.oneDepth.name  }
                    </Link>
                  </span>
                  }
                  { catenm === "hot" && 
                  <span>
                   인기상품
                  </span>
                  }
                   { catenm === "newArrival" && 
                  <span>
                   신상품
                  </span>
                  }
                   { catenm === "discount" && 
                  <span>
                   할인상품
                  </span>
                  }
                  {
                    cateid && datainfo.twoDepth && <>
                          <span className="mx-2">
                            <Arrow icon="gray"></Arrow>
                          </span>
                          <span>
                              <Link to={`/product/${datainfo.twoDepth.linkto}/${datainfo.twoDepth.categoryId}`}>
                            {  datainfo.twoDepth.name  }
                            </Link>
                          </span>
                    </>
                    
                  }              
                </div>
          } 
      
    <ul className='d-flex flex-wrap gap-3'>      
          {
           datainfo &&  datainfo.productlist.map(( v, i)=> <li className='' key={`prd_item${i}`}>
              <ProductItem info={ v } rateview="show" addToCart={addToCart}></ProductItem>
             </li>)
          }      
    </ul>
    
          {/* {
productsList && productsList.length > 0 ? <div>
     <h2>{query}로 검색하신 결과입니다.</h2>
        <ul className='d-flex flex-wrap gap-3'>
            { productsList.map(( v, i)=> <li className='' key={`prd_item${i}`}>
          <ProductItem info={ v } rateview="show" addToCart={addToCart}></ProductItem>
          </li>) }
        </ul>
        </div> 
        : <div> <h2>{query}로 검색하신 결과가 없습니다.</h2></div> } */}
     
       
    <div className='d-flex justify-content-center'>
          <Plusbtn icon="plus2"><span>더보기</span></Plusbtn>
          <Plusbtn icon="plus">더보기</Plusbtn>
        </div>
    </div>

  )

}
