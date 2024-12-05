import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LabelC } from '../common/util/_icon'
import { Deleteicon } from '../common/_common'

export default function CartList({v, i}) {
  useEffect(()=>{
    console.log("나 장바구니 리스트"+v.productId, typeof v.productId)
  }, [])
  return (
    <div className='d-flex  p-3 position-relative'>
                        <input type="checkbox" id={`cartnum${i}`} className='d-none' />
                        <LabelC htmlFor={`cartnum${i}`} size={[20, 20]}  ></LabelC>                        
                        <div className=''>
                          <div>
                          { v && v.productId && ( 
                             <Link to={`/detail/101`}>
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
                          {/* { v && v.productId && (
                            <Link to={`/detail/${v.productId}`}> */}
                            <img src={v.image_url} alt={v.image_alt} className='img-fluid rounded-4' style={{width : '80px', height: "80px"}}></img>
                            {/* </Link>
                          )} */}
                            <div className='d-flex flex-wrap'>
                              <p>
                              { Number(v.discountPrice) > 0 ?  v.discountPrice : v.originalPrice }<span>원</span>
                              </p>
                             
                              { Number(v.discountPrice) > 0 &&  ( <p>{v.originalPrice}<span>원</span></p>)  }
                              
                              <div className='w-100'>
                              { v.quantity }
                              </div>
                             
                            </div>
                          </div>
                        </div> 
                        <Deleteicon icon="gray" className='position-absolute end-0 top-0' ></Deleteicon>                       
                     </div>
  )
}
