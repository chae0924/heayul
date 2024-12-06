import React from 'react'
import PartnerList from '../components/etc/PartnerList'


import SwiperBanner from '../components/common/SwiperBanner'
import Svgicon from '../components/util/Svgicon'
import ProductThumbSet from '../components/product/ProductThumbSet'
import BestItemThumb from '../components/product/BestItemThumb'

import SaleItemSet from '../components/product/SaleItemSet'
import RecipeThumbSet from '../components/common/RecipeThumbSet'
import RacipeANDsubscribe from '../components/etc/RacipeANDsubscribe'
import ReviewContents from '../components/etc/ReviewContents'

export default function Home({ addToCart }) {


  return (
    <div className=''>
      <SwiperBanner id="mainSwiper"></SwiperBanner>
      <Svgicon id='mainSvg'></Svgicon> 
      
      {/* 컴포넌트 아이디, 스타일, 상품데이터 필더조건, 더보기의 링크값 */}
      <ProductThumbSet   id="newProduct"   style="" filterNV="badges|N" to="/product/newArrival" className='productThumbSet mw mb160 px-3 px-xl-0'  addToCart={ addToCart } ></ProductThumbSet>
     
    
      
      <div className='' style={{ backgroundColor: '#EDF6F6' }}>
      <SaleItemSet id="mainSaleset" className='SaleItemSet mw mb160'  addToCart={ addToCart }></SaleItemSet>
      </div>

      <BestItemThumb className='BestItemThumb mw mb160 px-3 px-xl-0'></BestItemThumb>

      <RecipeThumbSet className='BestItemThumb mw mb160 px-3 px-xl-0' addToCart={ addToCart }></RecipeThumbSet>
      <RacipeANDsubscribe></RacipeANDsubscribe>
      <ReviewContents></ReviewContents>
      <PartnerList className='px-3 px-xl-0'></PartnerList>
      
    </div>
  )
}
