import React, {useEffect} from 'react'
import { Wishheart , BookmarkBt, CommentBt , RateBt , Syoutube, Sgit, Sinstar , Skakao,  LabelR, LabelC,  LabelPw , Viewicon, Carticon, Wishicon, Bookicon  } from '../common/util/_icon'
import prditem from './ProductItem.module.scss' 

export default function ProductItem({info}) {
  useEffect(()=>{
    console.log(info)
  }, [])
  return (
    <div>
              <img src={info.image_url} alt={info.image_alt} className='img-fluid' />
              <div className="product-info">
                <h3>{info.name}</h3>
                <p>{info.description}</p>
                <div className="price d-flex">
                  <span className="original">{info.originalPrice.toLocaleString()}원</span>
                  <span className="discount">{info.discountPrice.toLocaleString()}원</span>
                </div>
                ------------------               
                <Wishheart ></Wishheart>
                <BookmarkBt></BookmarkBt>
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
                <Bookicon></Bookicon>
              </div>
    </div>
  )
}
