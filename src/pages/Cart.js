import React, { useEffect, useState } from "react";
import CartList from "../components/ec/CartList";
import { WhiteNormalBtn, LabelC } from "../components/common/util/_icon";
import cm from "../pages/cart.module.scss";

export default function Cart({ cartItems }) {
  const [selectCart, setSelectcart] = useState([]);
  //cartItems 상태변수
  const allSelectCart = () => {
    const isAllSelected = selectCart.length === cartItems.length;
    setSelectcart(isAllSelected ? [] : [...cartItems]);
  };
  useEffect(() => {
    console.log("여기 장바구니" + JSON.stringify(cartItems, null, 2));
  }, []);
  return (
    <div className="bg-sub01">
      <div className="mw pb-5">
        <h2 className="text-center text-center  py-5">장바구니</h2>
        <div className="d-flex flex-wrap gap24 ">
          <div className="col ">
            

          <div className='bg-white mb-4 round6 p-3 d-flex justify-content-between align-items-center'>
                  <input type='checkbox' id="allcart" className='d-none'  checked={selectCart.length === cartItems.length} onChange={allSelectCart} />
                  <LabelC htmlFor="allcart" size={[120, 20]}  >
                    <span className='ms-2 kr-body text-primary d-flex cursor-pointer'>
                        전체선택 <span className='d-flex gap-1 ms-2'>{selectCart.length} / {cartItems.length}</span></span></LabelC>
              <WhiteNormalBtn className="kr-btn fw700">선택삭제</WhiteNormalBtn>
            </div>

            {cartItems.length > 0 ? (
              <div className="bg-white round6 py-3">
                <div className="d-flex border-bottom px-3 pb-3">
                  <input type="checkbox" id="normalsend" className="d-none" />
                  <LabelC htmlFor="normalsend" size={[120, 20]}>
                    <span className="ms-2 kr-h5 text-primary d-flex">
                      일반배송
                    </span>
                  </LabelC>
                </div>
                {cartItems.map((v, i) => {
                  return <CartList v={v} i={i}></CartList>;
                })}
              </div>
            ) : (
              <p>장바구니가 비어있습니다.</p>
            )}
          </div>
          </div>
          </div>
          </div>
  )
}
          


