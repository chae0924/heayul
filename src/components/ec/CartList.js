import React from 'react'
import {LabelC} from '../common/util/_icon'
import { Arrow } from '../common/_common'

export default function CartList({v, i}) {
  return (
    <div className='d-flex  p-3 position-relative'>
                        <input type="checkbox" id={`cartnum${i}`} className='d-none' />
                        <LabelC htmlFor={`cartnum${i}`} size={[20, 20]}  ></LabelC>                        
                        <div className=''>
                          <div>
                             <p className='mb-1 fs18 fw400'>
                                {v.name}
                             </p>
                             <p className='mb-2 kr-body text-tintdark'>
                              {v.simple_description}
                             </p>
                             
                          </div>
                          <div className='d-flex gap-3'>
                            <img src={v.image_url} alt={v.image_alt} className='img-fluid rounded-4' style={{width : '80px', height: "80px"}}></img>
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
                        <Arrow icon="delete" className='position-absolute end-0 top-0' ></Arrow>                       
                     </div>
  )
}
