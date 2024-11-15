import React from 'react'
import { Link } from 'react-router-dom'
import hd from './header.module.scss'
import logo from '../../assets/logo.svg'

import navidb from '../../data/navi.json'

export default function Header() {
  return (
    <header className={`fixed-top bg-white py-3 ${hd.hd}`}>
      <div className={`${hd.container} d-flex flex-column mx-auto`}>
        <div className="h_top d-flex align-items-start justify-content-between">
            <h1 className='mb-0'>
              <a href="/" className='d-block'>
                  <img src={logo} alt='해율' className='d-block img-fluid'></img>
              </a>
            </h1>
            <ul className="d-flex">
              <li className='afterbar' >
                <Link to='/login'>로그인</Link>
              </li>
              <li className='afterbar'>
                <Link to='/mypage'>마이페이지</Link>
              </li>
              <li>
                <Link to='/support'>고객센터</Link>
              </li>
            </ul>
        </div>

        <button>전체카테고리작업해야함</button>
        <ul className='d-flex'>
        {
            navidb.gnavi.map((v,i)=>{
              return <li>
                <Link to={v.linkTo}>{v.name}</Link>
              </li>

            })
          }
          
          </ul>
      </div>
    </header>
    
  )
}
