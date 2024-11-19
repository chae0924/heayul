import React, {useEffect} from 'react'
import prditem from './ProductItem.module.scss' 

export default function ProductItem({info}) {
  useEffect(()=>{
    console.log(info)
  }, [])
  return (
    <div>

              <img src={info.images[0].url} alt={info.images[0].alt} className='img-fluid' />
              <div className="product-info">
                <h3>{info.name}</h3>
                <p>{info.description}</p>
                <div className="price">
                  <span className="original">{info.originalPrice.toLocaleString()}원</span>
                  <span className="discount">{info.discountPrice.toLocaleString()}원</span>
                </div>
              </div>
    </div>
  )
}
