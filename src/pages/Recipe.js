import React from 'react'

import RecipeBanner from '../components/product/RecipeBanner';
import RecipeList from '../components/product/RecipeList';
import { Tabbtn, Plusbtn } from '../components/common/_common'

import recipedb from "../data/recipe.json";

export default function Recipe() {

  return (
    <div className="mw mb160 px-3 px-xxl-0">
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
          <Plusbtn icon="plus2"><span>더보기</span></Plusbtn>
          <Plusbtn icon="plus">더보기</Plusbtn>
        </div>
    </div>

  )
}
