import React, { useEffect, useState } from "react";
import CartList from "../components/ec/CartList";
import { WhiteNormalBtn, LabelC } from "../components/common/util/_icon";
import { Button } from "../components/common/util/_form";
import cartscss from "./cart.module.scss"

export default function Cart({ cartItems, cartToCart, isLoggedIn }) {
  const [selectCart, setSelectCart] = useState([]); // 선택된 상품 관리
  const [totalPrice, setTotalPrice] = useState(0); // 총 금액 계산

 

  // 전체 선택/해제
  const allSelectCart = () => {
    const isAllSelected = selectCart.length === cartItems.length;
    setSelectCart(isAllSelected ? [] : [...cartItems]);
  };


  

  // 총 금액 계산
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + Number(item.originalPrice) * item.quantity,
      0
    );
  
    setTotalPrice(total);
  }, [selectCart]);

  return (
    <div className="container bg-sub01">
    <div className=" mw pb-5">
      <h2 className="text-center py-5">장바구니</h2>
      <div className="row gx-3 gy-4"> {/* 간격 추가 */}
        {/* 왼쪽 컬럼 */}
        <div className="col-lg-8 col-md-12"> {/* PC에서는 8칸, 모바일에서는 12칸 */}
          <div className="bg-white mb-4 round6 p-3 d-flex justify-content-between align-items-center">
            <input
              type="checkbox"
              id="allcart"
              className="d-none"
              checked={selectCart.length === cartItems.length}
              onChange={allSelectCart}
            />
            <LabelC htmlFor="allcart" size={[120, 20]}>
              <span className="ms-2 kr-body text-primary d-flex cursor-pointer">
                전체선택
                <span className="d-flex gap-1 ms-2">
                  {selectCart.length} / {cartItems.length}
                </span>
              </span>
            </LabelC>
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
              {cartItems.map((v, i) => (
                <CartList
                  key={i}
                  v={v}
                  i={i}
                  onSelect={(isSelected) => {
                    if (isSelected) {
                      setSelectCart((prev) => [...prev, v]);
                    } else {
                      setSelectCart((prev) =>
                        prev.filter((item) => item.id !== v.id)
                      );
                    }
                  }}
                />
              ))}
            </div>
          ) : (
            <p>장바구니가 비어있습니다.</p>
          )}
        </div>
  
        {/* 오른쪽 컬럼 */}
        <div className="col-lg-4 col-md-12"> {/* PC에서는 4칸, 모바일에서는 12칸 */}
          <div className={`bg-white mb-4 ${cartscss.rightCart}`}>
            <h3 className="kr-h5 lh1-0">결제금액</h3>
            <div>
              <p className={`d-flex justify-content-between align-items-center kr-h6 fw400`}><span>상품금액</span><span>{totalPrice}</span></p>
              <p  className={`d-flex justify-content-between align-items-center"`}><span>상품할인금액</span> <span>0</span></p>
              <p>로그인 후 할인 금액 적용</p>
              <p  className={`d-flex justify-content-between align-items-center"`}><span>배송비</span>0원</p>
              <hr></hr>
              <p  className={`d-flex justify-content-between align-items-center fw-bold"`}><span>결제예정금액</span> <span className="kr-h4">{totalPrice}</span></p>
            </div>
            <Button type="submit" className={cartscss.lgButton}>
          로그인
        </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
