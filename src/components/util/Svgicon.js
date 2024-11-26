import React from 'react'
import { MainQuickmenu } from '../common/_main_navi';

export default function Svgicon({id}) {
  return (
    <div className="mw " id={id}>
           <ul className='d-flex align-items-center justify-content-between'>
            <li className='d-flex flex-column align-items-center gap-1'>
              <MainQuickmenu to={`subscription`} w='50.8'></MainQuickmenu><span>정기배송</span>
            </li>
            <li className='d-flex flex-column align-items-center gap-1'>
              <MainQuickmenu to={`event`}  w='40.2'></MainQuickmenu><span>이벤트</span>
            </li>
            <li className='d-flex flex-column align-items-center gap-1'>
              <MainQuickmenu to={`coupon`} w='42.7'></MainQuickmenu><span>쿠폰</span>
            </li>
            <li className='d-flex flex-column align-items-center gap-1'>
              <MainQuickmenu to={`specialEvent`} w='36.2'></MainQuickmenu><span>기획전</span>
            </li>
           
            <li className='d-flex flex-column align-items-center gap-1'>
              <MainQuickmenu to={`recipe`} w='45.4'></MainQuickmenu><span>레시피</span>
            </li>
            <li className='d-flex flex-column align-items-center gap-1'>
              <MainQuickmenu to={`store`} w='36.8'></MainQuickmenu><span>매장찾기</span>
            </li>
            <li className='d-flex flex-column align-items-center gap-1'>
              <MainQuickmenu to={`gift`} w='42'></MainQuickmenu><span>선물하기</span>
            </li>
            <li className='d-flex flex-column align-items-center gap-1'>
              <MainQuickmenu to={`mealSalad`} ></MainQuickmenu><span>밀키트</span>
            </li>         
           
            <li className='d-flex flex-column align-items-center gap-1'>
              <MainQuickmenu to={`lunchBox`} w='48.1'></MainQuickmenu><span>밥 / 면</span>
            </li>           
            
            <li className='d-flex flex-column align-items-center gap-1'>
              <MainQuickmenu to={`beverage`} w='29.8'></MainQuickmenu><span>음료</span>
            </li>
            <li className='d-flex flex-column align-items-center gap-1'>
              <MainQuickmenu to={`seafood`} w='37.7'></MainQuickmenu><span>해조류</span>
            </li>
           
           
      </ul>
    </div>
  )
}

