import React from 'react'

import { Tabbtn } from '../components/common/_common'
import RecipeBanner from '../components/product/RecipeBanner';
import RecipeList from '../components/product/RecipeList';

import recipedb from "../data/recipe.json";

export default function Recipe() {

  return (
    <div className="mw mb160">
      <RecipeBanner />
      <h2 className='kr_h2 d-flex justify-content-center py-4
    '>레시피</h2>
    <div className='d-flex justify-content-center pb-4 gap-3'>
      <Tabbtn>#비건</Tabbtn>
      <Tabbtn>#해시태그</Tabbtn>
      <Tabbtn>#반찬</Tabbtn>
      <Tabbtn>#해시태그</Tabbtn>
      <Tabbtn>#해시</Tabbtn>
      <Tabbtn>#분위기</Tabbtn>
    </div>
      <ul className="row">
        {recipedb.map((recipe, index) => (
          <li className="col-md-6" key={index}>
            <RecipeList data={recipe} />
          </li>
        ))}
      </ul>
    </div>

  )
}
