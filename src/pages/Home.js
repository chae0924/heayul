import React from 'react'
import PartnerList from '../components/etc/PartnerList'


import SwiperBanner from '../components/common/SwiperBanner'
import Svgicon from '../components/util/Svgicon'
import ProductThumbSet from '../components/product/ProductThumbSet'
import BestItemThumb from '../components/product/BestItemThumb'
import RecipeThumbSet from '../components/common/RecipeThumbSet'
import RacipeANDsubscribe from '../components/etc/RacipeANDsubscribe'

export default function Home({ addToCart }) {



  return (
    <div className=''>
      <SwiperBanner id="mainSwiper"></SwiperBanner>
      <Svgicon id='mainSvg'></Svgicon> 
      
      {/* 컴포넌트 아이디, 스타일, 상품데이터 필더조건, 더보기의 링크값ㅋ */}
      <ProductThumbSet   id="newProduct"   style="" filterNV="badges|N" to="/product/newArrival" className='productThumbSet mw mb160'  addToCart={ addToCart } ></ProductThumbSet>
      
      <BestItemThumb className='BestItemThumb mw mb160'></BestItemThumb>

    <RecipeThumbSet className='BestItemThumb mw mb160'></RecipeThumbSet>
      <RacipeANDsubscribe></RacipeANDsubscribe>

      <PartnerList></PartnerList>
      
    </div>
  )
}
