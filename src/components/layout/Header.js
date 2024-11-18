import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import hd from './header.module.scss'
import logo from '../../assets/logo.svg'
import { Allmenulist } from '../common/_common_navi'



export default function Header({ navidb}) {

   useEffect(()=>{
    console.log(navidb)
   }, [])

  return (
    <header className={`position-relative bg-white ${hd.hd} zup`}>
      <div className={`${hd.container} d-flex flex-column mx-auto mw`}>
        <div className="h_top d-flex align-items-start justify-content-between">
            <h1 >
              <a href="/" className='d-block'>
                  <img src={logo} alt='해율' className='d-block img-fluid'></img>
              </a>
            </h1>
            <ul className={`d-flex fw-400 ${hd.util} lh0-9`}>
              <li className='afterbar position-relative' >
                <Link to='/login' >로그인</Link>
              </li>
              <li className='afterbar position-relative'>
                <Link to='/mypage' >마이페이지</Link>
              </li>
              <li>
                <Link to='/support'  >고객센터</Link>
              </li>
            </ul>
        </div>
        <div className={`d-flex align-items-center ${hd.gnbwrap}`}>
          <div className='allNaviwrap position-relative'>
            <button className={`border-0 bg-white d-flex align-items-center px-0 ${hd.allmenu}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                <path d="M0 15.3339V12.8895H22V15.3339H0ZM0 9.22279V6.77835H22V9.22279H0ZM0 3.11168V0.667236H22V3.11168H0Z" fill="#222222"/>
              </svg>
              <span>카테고리</span>
            </button>
            <div className='position-absolute allNavi start-0 top-100 end-0 d-none'>
              <ul className={`position-relative d-inline-block ${hd.allNaviul} `}>

             
              {
                navidb["category"].map((v, i)=> <li >
                      <Allmenulist to={v.linkto} >{v.name}</Allmenulist>
                      {
                        v["subcategory"] && <ul className={`position-absolute start-100 top-0 ${hd.submenu}`}>
                                 {
                                  v["subcategory"].map((vv, ii)=><li>
                                         <Link to={`product/${vv.linkto}/${vv.categoryId}`} >{vv.name}</Link>
                                  </li>)
                                 }
                        </ul>
                      }
                        
                
                </li>

                )
              }
               </ul>
              
            </div>
            
          </div>
        

        <ul className={`d-flex align-items-center ${hd.gnb}`}>
        {
            navidb.gnavi.map((v,i)=>{
              return <li>
                <Link to={v.linkto}>{v.name}</Link>
              </li>

            })
          }
          
          </ul>
        </div>

       
      </div>
    </header>
    
  )
}
