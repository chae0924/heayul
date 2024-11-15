import React from 'react'
import ProductItem from '../components/product/ProductItem'
import { Plusbtn } from '../components/common/_common'

import ms from './productlist.module.scss'

export default function ProductList() {
  return (
    <div className="container">
    <ul className='row'>      
          {
             [1,2,3,4,5,6].map(( v, i)=> <li className='col-4'>
              <ProductItem></ProductItem>
             </li>)

          }
        <div className='d-flex justify-content-center'>
          <Plusbtn icon="plus2"><span>더보기</span></Plusbtn>
          <Plusbtn icon="plus">더보기</Plusbtn>
        </div>
    </ul>
    </div>

  )
}
