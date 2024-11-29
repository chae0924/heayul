import React, { useState } from "react";
import { Plusbtn } from "../common/_common";
import styles from './RecipeThumbSet.module.scss'; // SCSS 모듈 import

import items from '../../data/mainrecipe.json';

// const items = [
//     { id: 1, name: "백합조개 500g (생물)", price: 8000, originalPrice: '', image: "/img/4/180.jpg" },
//     { id: 2, name: "완도 미역 30g", price: 4500, originalPrice: 6000, image: "/img/3/175.jpg" },
//     { id: 3, name: "실속형 멸치액젓 500g", price: 5000, originalPrice: 7500, image: "/img/3/154.jpg" },
//     { id: 4, name: "맛술 830ml", price: 3500, originalPrice: 4000, image: "/img/3/163.jpg" },
//     { id: 5, name: "ECO 무라벨 생수 1L", price: 3500, originalPrice: 4000, image: "/img/3/167.jpg" },
// ];


export default function RecipeThumbSet({ id, style, ea, filterNV, to, className }) {
    const [selectedItems, setSelectedItems] = useState(items.map((item) => item.id)); // 모든 아이템의 id
    const [selectAll, setSelectAll] = useState(true); // 전체 선택 상태


    const handleCheckboxChange = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            setSelectedItems(items.map((item) => item.id));
        }
        setSelectAll(!selectAll);
    };

    const totalPrice = items
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + (item.price || 0), 0);

    const handleAddToCart = () => {
        if (selectedItems.length === 0) {
          alert("상품을 선택해주세요!");
          return;
        }
      
        // Add selected items to the cart (you can manage this part with your state or context)
        // Here, we're simply showing an alert message
        alert("장바구니에 담겼습니다.");
      };
      

    return (
        <div id={id} className={`${className} ${styles['recipe-thumb-container']}`}>
            <div className="d-flex align-items-top justify-content-between position-relative">
                <h2 className="kr_h2">맛있는 레시피<span className="emoji kr_h3">🍴</span></h2>
                <Plusbtn icon="arrow" to={"/recipe"}>
                    더보기
                </Plusbtn>
            </div>

            <div className="d-flex flex-wrap">
                {/* 왼쪽 큰 이미지 */}
                <div className="col-12 col-lg-7">
                    <div className={`${styles['big-recipe-image']} d-flex align-items-center`}>
                    <iframe
                        width="700"
                        height="850"
                        src="https://www.youtube.com/embed/-NwohPd36rg?si=oHBzH4sA1FNZmjlP&controls=0&autoplay=1&mute=1&modestbranding=1&rel=0&vq=hd1080&loop=1&playlist=-NwohPd36rg&controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    </div>
                </div>

                {/* 오른쪽 장바구니 UI */}
                <div className="col-12 col-lg-5">
                    <div className={styles['cart-section']}>
                        <div className={styles['cart-items-list']}>
                        {items.map((item) => (
                            <div key={item.productId} className={styles['cart-item']}>
                                <input
                                    type="checkbox"
                                    checked={selectedItems.includes(item.productId)}
                                    onChange={() => handleCheckboxChange(item.productId)}
                                    className={styles['checkbox']}
                                />
                                <img src={item.image_url} alt={item.image_alt} className={styles['cart-item-image']} />
                                <div className={styles['cart-item-details']}>
                                    <p className="sub-prdnm kr-body">{item.name}</p>
                                    <div className={styles['price-details']}>
                                        {/* 할인 전 가격 */}
                                        {item.originalPrice && item.originalPrice !== '' && item.discountPrice < item.originalPrice && (
                                            <span className={`${styles['original-price']} sub-price me-1`}>
                                                {item.originalPrice.toLocaleString()}원
                                            </span>
                                        )}
                                        {/* 현재 가격 */}
                                        <span className={`${item.discountPrice ? '' : styles['no-price']} sub-current-price`}>
                                            {item.discountPrice ? `${item.discountPrice.toLocaleString()}원` : "가격 정보 없음"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>

                        <div className={styles['select-all']}>
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAll}
                                className={styles['checkbox']}
                            />
                            <label className="kr-body">
                            전체 선택 <span>{items.length}개</span>
                            </label>
                        </div>

                        <button className={styles['checkout-button']} onClick={handleAddToCart}>
                            <h5 className="kr-h5">
                                {totalPrice > 0 ? `총 ${totalPrice.toLocaleString()}원 장바구니 담기` : "상품을 골라보세요!"}
                            </h5>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
