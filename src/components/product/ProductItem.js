import React, {useEffect} from 'react'
import { Wishheart , BookmarkBt, CommentBt , RateBt , Syoutube, Sgit, Sinstar , Skakao,  LabelR, LabelC,  LabelPw , Viewicon, Carticon, Wishicon, Bookicon,Badges  } from '../common/util/_icon'
import prditem from './ProductItem.module.scss' 

export default function ProductItem({info}) {

const discountPrice = Number(info.discountPrice) || 0;
const originalPrice = Number(info.originalPrice);


  useEffect(()=>{
    console.log(info)
  }, [])
  return (
    <div className='org position-relative d-inline-block' id={info.productId}>
                <div className='position-absolute d-flex oriinner gap-1'>
                {
  info.badges && info.badges.includes("N") && (
    <Badges className="N">NEW</Badges>
  )
}
                  
                  {
                    info.coupon && <Badges className='C'>{
                      info.coupon.split("|")[0]+"% "+info.coupon.split("|")[1]
                    }</Badges>
                  }
                                  {
  info.badges && info.badges.includes("S") && (
    <Badges className='S'>SALE</Badges>
  )
}
                  
                </div>
              <img src={info.image_url}  alt={info.image_alt} className='img-fluid org-img' />
              <div className="product-info oriinner pt-0 pb-0">
                <h3 className='org-prdnm'>{info.name}</h3>
                <p className='d-none'>{info.description}</p>
                <div className="price d-flex justify-content-between">
      {/* 할인율 표시 */}
      <span className="org-current-price text-discount">
        { discountPrice  && discountPrice >0 ? `${Math.round((discountPrice / originalPrice) * 100)}%` : null }
       
      </span>
      
      {/* 원래 가격 쉼표 추가 */}
      <span className="org-current-price ">
        {discountPrice}원
      </span>
      <span className="org-price me-auto">
        {originalPrice}원
      </span>

      <Wishheart className='ms-auto'></Wishheart>
    </div>
                         
               
                
                
                {/* <BookmarkBt></BookmarkBt>
                <CommentBt></CommentBt>
                <RateBt></RateBt>
                <Syoutube></Syoutube>
                <Sinstar></Sinstar>
                <Skakao></Skakao>
                <Sgit></Sgit>
                <LabelR></LabelR>
                <LabelC></LabelC>
                <LabelPw></LabelPw> 
                <Viewicon></Viewicon>
                <Carticon></Carticon>
                <Wishicon></Wishicon>
                <Bookicon></Bookicon> */}
              </div>
    </div>
  )
}
