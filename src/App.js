import React, { useEffect } from 'react'
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


//버튼 테스트(이동예정)




import { Cartbtn, Tabbtn, Qbtn, Good, H2Text, SaleBadge, Coupon, New, Heart} from './components/common/_common'




import './pages/_pages.scss'


export default function App() {
  useEffect(()=>{
  
   }, [])
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

       <Qbtn>문의하기</Qbtn>
       <Tabbtn>밀키트</Tabbtn>
       <Cartbtn>총 67,000원 장바구니 담기</Cartbtn>

       <Good className='kr-btn'><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
  <path d="M10.2916 2.875C10.8974 2.87497 11.4803 3.10642 11.9211 3.52202C12.3619 3.93761 12.6271 4.50592 12.6627 5.11067L12.6666 5.25V8.41667H14.25C14.832 8.41657 15.3937 8.63017 15.8286 9.0169C16.2635 9.40363 16.5413 9.93658 16.6091 10.5146L16.621 10.6523L16.625 10.7917L16.6091 10.9468L15.8127 14.9305C15.5111 16.2178 14.6236 17.144 13.5881 17.1313L13.4583 17.125H7.12498C6.93107 17.125 6.74392 17.0538 6.59902 16.9249C6.45412 16.7961 6.36154 16.6185 6.33886 16.426L6.33331 16.3333L6.33411 8.784C6.33425 8.64517 6.3709 8.50882 6.44037 8.38863C6.50985 8.26843 6.60971 8.16862 6.72994 8.09921C7.06743 7.90413 7.35172 7.62898 7.55771 7.29803C7.76371 6.96709 7.88508 6.59053 7.91111 6.20158L7.91665 6.04167V5.25C7.91665 4.62011 8.16687 4.01602 8.61227 3.57062C9.05767 3.12522 9.66176 2.875 10.2916 2.875ZM3.95831 8.41667C4.15222 8.41669 4.33937 8.48788 4.48427 8.61673C4.62918 8.74558 4.72175 8.92313 4.74444 9.11571L4.74998 9.20833V16.3333C4.74995 16.5272 4.67876 16.7144 4.54991 16.8593C4.42106 17.0042 4.24351 17.0968 4.05094 17.1195L3.95831 17.125H3.16665C2.76719 17.1251 2.38245 16.9743 2.08955 16.7026C1.79664 16.431 1.61723 16.0587 1.58727 15.6604L1.58331 15.5417V10C1.58319 9.60054 1.73405 9.2158 2.00566 8.9229C2.27728 8.63 2.64957 8.45058 3.0479 8.42063L3.16665 8.41667H3.95831Z" fill="#BBBBBB"/>
</svg>추천해요<span>2</span></Good>
     
  <H2Text>새로운 상품이 왔어요!</H2Text>
  <SaleBadge>SALE</SaleBadge>
  <Coupon><span>5%</span> 쿠폰</Coupon>
  <New>New</New>
  
  
  
  
  
  <Heart>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
  <path d="M13.2826 2.4216L13.2828 2.42137C15.4791 0.155203 19.0013 -0.181551 21.3459 1.81622C24.0669 4.13866 24.2119 8.31394 21.7708 10.8331L21.7707 10.8332L12.7006 20.1985C12.7006 20.1986 12.7006 20.1986 12.7005 20.1986C12.3111 20.6004 11.6849 20.6004 11.2955 20.1986C11.2954 20.1986 11.2954 20.1986 11.2954 20.1985L2.22555 10.8334C-0.211159 8.31432 -0.0663141 4.13899 2.65453 1.81646C4.99932 -0.181746 8.52613 0.155399 10.7175 2.42101L10.7181 2.4216L11.6415 3.37315L12.0003 3.74289L12.3592 3.37315L13.2826 2.4216Z" fill="#E4E3E3" stroke="#CCCCCC"/>
</svg>
</Heart>
     
 

       <Footer>
       
       </Footer>
    </div>
  )
}
