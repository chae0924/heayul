import React from 'react'
import { Link } from 'react-router-dom'
import hd from './header.module.scss'

import navidb from '../../data/navi.json'

export default function Header() {
  return (
    <header className='fixed-top border-bottom bg-white'>
      <div className='container d-flex'>
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
