import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

//json
import navidb from './data/navi.json'


//layout
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
// import Sidebar from './components/layout/Sidebar'

//index페이지
import Home from './pages/Home'
//장바구니
import Cart from './pages/Cart'
//상품목록
import ProductList from './pages/ProductList'
//상품상세
import ProductDetail from './pages/ProductDetail'
//기획전
import EventList from './pages/EventList'
//레시피
import Recipe from './pages/Recipe'
//레시피 상세
import RecipeDetail from './pages/RecipeDetail';
//구독
import Subscription from './pages/Subscription'
//에러페이지(404)
import Error from './pages/Error'
//로그인
import Login from './pages/Login'
//회원가입
import SignUp from './pages/SignUp'

import Mypage from './pages/Mypage'

import './pages/_pages.scss'


export default function App() {

  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 추가
  const altpronm = useRef(null); 

  const handleLogin = () => {
    // 로그인 처리 (예: 로그인 성공 시 localStorage 저장 및 상태 변경)
    setIsLoggedIn(true);
    localStorage.setItem("authToken", "dummyAuthToken"); // 예제 토큰 저장
  };

  const handleLogout = () => {
    // 로그아웃 처리
    setIsLoggedIn(false);
    localStorage.removeItem("authToken");
  };

  //매개인자 대상이 배열로 수정됨
   const addToCart = (items) => {
    // 장바구니 아이콘 클릭 시 실행되는 추가 함수
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems]; // 이전 장바구니 항목 복사
  
      items.forEach((item) => {
        // 중복되는 항목이 있는지 확인
        const existingItemIndex = updatedItems.findIndex(existingItem => existingItem.productId === item.productId);
  
        if (existingItemIndex !== -1) {
          // 기존 제품인 경우 수량 증가
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + 1,
          };
        } else {
          // 처음 클릭된 상품인 경우 추가
          updatedItems.push({ ...item, quantity: 1 });
        }
      });
  
      return updatedItems;
    });
  };
  
  useEffect(() => {
    console.log(cartItems);
    if (cartItems.length > 0) {
      const cartitemsindex = cartItems.findIndex((item) => item.productId === altpronm.current); 
      alert(`${ cartItems[cartitemsindex].name }상품을 ${cartItems[cartitemsindex].quantity}개 담았습니다.`)
     
    }
   
  }, [cartItems]);  // cartItems가 변경될 때마다 로그 출력
  
  useEffect(() => {
    // 로그인 상태 확인 (예: localStorage에 authToken 확인)
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // 토큰이 있으면 로그인 상태 true
  }, []);

  
  return (
    <div className="heyul">

       <Header navidb={ navidb } cartItems={cartItems} ></Header>



       <Routes>
          <Route path='/' element={<Home addToCart={addToCart} ></Home>}></Route>
          <Route path='/cart' element={<Cart cartItems={cartItems}></Cart>}></Route>
          <Route path='/search' element={<ProductList></ProductList>}></Route>
          <Route path='/subscription' element={<Subscription></Subscription>}></Route>
          <Route path='/recipe' element={<Recipe></Recipe>}></Route>
          <Route path="/recipe/:id" element={<RecipeDetail></RecipeDetail>}></Route>
          <Route path='/product/:catenm?/:cateid?' element={<ProductList  addToCart={addToCart}></ProductList>}></Route>
          <Route path='/detail/:productId?' element={<ProductDetail></ProductDetail>}></Route>
          <Route path='/event' element={<EventList addToCart={addToCart}></EventList>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/mypage' element={<Mypage></Mypage>}></Route>
       </Routes>

      {/* <Sidebar></Sidebar> */}
 

       <Footer>
       
       </Footer>
    </div>
  )
}