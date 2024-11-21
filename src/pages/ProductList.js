import React from 'react'
import { useParams } from 'react-router-dom'
import ProductItem from '../components/product/ProductItem'
import { Plusbtn } from '../components/common/_common'

import productdb from '../data/product.json'


import ms from './productlist.module.scss'

export default function ProductList() {
  const { catenm , cateid } = useParams();
  


  return (
    <div className="mw">
      <div className="location d-flex justify-content-end py-3">
          <span>Home</span> 
          <span>{ catenm ? `${catenm }` : ''} </span>
      </div>
    <ul className='d-flex flex-wrap gap-3'>      
          {
             productdb.filter((item)=>item.categoryId.toString() === cateid ).map(( v, i)=> <li className='' key={`prd_item${i}`}>
              <ProductItem info={ v } rateview="show"></ProductItem>
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
