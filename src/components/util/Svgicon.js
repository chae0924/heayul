import React from 'react'
import { MainQuickmenu } from '../common/_main_navi';

export default function Svgicon({id}) {
  return (
    <div className="mw " id={id}>
           <ul className='d-flex align-items-center justify-content-between'>
            <li>
              <MainQuickmenu to={`subscription`} w='50.8'></MainQuickmenu>
            </li>
            <li>
              <MainQuickmenu to={`event`}  w='40.2'></MainQuickmenu>
            </li>
            <li>
              <MainQuickmenu to={`coupon`} w='42.7'></MainQuickmenu>
            </li>
            <li>
              <MainQuickmenu to={`specialEvent`} w='36.2'></MainQuickmenu>
            </li>
           
            <li>
              <MainQuickmenu to={`recipe`} w='45.4'></MainQuickmenu>
            </li>
            <li>
              <MainQuickmenu to={`store`} w='36.8'></MainQuickmenu>
            </li>
            <li>
              <MainQuickmenu to={`gift`} w='42'></MainQuickmenu>
            </li>
            <li>
              <MainQuickmenu to={`mealSalad`} ></MainQuickmenu>
            </li>         
           
            <li>
              <MainQuickmenu to={`lunchBox`} w='48.1'></MainQuickmenu>
            </li>           
            
            <li>
              <MainQuickmenu to={`beverage`} w='29.8'></MainQuickmenu>
            </li>
            <li>
              <MainQuickmenu to={`seafood`} w='37.7'></MainQuickmenu>
            </li>
           
           
      </ul>
    </div>
  )
}

