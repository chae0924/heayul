import React, { useState, useEffect } from 'react';

export default function Cart({ cartItems, setCartItems }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map(item => item.productId));
    }
    setSelectAll(!selectAll);
  };

  const handleItemSelect = (productId) => {
    if (selectedItems.includes(productId)) {
      setSelectedItems(selectedItems.filter(id => id !== productId));
    } else {
      setSelectedItems([...selectedItems, productId]);
    }
  };

  const handleDeleteSelected = () => {
    const remainingItems = cartItems.filter(item => !selectedItems.includes(item.productId));
    setCartItems(remainingItems); // 장바구니 상태 업데이트
    setSelectedItems([]); // 선택된 항목 초기화
    setSelectAll(false); // 전체 선택 체크박스 초기화
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className='bg-sub01'>
      <div className='mw'>
        <h2 className='text-center pt-5 mb-5 kr-h2'>장바구니</h2>
        {cartItems.length > 0 ? (
          <dl className='border-top'>
            <dt className='d-flex border-bottom'>
              <p>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                <label>전체 선택</label>
                <span>{selectedItems.length}/{cartItems.length}</span>
              </p>
              <button onClick={handleDeleteSelected}>선택 삭제</button>
            </dt>
            {cartItems.map((v, i) => (
              <dd key={i} className='d-flex border-bottom py-3'>
                <p style={{ width: '20px' }}>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(v.productId)}
                    onChange={() => handleItemSelect(v.productId)}
                  />
                  <label></label>
                </p>
                <img src={v.image_url} alt={v.image_alt} className='img-fluid rounded-4' style={{ width: '70px' }} />
                <div className='d-flex align-items-center col justify-content-between'>
                  <p>{v.name}</p>
                  {v.quantity}
                </div>
              </dd>
            ))}
          </dl>
        ) : (
          <p>장바구니가 비어있습니다.</p>
        )}
      </div>
    </div>
  );
}
