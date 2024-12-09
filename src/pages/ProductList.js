import React, { useEffect, useState  } from 'react'
import { useParams, useSearchParams  } from 'react-router-dom'
import ProductItem from '../components/product/ProductItem'
import { Plusbtn, Arrow } from '../components/common/_common'
import {Link} from 'react-router-dom'

import ms from './productlist.module.scss'

export default function ProductList({addToCart, productinfo, naviinfo }) {

  // 주소창에서 필요한 데이터 추출
  const { catenm , cateid  } = useParams(); // 대분류와 소분류를 차이는 cateid 유무

  //검색
  const [searchParams] = useSearchParams(); // Search query from URL
  const query = searchParams.get('query') || ''; // Extract 'query' parameter from URL


  //주소
  const [datainfo, setDatainfo] = useState(null);




  const filterProductLocation = async (naviinfo, cateid, catenm, productinfo) => {
    for (const subnavi of naviinfo) {
      if (subnavi.linkto === catenm) {
        console.log(subnavi.linkto, "대분류임");
       
  
        if (!cateid) {
          // 대분류 처리: cateid가 없으면 twoDepth는 null
          const productlist = productinfo.filter((product)=> subnavi.categoryId.toString() === product.categoryId[0])
  
          return { oneDepth: subnavi, twoDepth: null, productlist : productlist };
        }
      }

      if(cateid){
        // 소분류 처리: cateid가 있을 경우
       if (String(subnavi.categoryId) === cateid.toString()[0]) {
          console.log(cateid, "소분류임");
  
          const twoDepth = subnavi.subcategory.find(
            (item) => String(item.categoryId) === cateid
          );
          const productlist = productinfo.filter((product)=> twoDepth.categoryId.toString() === product.categoryId)
  
          return { oneDepth: subnavi, twoDepth, productlist   }; // 조건에 맞는 결과 반환
        }
      }
    
    }
    return null; // 조건에 맞는 항목이 없을 경우 null 반환
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
                  
                  <span>
                    <Link to={`/product/${datainfo.oneDepth.linkto}`}>
                    {  datainfo.oneDepth.name  }
                    </Link>
                  </span>
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
