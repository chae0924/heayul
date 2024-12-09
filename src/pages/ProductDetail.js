import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'; // js-cookie 라이브러리 import

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { Wishheart } from '../components/common/util/_icon'
import ReviewItem from "../components/common/ReviewItem";
import { Arrow } from '../components/common/_common'


import styles from "./productdetail.module.scss";

export default function ProductDetail({ addToCart, productinfo, naviinfo }) {


  const { productId } = useParams(); 
  const [detailinfo, setDetailinfo] = useState({});
  const [locationinfo, setLocationinfo] = useState(null);
  const [subloactioninfo , setSubLocationinfo] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0); // 현재 활성화된 이미지의 인덱스
  const [hasClaimedCoupon, setHasClaimedCoupon] = useState(false);


  const buttonRef = useRef(null); 
  const swiperRef = useRef(null); // Swiper 인스턴스 참조
  const [isFixed, setIsFixed] = useState(false);

  const productImages = [
    "https://via.placeholder.com/550x550",
    "https://via.placeholder.com/550x550/ff0000",
    "https://via.placeholder.com/550x550/00ff00",
    "https://via.placeholder.com/550x550/0000ff",
  ];
  const reviews = [
    { count: 200, rating: 3, name: '김**', pdname: detailinfo?.name, badges: ['베스트', '정기배송'] },
    { count: 13, rating: 4, name: '이**', pdname: detailinfo?.name, badges: ['베스트'] },
    { count: 5, rating: 2, name: '박**', pdname: detailinfo?.name, badges: ['정기배송'] },
    { count: 6, rating: 4, name: '최**', pdname: detailinfo?.name, badges: [] },
    { count: 6, rating: 4, name: '최**', pdname: detailinfo?.name, badges: [] },
    { count: 6, rating: 4, name: '최**', pdname: detailinfo?.name, badges: [] },
  ];



  //함수선언
  const handleAddToCart = (e) => {
      addToCart([...detailinfo], e);  // 장바구니에 상품 추가
  }; 

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleCouponClick = () => {
    if (!hasClaimedCoupon) {
      alert('쿠폰이 발급되었습니다!');
      Cookies.set('couponClaimed', 'true'); // 쿠키에 쿠폰 발급 정보 저장
      setHasClaimedCoupon(true); // 상태 업데이트
    } else {
      alert('이미 발급된 쿠폰입니다!');
    }
  };

  const findSubLocation = async (대분류포함된네비, 상품데이터의카테고리) => { 
    // 먼저 비동기 작업을 수행하여 결과를 처리
    const results = await Promise.all(대분류포함된네비.map(async (subnavi) => {
      console.log(subnavi.categoryId); // 소분류내의 categoryId 모두 출력해보기
      return {
        ...subnavi, // 하나만 찾기
        matches: String(subnavi.categoryId) === String(상품데이터의카테고리), // 비동기 조건 확인
      };
    }));
  
    // 비동기 결과 중에서 조건에 맞는 항목을 찾기
    return results.find((subnavi) => subnavi.matches);
  };

  
  useEffect(()=>{
  
   
    

  }, [])
  //함수마침

  //실행식
  useEffect(() => {
    if (productinfo && naviinfo && productId) {
      
      const product = productinfo.find((item) => item.productId === productId);  
     

       setDetailinfo(product);    
      const locationNavidata = naviinfo.find(
        (navidata) => String(navidata.categoryId) === product.categoryId.substring(0, 1)
      );
      setLocationinfo(locationNavidata); // locationinfo
    }
    console.log("분리할", detailinfo && detailinfo.productInfo && detailinfo.productInfo.split('|')[0] )

  }, [productinfo, naviinfo, productId]);  

  useEffect(() => {
    const fetchData = async () => {
      if (locationinfo && locationinfo.subcategory && detailinfo) {
        // 비동기 find 호출 여기 실행시 주의
        const subLocationData = await findSubLocation(locationinfo.subcategory, detailinfo.categoryId);
  
        console.log("서브로케이션 데이터", subLocationData, "대분류", locationinfo.subcategory, "소분류아이디 ", detailinfo.categoryId);
        
        setSubLocationinfo(subLocationData); // 서브로케이션 정보 설정
      }
    };  
    fetchData(); // 비동기 함수 호출
  }, [locationinfo, productId]); // 의존성 배열 

  // 필수 데이터가 없는 경우 처리
  if (!productinfo || !naviinfo) {
    return <div className="d-flex justify-content-center align-items-center">상품준비중입니다.</div>;
  }

  




  return (
    <div className="mw">
          { locationinfo  && 
                <div className="location d-flex justify-content-end py-4 align-items-center">
                  <span>
                    <Link to='/'>
                        홈
                    </Link>
                  </span>
                  <span className="mx-2">
                    <Arrow icon="gray"></Arrow>
                  </span>
                  <span>
                    <Link to={`/product/${locationinfo.linkto}`}>
                    {  locationinfo.name  }
                    </Link>
                  </span>
                {  subloactioninfo && <>
                  <span className="mx-2">
                    <Arrow icon="gray"></Arrow>
                  </span>
                  <span>
                    <Link to={`/product/${subloactioninfo.linkto}/${subloactioninfo.categoryId}`}>
                      {  subloactioninfo.name }
                    </Link>
                  </span>
                  </>
                  }
                </div>
          }
    <div className={`${styles.productDetailContainer} d-flex align-items-start justify-contents-between`}>
      <div className={`${styles.productDetailLeft} col-auto`}>
        <div className={styles.productImageWrapper}>
          {/* 큰 이미지 */}
          <Swiper
              spaceBetween={0}
              loop={true}
              className="w-100 round-pagination"
              modules={[Pagination]}
              pagination={{
                clickable: true,
                type: "fraction",
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper 인스턴스 저장
              onSlideChange={(swiper) => setActiveImageIndex(swiper.realIndex)} // 활성 슬라이드 업데이트
            >
              {productImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`상품 이미지 ${index + 1}`}
                    className={styles.largeImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
        <div className={styles.imageThumbnails}>
            <div className={styles.thumbnailPack}>
              {
                detailinfo && detailinfo.image_url && <div className={`${styles.thumbnail} ${
                  activeImageIndex === 0 ? styles.active : ""
                }`}
                style={{
                  opacity: activeImageIndex === 0 ? 1 : 0.5, // 현재 활성화된 슬라이드만 불투명도 100%
                }}
                onClick={() => {
                  setActiveImageIndex(0); // 썸네일 활성화 상태 업데이트
                  swiperRef.current?.slideToLoop(0); // Swiper의 슬라이드 이동
                }}>
                    <img src={detailinfo.image_url}></img>
                </div>
              }
              {/* 썸네일 */}
              {detailinfo && detailinfo.addimage && detailinfo.addimage.split("|").map((image, index) => (
                <div
                  key={index + 1}
                  className={`${styles.thumbnail} ${
                    activeImageIndex === index+1 ? styles.active : ""
                  }`}
                  style={{
                    opacity: activeImageIndex === index+1 ? 1 : 0.5, // 현재 활성화된 슬라이드만 불투명도 100%
                  }}
                  onClick={() => {
                    setActiveImageIndex(index+1); // 썸네일 활성화 상태 업데이트
                    swiperRef.current?.slideToLoop(index+1); // Swiper의 슬라이드 이동
                  }}
                >
                  <img src={image} alt={`썸네일 ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
      </div>
      {/* 상품상세설명 */}
      <div className={`${styles.productDetailRight} col-auto`}>
          <div className={styles.productInfo}>
            <div className={styles.productName}>
                {detailinfo.name}                
            </div>
            <div className={styles.discountInfo}>
            <div className={styles.originalPrice}>
                  {/* Show the discount percentage if discountPrice is valid and greater than 0 */}
                  { detailinfo && Number(detailinfo.discountPrice) > 0 && (
                    <span className={`${styles.discount} org-current-price text-discount`}>
                      {`${Math.round((Number(detailinfo.discountPrice) / Number(detailinfo.originalPrice)) * 100)}%`}
                    </span>
                  )}
                  <div className={styles.price}>
                    {/* Display the purchase price with currency formatting */}
                    {new Intl.NumberFormat('ko-KR').format(
                        Number(detailinfo.discountPrice) > 0
                          ? Number(detailinfo.discountPrice)
                          : Number(detailinfo.originalPrice)
                      )}
                      원
                  </div>
                  <div className={styles.originalPriceCrossed}>
                    {Number(detailinfo.discountPrice) > 0
                      ? `${new Intl.NumberFormat('ko-KR').format(Number(detailinfo.originalPrice))}원`
                      : null}
                  </div>
                </div>
            </div>
            <div className={styles.originInfo}>
              원산지: 상품설명/상세정보 참조
            </div>
          </div>
          <div className={styles.promotionBoxes}>
            <div className={`${styles.promotionBox} ${styles.firstPurchase}`}>
              <span className="kr-btn d-flex justify-content-between w-100">
                <span>첫 구매라면 <strong>5,000원</strong> 즉시 할인</span><Arrow icon="grayGreen" />
              </span>
              <div className="divider" />
            </div>
            <button className={`${styles.promotionBox} ${styles.coupon}`} onClick={handleCouponClick}>
              <span className={`${styles.couponText} kr-body d-flex gap-2`}>
                2,000원 할인 쿠폰 받기<Arrow icon="grayGreen" />
              </span>
              <div className="divider" />
            </button>
          </div>
          <div className={styles.sectionDivider} />
          <div className={styles.storageInfo}>
            <div className={styles.storageTitle}>보관방법</div>
            <div className={styles.storageValue}> {
                detailinfo.productInfo && typeof detailinfo.productInfo === "string"
                ? detailinfo.productInfo.split('|')[0]
                : null }
            </div>
          </div>
          <div className={styles.storageInfo}>
            <div className={styles.storageTitle}>포장타입</div>
            <div className={styles.storageValue}>{
               detailinfo.productInfo && typeof detailinfo.productInfo === "string"
               ? detailinfo.productInfo.split('|')[1]
               : null}</div>
          </div>
          <div className={styles.storageInfo}>
            <div className={styles.storageTitle}>
              소비기한/<br />
              유통기한 정보
            </div>
            <div className={styles.storageValue}>
            { detailinfo.productInfo && typeof detailinfo.productInfo === "string"
                ? detailinfo.productInfo.split('|')[2]
                : null}
            </div>
          </div>
          <div className={`${styles.storageInfo} mb-0`}>
            <div className={styles.storageTitle}>쇼핑정보</div>
            <div className={styles.storageValue}>
            { detailinfo.productInfo && typeof detailinfo.productInfo === "string"
                ? detailinfo.productInfo.split('|')[3]
                : null}
            </div>
          </div>
          <div className={styles.sectionDivider} />
          <div className={`${styles.quantityBox} `}>
            <div className={`${styles.storageInfo} mb-0`}>
              <div className={styles.storageTitle}>수량/개수</div>
            </div>
            <div className={styles.itembox}>
              <div className={styles.quantitySelector}>
                <div>{detailinfo.name}</div>
                <div className={`${styles.quantityButtons}`}>
                  <button className={styles.btn} onClick={handleDecrement}>-</button>
                  <span className={styles.quantity}>{quantity}</span>
                  <button className={styles.btn} onClick={handleIncrement}>+</button>
              
                </div>
              </div>
              <div className={styles.totalInfo}>
              <div className="kr-body lh1-2">총 상품금액 : </div>
                <span className="kr-h2 lh0-8">
                  {new Intl.NumberFormat('ko-KR').format(Number(detailinfo.discountPrice!=='""'? detailinfo.discountPrice: detailinfo.originalPrice)*quantity)}
                  <strong className="kr-h4">원</strong>
                </span>
              </div>
            </div>
          </div>
          <div className={`${styles.buttoncontainer} d-flex justify-content-start align-items-center`}>
            <div className={`${styles.button} ${styles.carticon} d-flex justify-content-center align-items-center`}>
          
                <Wishheart ref={buttonRef} className={`${styles.iconwrapper} position-relative pb-4`}></Wishheart>

            </div>
            <div className={`${styles.button} ${styles.carttext} d-flex justify-content-center align-items-center`}>

              <button className={styles.text}  onClick={() => addToCart([{ ...detailinfo, quantity }])}>장바구니 담기</button>
            </div>
            <div className={`${styles.button} ${styles. buynow} d-flex justify-content-center align-items-center`}>
              <div className={styles.text}>바로 구매하기</div>
            </div>
          </div>
      </div>
    </div>
    {/* 상품상세내용 */}
    <div className={`${styles.banner} h-50`}>
        <img src="https://via.placeholder.com/1044x110" alt="banner" />
    </div>

        
    <div className={styles.productHeaderContainer} id="taplist">
      <div className={`${styles.productHeaderRow} d-flex`}>
        <div className={`${styles.productHeaderCol} col-auto`}>
          <a href="#list-item-1">상품설명</a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto`}>
          <a href="#list-item-2">상세정보</a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto`}>
          <a href="#list-item-3">
            <span className={styles.productHeaderReview}>
            후기
            </span>
            <span className={styles.productHeaderReviewCount}>
            ({reviews.length})
            </span>
          </a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto`}>
          <a href="#list-item-4">상품문의</a>
        </div>
      </div>
    </div>
    <div className={`${styles.productHeaderContainer} ${isFixed ? styles.fixedHeader : ''} pt-5 d-none`} id="taplist">
      <div className={`${styles.productHeaderRow} d-flex`}>
        <div className={`${styles.productHeaderCol} col-auto`}>
          <a href="#list-item-1">상품설명</a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto`}>
          <a href="#list-item-2">상세정보</a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto`}>
          <a href="#list-item-3">
            <span className={styles.productHeaderReview}>
              후기
            </span>
            <span className={styles.productHeaderReviewCount}>
              
              ({reviews.length})
            </span>
          </a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto`}>
          <a href="#list-item-4">상품문의</a>
        </div>
      </div>
    </div>


     
    </div>
  
  );
}
