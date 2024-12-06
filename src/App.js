import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'

//json
import navidb from './data/navi.json';
import productinfoData from './data/product.json';


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

  //최적화발표
  //상품전달 데이터를 App.js 2차부모 컴포넌트에서 1회 저장한다.
  //데이터 1회 저장할 상태변수
  const [productinfo, setProductinfo] = useState([]);
  const [naviinfo, setNaviinfo] = useState([]);


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

  //장바구니 함수 ( 매개인자 : 상품데이터를 위한 배열)
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

  // addToCart 함수내의 cartItems 상태변수를 위한 함수실행으로 관리중
  useEffect(() => {
    console.log(cartItems);    
  }, [cartItems]);  

  
  useEffect(() => {
    // 로그인 상태 확인 (예: localStorage에 authToken 확인)
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // 토큰이 있으면 로그인 상태 true

    // 최적화된 랜딩을 위한 데이터캐싱 설계에 대한 리뷰입니다. //
    setProductinfo(productinfoData); // productinfo 상품데이터를 딱 한번 저장해둠
    setNaviinfo(navidb) // naviinfo 카테고리데이터를 딱 한번 저장해둠
    // 데이터캐싱마침 //


  }, []);

  
  return (
    <div className="heyul">

        {/* 상단의 카테고리변수와 장바구니 상태변수 전달 */}
       <Header naviinfo={ naviinfo } cartItems={ cartItems } ></Header>



       <Routes>
          <Route path='/' element={<Home addToCart={addToCart} ></Home>}></Route>
          <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}></Cart>}></Route>
          <Route path='/search' element={<ProductList></ProductList>}></Route>
          <Route path='/subscription' element={<Subscription></Subscription>}></Route>
          <Route path='/recipe' element={<Recipe></Recipe>}></Route>
          <Route path="/recipe/:id" element={<RecipeDetail></RecipeDetail>}></Route>
          <Route path='/product/:catenm?/:cateid?' element={<ProductList  addToCart={addToCart}></ProductList>}></Route>

          {/* 상세페이지 
          현재 구조에서 ProductDetail에 특정 productId에 해당하는 데이터를 필터링해서 전달하려면, 라우트 설정 단계에서는 :productId 값을 알 수 없으므로 전체 상품 데이터를 전달하고 ProductDetail 컴포넌트 내부에서 useParams를 사용해 productId를 읽어 필터링하는 것이 최적입니다.
          */}
          <Route path='/detail/:productId?' element={<ProductDetail  addToCart={addToCart} productinfo={productinfo} naviinfo={naviinfo["category"]}></ProductDetail>}></Route>



          <Route path='/event' element={<EventList addToCart={addToCart}></EventList>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/mypage' element={<Mypage></Mypage>}></Route>

          <Route path='*' element={<Error></Error>}></Route>
       </Routes>

      <Sidebar></Sidebar>
 

       <Footer></Footer>
    </div>
  )
}