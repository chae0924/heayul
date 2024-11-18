import React from 'react'
import { Routes, Route } from 'react-router-dom'

//json
import navidb from './data/navi.json'


//layout
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'

//index페이지
import Home from './pages/Home'
//장바구니
import Cart from './pages/Cart'
//상품목록
import ProductList from './pages/ProductList'
//상품상세
import ProductDetail from './pages/ProductDetail'
//레시피
import Recipe from './pages/Recipe'
//구독
import Subscription from './pages/Subscription'


import './pages/_pages.scss'

export default function App() {
  return (
    <div className="heyul">
       <Header navidb={ navidb }></Header>
       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/subscription' element={<Subscription></Subscription>}></Route>
          <Route path='/recipe' element={<Recipe></Recipe>}></Route>
          <Route path='/product/:catenm?/:cateid?' element={<ProductList ></ProductList>}></Route>
          <Route path='/detail/:productId?' element={<ProductDetail></ProductDetail>}></Route>
          <Route path='*' element={<p>컴포넌트 만들어줘</p>}></Route>
          
       </Routes>
       <Sidebar></Sidebar>
       <Footer></Footer>
    </div>
  )
}
