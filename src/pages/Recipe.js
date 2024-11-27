import React from 'react'

import RecipeBanner from '../components/product/RecipeBanner';
import RecipeList from '../components/product/RecipeList';


export default function Recipe() {

  return (
    <div className=''>
        <RecipeBanner></RecipeBanner>
        
        <RecipeList></RecipeList>
    </div>
  )
}
