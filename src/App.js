import React, { useEffect, useRef, useState } from 'react'
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
    
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems]; 
      // 이전배열 객체를 새로운 배열로 옮김 useState 상태변수대상이 배열이라 새로운 배열이 필요
  
      items.forEach((item) => {
        // 추가항목의 pk 배열 index 찾기
        const existingItemIndex = updatedItems.findIndex(existingItem => existingItem.productId === item.productId);
  
        if (existingItemIndex !== -1) {
          // 존재하면 그 배열객체만 찾아서 수량만 없데이트한다. (추가)
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + 1,
          };
        } else {
          // 처음 클릭된 상품인 경우 추가 , 원래의 데이터에 추가로 수량을 넣는다.
          updatedItems.push({ ...item, quantity: 1 });
        }
      });  
      return updatedItems; // 장바구니 배열객체로 cartItems업데이트한다.
    });
  };
  
  useEffect(() => {
    console.log(cartItems); // 장바구니 객체 수정될때마다 확인하기     
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
          <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}></Cart>}></Route>
          <Route path='/search' element={<ProductList></ProductList>}></Route>
          <Route path='/subscription' element={<Subscription></Subscription>}></Route>
          <Route path='/recipe' element={<Recipe></Recipe>}></Route>
          <Route path="/recipe/:id" element={<RecipeDetail></RecipeDetail>}></Route>
          <Route path='/product/:catenm?/:cateid?' element={<ProductList  addToCart={addToCart}></ProductList>}></Route>
          <Route path='/detail/:productId?' element={<ProductDetail  addToCart={addToCart}></ProductDetail>}></Route>
          <Route path='/event' element={<EventList addToCart={addToCart}></EventList>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/mypage' element={<Mypage cartItems={cartItems}></Mypage>}></Route>

          <Route path='*' element={<Error></Error>}></Route>
       </Routes>

      <Sidebar></Sidebar>
 

       <Footer></Footer>
    </div>
  )
}