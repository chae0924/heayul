import React from 'react'
import PartnerList from '../components/etc/PartnerList'


import SwiperBanner from '../components/common/SwiperBanner'
import Svgicon from '../components/util/Svgicon'
import ProductThumbSet from '../components/product/ProductThumbSet'
import BestItemThumb from '../components/product/BestItemThumb'

import RecipeBanner from '../components/product/RecipeBanner';

export default function Home({ addToCart }) {



  return (
    <div className=''>
      <SwiperBanner id="mainSwiper"></SwiperBanner>
      <Svgicon id='mainSvg'></Svgicon> 
      
      {/* 컴포넌트 아이디, 스타일, 상품데이터 필더조건, 더보기의 링크값 */}
      <ProductThumbSet   id="newProduct"   style="col-6 col-lg-3" filterNV="badges|N" to="/product/newArrival" className='productThumbSet mw mb160'  addToCart={ addToCart } ></ProductThumbSet>
      
      <BestItemThumb className='BestItemThumb mw mb160'></BestItemThumb>
      <RecipeBanner className='RecipeBanner mw mb160'></RecipeBanner>

      <PartnerList></PartnerList>
    </div>
  )
}
