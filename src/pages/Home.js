import React from 'react'


import SwiperBanner from '../components/common/SwiperBanner'
import Svgicon from '../components/util/Svgicon'
import ProductList from './ProductList'

export default function Home() {



  return (
    <div className=''>
      <SwiperBanner id="mainSwiper"></SwiperBanner>
      <Svgicon id='mainSvg'></Svgicon> 
      <ProductList></ProductList>
    </div>
  )
}
