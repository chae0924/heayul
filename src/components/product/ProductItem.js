import React, {useEffect} from 'react'
import prditem from './ProductItem.module.scss' 

export default function ProductItem({info}) {
  useEffect(()=>{
    console.log(info)
  }, [])
  return (
    <div>
       <div>
        <img src={info.images["url"]} alt={info.images["alt"]} />
       </div>
      <h2>{info.name}</h2>
      <h3>{info.discountPrice}<span className='won'>원</span></h3>
      <p>{info.originalPrice}<span className='won'>원</span></p>
     
    </div>
  )
}
