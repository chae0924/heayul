import React, { useState, useEffect } from "react";
import { Plusbtn } from "../common/_common";
import styles from './RecipeThumbSet.module.scss'; // SCSS 모듈 import

import mainrecipe from '../../data/mainrecipe.json'

// 전체 상품에서 나머지 데이터만 추출하고, mainrecipe에서는 아이디만 있어야 했음

// {
//     "productId": "180",
//     "categoryId": "402",
//     "name": "백합조개 500g (생물)",
//     "originalPrice": "5290",
//     "discountPrice": "4790",
//     "coupon": "10|베스트 리뷰어 ",
//     "productInfo": "냉동|냉동(종이포장)|출고일 기준, 소비기한 100일 이내의 상품을 보내드립니다.|\"\"",
//     "detail_filed": "\"\"",
//     "description": "설명",
//     "simple_description": "간략설명",
//     "image_url": "/img/4/180.jpg",
//     "image_alt": "백합조개 500g (생물)",
//     "stock": "1000",
//     "rating": "4.5",
//     "reviews": "54",
//     "badges": "S",
//     "seo_title": "유기농 아몬드 | 이너뷰티 | 쇼핑몰 이름",
//     "seo_description": "자연 그대로의 유기농 아몬드, 간편하게 에너지를 충전하세요. 쇼핑몰에서 빠른 배송으로 만나보세요."
// }



export default function RecipeThumbSet({ id,  className, addToCart }) {

    const [selectedItems, setSelectedItems] = useState([]); 
    // 선택된 상품의 id만 수집하는 상태변수

    const [selectAll, setSelectAll] = useState(false); 
    // 전체 선택 input 로 상태관리
    
    const handleCheckboxChange = (item) => {
        // input 토글 기능
        if (selectedItems.some(selectedItem => selectedItem.productId === item.productId)) {
            // 선택 해제
            setSelectedItems(selectedItems.filter(selectedItem => selectedItem.productId !== item.productId));
            setSelectAll(false);
        } else {
            // 선택
            setSelectedItems([...selectedItems, item]); // 전체 데이터를 추가
        }
    };
 


    const handleSelectAll = () => {
        // 전체선택 함수
        if (selectAll) {
            setSelectedItems([]); //비우기
        } else {
            setSelectedItems([...mainrecipe]); // 전체 채우기
        }
        setSelectAll(!selectAll); // 전체선택 토글기능
    };

    const totalPrice = selectedItems.reduce(
        (sum, item) => sum + (Number(item.discountPrice) || 0),
        0
      );
      

    const handleAddToCart = (e) => {
        if (selectedItems.length === 0) {
          alert("상품을 선택해주세요!");
          return;
        }   
        addToCart(selectedItems, e);  // 장바구니에 상품 추가
        alert(selectedItems.length+"개 상품이 장바구니에 담겼습니다.");
        console.log(selectedItems)
      };

      useEffect(()=>{
        if( mainrecipe.length === selectedItems.length)  setSelectAll(true);
        //모두 체크했을때 전체박스 체크처리하기
        console.log(selectedItems)
      }, [selectedItems])
      

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
                            <div key={item.id} className={styles['cart-item']}>
                                <input
                                    type="checkbox"
                                    checked={selectedItems.includes(item.id)}
                                    onChange={() => handleCheckboxChange(item.id)}
                                    className={styles['checkbox']}
                                />
                                <img src={item.image} alt={item.name} className={styles['cart-item-image']} />
                                <div className={styles['cart-item-details']}>
                                    <p className="sub-prdnm kr-body">{item.name}</p>
                                    <div className={styles['price-details']}>
                                        {/* 할인 전 가격 */}
                                        {item.originalPrice && item.originalPrice !== '' && item.price < item.originalPrice && (
                                            <span className={`${styles['original-price']} sub-price me-1`}>
                                                {item.originalPrice}원
                                            </span>
                                        )}
                                        {/* 현재 가격 */}
                                        <span className={`${item.price ? '' : styles['no-price']} sub-current-price`}>
                                            {item.price ? `${item.price.toLocaleString()}원` : "가격 정보 없음"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                         )

                        })}
                        </div>

                        <div className={styles['select-all']}>
                            <input
                                type="checkbox"
                                checked={selectAll}
                                onChange={handleSelectAll}
                                className={styles['checkbox']}
                            />
                            <label className="kr-body">
                            전체 선택 <span>{mainrecipe.length}개</span>
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
