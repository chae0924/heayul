import React from 'react'
import SwiperBanner from '../components/common/SwiperBanner'
import ProductList from './ProductList'
export default function Home() {
  return (
    <div className=''>
      <SwiperBanner></SwiperBanner>
      <ProductList></ProductList>
    </div>
  )
}
