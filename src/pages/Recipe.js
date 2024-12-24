import React from 'react'
import {Link} from 'react-router-dom'
import RecipeBanner from '../components/product/RecipeBanner';
import RecipeList from '../components/product/RecipeList';
import { Tabbtn, Plusbtn, Arrow } from '../components/common/_common'

import recipedb from "../data/recipe.json";

export default function Recipe() {

  return (
    <div className="mw mb160 px-3 px-xxl-0">
              <div className="location d-flex justify-content-end py-4 align-items-center">
                <span>
                  <Link to="/">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='me-1'>
                <path d="M5.66666 10.6666V7.33331H8.33333V10.6666C8.33333 11.0333 8.63333 11.3333 9 11.3333H11C11.3667 11.3333 11.6667 11.0333 11.6667 10.6666V5.99998H12.8C13.1067 5.99998 13.2533 5.61998 13.02 5.41998L7.44666 0.39998C7.19333 0.173314 6.80666 0.173314 6.55333 0.39998L0.979997 5.41998C0.75333 5.61998 0.89333 5.99998 1.2 5.99998H2.33333V10.6666C2.33333 11.0333 2.63333 11.3333 3 11.3333H5C5.36666 11.3333 5.66666 11.0333 5.66666 10.6666Z" fill="#555555"/>
                </svg>
                  홈
                  </Link>
                </span>
                <span className="mx-2">
                  <Arrow icon="gray" />
                </span>
                  <span>
                    <Link to="/recipe">
                        레시피
                    </Link>
                  </span>
              </div>
      <RecipeBanner />
      <h2 className='kr_h2 d-flex justify-content-center py-4
    '>레시피</h2>
    <div className='d-flex justify-content-center pb-4 gap-3'>
      <Tabbtn>#비건</Tabbtn>
      <Tabbtn>#해시태그</Tabbtn>
      <Tabbtn>#반찬</Tabbtn>
      <Tabbtn className='d-none d-sm-block'>#해시태그</Tabbtn>
      <Tabbtn className='d-none d-md-block'>#해시</Tabbtn>
      <Tabbtn className='d-none d-sm-block'>#분위기</Tabbtn>
    </div>
      <ul className="row">
        {recipedb.map((recipe, index) => (
          <li className="col-md-6" key={index}>
            <RecipeList data={recipe} />
          </li>
        ))}
      </ul>

    <div className='d-flex justify-content-center'>
          {/* <Plusbtn icon="plus2"><span>더보기</span></Plusbtn> */}
          <Plusbtn icon="plus">더보기</Plusbtn>
        </div>
    </div>

  )
}
