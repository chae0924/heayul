import React, { useEffect } from 'react'
import { useParams, useSearchParams  } from 'react-router-dom'
import ProductItem from '../components/product/ProductItem'
import { Plusbtn } from '../components/common/_common'

import productdb from '../data/product.json'

import ms from './productlist.module.scss'

export default function ProductList({addToCart }) {

  // 주소창에서 필요한 데이터 추출
  const { catenm , cateid } = useParams();
  const [searchParams] = useSearchParams(); // Search query from URL
  const query = searchParams.get('query') || ''; // Extract 'query' parameter from URL
  

  // cateid 있다면 상품목록이고 없다면 검색라우터로서의 역활임
  const filteredProducts = productdb.filter(item => item.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(()=>{
    console.log(filteredProducts)
  }, [])

  return (
    <div className="mw">
      <div className="location d-flex justify-content-end py-3">
          <span>Home</span> 
          <span>{ catenm ? `${catenm }` : ''} </span>
      </div>
      
    <ul className='d-flex flex-wrap gap-3'>      
          {
             productdb.filter((item)=>item.categoryId.toString() === cateid ).map(( v, i)=> <li className='' key={`prd_item${i}`}>
              <ProductItem info={ v } rateview="show" addToCart={addToCart}></ProductItem>
             </li>)
          }      
    </ul>
    
          {
filteredProducts.length > 0 ? <div>
     <h2>{query}로 검색하신 결과입니다.</h2>
        <ul className='d-flex flex-wrap gap-3'>
            { filteredProducts.map(( v, i)=> <li className='' key={`prd_item${i}`}>
          <ProductItem info={ v } rateview="show" addToCart={addToCart}></ProductItem>
          </li>) }
        </ul>
        </div> 
        : <div> <h2>{query}로 검색하신 결과가 없습니다.</h2></div> }
     
       
    <div className='d-flex justify-content-center'>
          <Plusbtn icon="plus2"><span>더보기</span></Plusbtn>
          <Plusbtn icon="plus">더보기</Plusbtn>
        </div>
    </div>

  )
}
