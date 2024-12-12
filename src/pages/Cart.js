import React, { useEffect, useState } from "react";
import CartList from "../components/ec/CartList";
import { WhiteNormalBtn, LabelC } from "../components/common/util/_icon";

export default function Cart({ cartItems, addToCart }) {
  const [selectCart, setSelectCart] = useState([]); // 선택된 상품 관리
  const [totalPrice, setTotalPrice] = useState(0); // 총 금액 계산

  // 전체 선택/해제
  const allSelectCart = () => {
    const isAllSelected = selectCart.length === cartItems.length;
    setSelectCart(isAllSelected ? [] : [...cartItems]);
  };

  // 총 금액 계산
  useEffect(() => {
    const total = selectCart.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
    setTotalPrice(total);
  }, [selectCart]);

  return (
    <div className="bg-sub01">
      <div className="mw pb-5">
        <h2 className="text-center py-5">장바구니</h2>
        <div className="row gap24">
          {/* 왼쪽 컬럼 */}
          <div className="col-8">
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

          {/* 오른쪽 컬럼: 결제금액 */}
          <div className="col-4">
            <div className="bg-white mb-4 round6 py-3 px-3">
              <h3 className="kr-h5 mb-3">결제금액</h3>
              <div>
                <p>상품금액: ₩{totalPrice}</p>
                <p>상품할인금액: ₩0</p>
                <p>배송비: ₩0</p>
                <p className="fw-bold">총 금액: ₩{totalPrice}</p>
              </div>
              <button className="btn btn-primary w-100 mt-3">결제하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
