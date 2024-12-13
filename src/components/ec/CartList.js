import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LabelC } from '../common/util/_icon'
import { Deleteicon } from '../common/_common'


import styles from './cartlist.module.scss'

export default function CartList({v, i, cartToCart}) {
  const [quantity, setQuantity] = useState(v.quantity);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  useEffect(()=>{
    console.log("나 장바구니 리스트"+v.productId, typeof v.productId, v)
    cartToCart(()=>{})
  }, [quantity])
  
  return (
    <div className='d-flex  p-3 position-relative'>
                        <input type="checkbox" id={`cartnum${i}`} className='d-none' />
                        <LabelC htmlFor={`cartnum${i}`} size={[20, 20]}  ></LabelC>                        
                        <div className=''>
                          <div>
                          { v && v.productId && ( 
                             <Link to={`/detail/${v.productId}`}>
                                  <span className="mb-1 fs18 fw400 d-block">
                                      {v.name}
                                  </span>
                                  <span className="mb-2 kr-body text-tintdark d-block">
                                      {v.simple_description}
                                  </span>
                              </Link> 
                        )}
                          
                          </div>
                          <div className='d-flex gap-3'>
                          { v && v.productId && (
                            <Link to={`/detail/${v.productId}`}>
                            <img src={v.image_url} alt={v.image_alt} className='img-fluid rounded-4' style={{width : '80px', height: "80px"}}></img>
                            </Link>
                          )}
                            <div className=''>
                              <p className='pricesection d-flex'>
                              <span className='purchase kr-h6'> { Number(v.discountPrice) > 0 ?  v.discountPrice : v.originalPrice }<span className='won'>원</span></span>
                              { Number(v.discountPrice) > 0 &&  ( <span className='org-price text-tint'>{v.originalPrice}<span className='won'>원</span></span>)  }
                              </p>
                    
                              
                              
                              
                              <div className={`${styles.quantityButtons}`}>
                                <button className={styles.btn} onClick={handleDecrement}>-</button>
                                <span className={styles.quantity}> { quantity }</span>
                                <button className={styles.btn} onClick= {handleIncrement}>+</button>
                            </div>
                            </div>
                          </div>
                        </div> 
                        { v && 
                        <Deleteicon icon="gray" className='position-absolute end-0 top-0 mt-3 me-3' onClick={()=>{
                          cartToCart([v], true)
                        }}></Deleteicon>    
                      }                   
                     </div>
  )
}
