import React,{ useEffect, useRef, useState } from "react";
import styles from "./productdetail.module.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'; // js-cookie 라이브러리 import

import productdb from "../data/product.json";
import navidb from "../data/navi.json";
import { findDeepMatch } from "../data/findDeepMatch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { Wishheart } from '../components/common/util/_icon'
import ReviewItem from "../components/common/ReviewItem";

import "swiper/swiper-bundle.css";

export default function ProductDetail({ addToCart ,}) {


  const buttonRef = useRef(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);




// const shouldShowRateView = rateview ?  true : false;




const handleAddToCart = (e) => {
  // addToCart(info, e);  // 장바구니에 상품 추가
};

  const { productId } = useParams();

  const filteredProduct = productdb.find((item) => item.productId === productId);
  const filterednavi = findDeepMatch(navidb, "categoryId", Number(productId));
  const firstNumber = findDeepMatch(
    navidb,
    "categoryId",
    Number(productId.match(/\d/)[0])
  );


  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  const [activeImageIndex, setActiveImageIndex] = React.useState(0); // 현재 활성화된 이미지의 인덱스
  const swiperRef = React.useRef(null); // Swiper 인스턴스 참조

  // 상품 이미지 배열
  const productImages = [
    "https://via.placeholder.com/550x550",
    "https://via.placeholder.com/550x550/ff0000",
    "https://via.placeholder.com/550x550/00ff00",
    "https://via.placeholder.com/550x550/0000ff",
  ];

  const discountPrice = Number(filteredProduct.discountPrice) || 0;
const originalPrice = Number(filteredProduct.originalPrice);
const perchasePrice = Number(filteredProduct.discountPrice!=='""'? filteredProduct.discountPrice: filteredProduct.originalPrice);

const [isFixed, setIsFixed] = useState(false);

const reviews = [
  { count: 200, rating: 3, name: '김**', pdname: filteredProduct?.name, badges: ['베스트', '정기배송'] },
  { count: 13, rating: 4, name: '이**', pdname: filteredProduct?.name, badges: ['베스트'] },
  { count: 5, rating: 2, name: '박**', pdname: filteredProduct?.name, badges: ['정기배송'] },
  { count: 6, rating: 4, name: '최**', pdname: filteredProduct?.name, badges: [] },
  { count: 6, rating: 4, name: '최**', pdname: filteredProduct?.name, badges: [] },
  { count: 6, rating: 4, name: '최**', pdname: filteredProduct?.name, badges: [] },
];

// 총 후기 갯수 계산
const totalReviews = reviews.length;

// 후기 그룹화 및 Swiper로 매핑
const reviewSlides = reviews
  .reduce((acc, cur, index) => {
    if (index % 3 === 0) acc.push([]);
    acc[acc.length - 1].push(cur);
    return acc;
  }, [])
  .map((group, i) => (
    <SwiperSlide key={i}>
      {group.map((review, j) => (
        <ReviewItem key={j} reviewData={review} />
      ))}
    </SwiperSlide>
  ));

  const [hasClaimedCoupon, setHasClaimedCoupon] = useState(false);


  useEffect(()=>{
    console.log("ProductItem 상품썸네일정보",filteredProduct)
    const button = buttonRef?.current; 
    const toggleClass = () => {
      button.classList.toggle("active");
    };
      button.addEventListener("click", toggleClass);

    const handleScroll = () => {
      if (window.scrollY > 1010) { // 스크롤이 100px 이상 내려가면 고정
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // 클린업 함수로 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
      button.removeEventListener("click", toggleClass);

    };

    const claimed = Cookies.get('couponClaimed'); // 쿠키에서 'couponClaimed' 값 확인
    if (claimed === 'true') {
      setHasClaimedCoupon(true); // 쿠폰을 이미 발급받은 상태
    }

  }, [])

  const handleCouponClick = () => {
    if (!hasClaimedCoupon) {
      alert('쿠폰이 발급되었습니다!');
      Cookies.set('couponClaimed', 'true'); // 쿠키에 쿠폰 발급 정보 저장
      setHasClaimedCoupon(true); // 상태 업데이트
    } else {
      alert('이미 발급된 쿠폰입니다!');
    }
  };

  return (
    <div className="mw">
      <div className="location d-flex justify-content-end py-4">
        <span>
          {productId ? (
            <Link to={`/category/${firstNumber.linkto}`}>
              {firstNumber.name}
            </Link>
          ) : (
            ""
          )}
        </span>
        <span>&#62;</span>
        <span>
          {productId ? (
            <Link
              to={`/product/${firstNumber.linkto}/${filterednavi.linkto}`}
            >
              {filterednavi.name}
            </Link>
          ) : (
            ""
          )}
        </span>
      </div>
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
              {/* 썸네일 */}
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`${styles.thumbnail} ${
                    activeImageIndex === index ? styles.active : ""
                  }`}
                  style={{
                    opacity: activeImageIndex === index ? 1 : 0.5, // 현재 활성화된 슬라이드만 불투명도 100%
                  }}
                  onClick={() => {
                    setActiveImageIndex(index); // 썸네일 활성화 상태 업데이트
                    swiperRef.current?.slideToLoop(index); // Swiper의 슬라이드 이동
                  }}
                >
                  <img src={image} alt={`썸네일 ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.productDetailRight} col-auto`}>
          <div className={styles.productInfo}>
            <div className={styles.productName}>
            {filteredProduct.name}
              <div className="wishlist-icon" />
            </div>
            <div className={styles.discountInfo}>
              <div className={styles.originalPrice}>
                { discountPrice  && discountPrice >0 ? <span className={`${styles.discount} org-current-price text-discount`}>
                      {  `${Math.round((discountPrice / originalPrice) * 100)}%`}
                    </span> : null }
                <div className={styles.price}>
                {new Intl.NumberFormat('ko-KR').format
                (perchasePrice)}원</div>
                <div className={styles.originalPriceCrossed}>{filteredProduct.discountPrice!=='""'? filteredProduct.discountPrice:null}</div>
              </div>
            </div>
            <div className={styles.originInfo}>
              원산지: 상품설명/상세정보 참조
            </div>
          </div>
          <div className={styles.promotionBoxes}>
            <div className={`${styles.promotionBox} ${styles.firstPurchase}`}>
              <span className="kr-btn">
                첫 구매라면 <strong>5,000원</strong> 즉시 할인
              </span>
              <div className="divider" />
            </div>
            <button className={`${styles.promotionBox} ${styles.coupon}`} onClick={handleCouponClick}>
              <span className={`${styles.couponText} kr-body`}>
                2,000원 할인 쿠폰 받기
              </span>
              <div className="divider" />
            </button>
          </div>
          <div className={styles.sectionDivider} />
          <div className={styles.storageInfo}>
            <div className={styles.storageTitle}>보관방법</div>
            <div className={styles.storageValue}>{filteredProduct.productInfo.split('|')[0]}</div>
          </div>
          <div className={styles.storageInfo}>
            <div className={styles.storageTitle}>포장타입</div>
            <div className={styles.storageValue}>{filteredProduct.productInfo.split('|')[1]}</div>
          </div>
          <div className={styles.storageInfo}>
            <div className={styles.storageTitle}>
              소비기한/<br />
              유통기한 정보
            </div>
            <div className={styles.storageValue}>
            {filteredProduct.productInfo.split('|')[2] == '""' ? '' : filteredProduct.productInfo.split('|')[2]}
            </div>
          </div>
          <div className={`${styles.storageInfo} mb-0`}>
            <div className={styles.storageTitle}>쇼핑정보</div>
            <div className={styles.storageValue}>
            {filteredProduct.productInfo.split('|')[3] == '""' ? '' : filteredProduct.productInfo.split('|')[3]}
            </div>
          </div>
          <div className={styles.sectionDivider} />
          <div className={`${styles.quantityBox} `}>
            <div className={`${styles.storageInfo} mb-0`}>
              <div className={styles.storageTitle}>수량/개수</div>
            </div>
            <div className={styles.itembox}>
              <div className={styles.quantitySelector}>
                <div>{filteredProduct.name}</div>
                <div className={`${styles.quantityButtons}`}>
                  <button className={styles.btn} onClick={handleDecrement}>-</button>
                  <span className={styles.quantity}>{quantity}</span>
                  <button className={styles.btn} onClick={handleIncrement}>+</button>
              
                </div>
              </div>
              <div className={styles.totalInfo}>
              <div className="kr-body lh1-2">총 상품금액 : </div>
                <span className="kr-h2 lh0-8">
                  {new Intl.NumberFormat('ko-KR').format(perchasePrice*quantity)}
                  <strong className="kr-h4">원</strong>
                </span>
              </div>
            </div>
          </div>
          <div className={`${styles.buttoncontainer} d-flex justify-content-start align-items-center`}>
      <div className={`${styles.button} ${styles.carticon} d-flex justify-content-center align-items-center`}>
        <div className={`${styles.iconwrapper} position-relative pb-4`}>
          <Wishheart ref={buttonRef}></Wishheart>
        </div>
      </div>
      <div className={`${styles.button} ${styles.carttext} d-flex justify-content-center align-items-center`}>
        <div className={styles.text}>장바구니 담기</div>
      </div>
      <div className={`${styles.button} ${styles. buynow} d-flex justify-content-center align-items-center`}>
        <div className={styles.text}>바로 구매하기</div>
      </div>
    </div>

        </div>
      </div>
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
          {totalReviews}
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
            
            ({totalReviews})
          </span>
          </a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto`}>
        <a href="#list-item-4">상품문의</a>
        </div>
      </div>
</div>

{/* 상품 list 섹션 */}
<div data-bs-spy="scroll" data-bs-target="#taplist" data-bs-offset="50" tabindex="0">
  <div className={`${styles.noticeCard} container ${styles.scrollspySection}`} id="list-item-1">
              <div className={`${styles.noticeCardHeader} row`}>
                  <div className={`${styles.noticeIcon} col-auto`}>
                      <div className={styles.noticeIconText}>!</div>
                  </div>
                  <div className={`${styles.noticeTitle} col`}>알려드립니다</div>
              </div>
              <div className={`${styles.noticeDescription} col-12`}>
                  ㆍ어획지역 : 서해/ 어획 시기 : 연중
              </div>
          </div>

      <div className={` mw w-100 h-auto bg-primary mb-5`}>
        <img src="https://via.placeholder.com/1200x1435" alt="상품상세이미지" />
      </div> 

      <div className={styles.container}>
      <div className={`${styles.header} ${styles.scrollspySection} kr-h4`} id="list-item-2">물품기본정보</div>
  </div>

{/* 상품상세설명 */}
  <div className={styles.detailsContainer}>
      <div className={styles.row}>
          <div className={styles.column}>
              <div className={styles.item}>
                  <div className={styles.labelContainer}>
                      <div className={styles.label}>물품명</div>
                  </div>
                  <div className={styles.valueContainer}>
                      <div className={styles.value}>{filteredProduct.name}</div>
                  </div>
              </div>
              <div className={styles.item}>
                  <div className={styles.labelContainer}>
                      <div className={styles.label}>중량/용량</div>
                  </div>
                  <div className={styles.valueContainer}>
                      <div className={styles.value}>15g</div>
                  </div>
              </div>
              <div className={styles.item}>
                  <div className={styles.labelContainer}>
                      <div className={styles.label}>영양정보</div>
                  </div>
                  <div className={styles.valueContainer}>
                      <div className={styles.value}>* %영양소 기준치: 1일 영양소 기준치에 대한 비율<br />
                          * 영양성분 검사에 해당되지 않는 항목은 수치가 표기되지 않습니다</div>
                  </div>
              </div>
          </div>
          <div className={styles.column}>
              <div className={styles.item}>
                  <div className={styles.labelContainer}>
                      <div className={styles.label}>원산지</div>
                  </div>
                  <div className={styles.valueContainer}>
                      <div className={styles.value}>국산</div>
                  </div>
              </div>
              <div className={styles.item}>
                  <div className={styles.labelContainer}>
                      <div className={styles.label}>생산자/생산지</div>
                  </div>
                  <div className={styles.valueContainer}>
                      <div className={styles.value}>농장 : 경기 화성, 충남 홍성<br/>가공 : 씨알살림축산(주) / 경기도 이천시 대월면 양녕로 169번길 5-24</div>
                  </div>
              </div>
              <div className={styles.item}>
                  <div className={styles.labelContainer}>
                      <div className={styles.label}>소비기한</div>
                  </div>
                  <div className={styles.valueContainer}>
                      <div className={styles.value}>제조일로부터 12개월까지(제조일은 물품포장 별도표기)</div>
                  </div>
              </div>
          </div>
      </div>

      <div className={styles.row}>
          <div className={styles.labelContainer}>
              <div className={styles.label}>보관/취급방법</div>
          </div>
          <div className={styles.valueContainer}>
              <div className={styles.value}>물품 상세 정보 참고</div>
          </div>
      </div>
  </div>

  {/* 상품후기 */}
  <div className={styles.container}>
      <div className={`${styles.header} kr-h3 ${styles.scrollspySection}`} id="list-item-3">상품 후기</div>
  </div>

  {/* 후기 사진 모음 */}
  <div className={styles.imageThumbnail}>
              <div className={styles.thumbnailPack}>
                  <div className={`${styles.thumbnail} d-flex gap-2`}>
                    <img src="https://via.placeholder.com/126x120" alt="후기사진" />
                  </div>
                  
                  <div className={`${styles.thumbnail} d-flex gap-2`}>
                    <img src="https://via.placeholder.com/126x120" alt="후기사진" />
                  </div>
                  <div className={`${styles.thumbnail} d-flex gap-2`}>
                    <img src="https://via.placeholder.com/126x120" alt="후기사진" />
                  </div>
                  <div className={`${styles.thumbnail} d-flex gap-2`}>
                    <img src="https://via.placeholder.com/126x120" alt="후기사진" />
                  </div>
                  <div className={`${styles.thumbnail} d-flex gap-2`}>
                    <img src="https://via.placeholder.com/126x120" alt="후기사진" />
                  </div>
                  <div className={`${styles.thumbnail} d-flex gap-2`}>
                    <img src="https://via.placeholder.com/126x120" alt="후기사진" />
                  </div>
                  <div className={`${styles.thumbnail} d-flex gap-2`}>
                    <img src="https://via.placeholder.com/126x120" alt="후기사진" />
                  </div>
                  <div className={`${styles.thumbnail} d-flex gap-2`}>
                    <img src="https://via.placeholder.com/126x120" alt="후기사진" />
                  </div>
                  <div className={`${styles.thumbnail} d-flex gap-2`}>
                    <img src="https://via.placeholder.com/126x120" alt="후기사진" />
                  </div>

              </div>
            </div>

  {/* 구분선 */}
  <div className="d-flex justify-content-between border-bottom border-black pb-2 mb-5">
    <div className="kr-h5 lh1-5">총 {totalReviews}개</div>
    <div className="d-inline-flex align-items-center text-center">
    <div className="kr-body afterbar position-relative px-2 lh0-9 fw-500">추천순</div>
    <div className="kr-body text-bold ps-2 lh0-9">최신순</div>
    </div>
  </div>

  {/* 후기 컴포넌트 */}
  <Swiper
    spaceBetween={0}
    slidesPerView={1}
    autoHeight={true} // 슬라이드 높이 자동 조정
    modules={[Pagination, Navigation]}
    className={`mySwiper ${styles.swiperCustom}`}
    pagination={{
      clickable: true,
      type: 'fraction',
      el: `.reviewPagination`,
      renderFraction: (current, total) => `
        <span class="${current} me-1">${current}</span>/
        <span class="${total}">${total}</span>
      `,
    }}
    navigation={{
      prevEl: `.${styles.swiperPrev}`,
      nextEl: `.${styles.swiperNext}`,
    }}
    onBeforeInit={(swiper) => {
      swiper.params.navigation.prevEl = `.${styles.swiperPrev}`;
      swiper.params.navigation.nextEl = `.${styles.swiperNext}`;
    }}
  >
    {reviewSlides}
  </Swiper>


  <div className={styles.swiperCustom}>
  {/* 내비게이션 버튼 */}
  <div className={`${styles.swiperNavigation} d-inline-flex justity-content-center position-relative`}>
    {/* 내비게이션 버튼 (SVG로 교체) */}
    <div className={`swiper-button-prev ${styles.swiperPrev} ${styles.bt} after-no position-unset`}>
  <svg class="vector" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.15517 10.6981C5.25187 10.7856 5.37893 10.8319 5.50925 10.827C5.63957 10.8222 5.76284 10.7666 5.85277 10.6722C5.94269 10.5777 5.99216 10.4519 5.99062 10.3215C5.98907 10.1911 5.93664 10.0664 5.8445 9.97414L1.67717 6.00481L11.4998 6.00481C11.6324 6.00481 11.7596 5.95213 11.8534 5.85836C11.9472 5.76459 11.9998 5.63741 11.9998 5.50481C11.9998 5.3722 11.9472 5.24502 11.8534 5.15125C11.7596 5.05748 11.6324 5.00481 11.4998 5.00481L1.67717 5.00481L5.8445 1.03481C5.89209 0.989543 5.93029 0.935352 5.95693 0.875326C5.98357 0.815301 5.99812 0.750615 5.99976 0.684964C6.0014 0.619313 5.9901 0.553983 5.96649 0.492701C5.94288 0.431419 5.90743 0.375388 5.86217 0.327806C5.81691 0.280223 5.76272 0.242022 5.70269 0.215383C5.64266 0.188744 5.57798 0.174188 5.51233 0.172547C5.44668 0.170907 5.38135 0.182214 5.32007 0.205822C5.25878 0.229429 5.20275 0.264876 5.15517 0.310139L0.208503 5.02147C0.100448 5.12435 0.0300246 5.2605 0.00850349 5.40814C-0.00305431 5.47209 -0.00282843 5.53761 0.0091701 5.60147C0.0309753 5.74863 0.101377 5.88427 0.20917 5.9868L5.15517 10.6981Z" fill="#222222"></path></svg>
  </div>

  <div className={`${styles.pagination} reviewPagination position-unset transfromNo`}></div>

  <div className={`swiper-button-next ${styles.swiperNext} ${styles.bt} after-no position-unset`}>
  <svg class="vector" width="10" height="9" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.84459 10.6981C6.74789 10.7856 6.62083 10.8319 6.49051 10.827C6.36018 10.8222 6.23692 10.7666 6.14699 10.6722C6.05706 10.5777 6.0076 10.4519 6.00914 10.3215C6.01068 10.1911 6.06312 10.0664 6.15525 9.97414L10.3226 6.00481L0.499918 6.00481C0.36731 6.00481 0.240132 5.95213 0.146364 5.85836C0.0525961 5.76459 -8.2016e-05 5.63741 -8.2016e-05 5.50481C-8.2016e-05 5.3722 0.0525961 5.24502 0.146364 5.15125C0.240132 5.05748 0.36731 5.00481 0.499918 5.00481L10.3226 5.00481L6.15525 1.03481C6.10767 0.989543 6.06947 0.935352 6.04283 0.875326C6.01619 0.815301 6.00164 0.750615 5.99999 0.684964C5.99835 0.619313 6.00966 0.553983 6.03327 0.492701C6.05688 0.431419 6.09232 0.375388 6.13759 0.327806C6.18285 0.280223 6.23704 0.242022 6.29706 0.215383C6.35709 0.188744 6.42178 0.174188 6.48743 0.172547C6.55308 0.170907 6.61841 0.182214 6.67969 0.205822C6.74097 0.229429 6.797 0.264876 6.84459 0.310139L11.7913 5.02147C11.8993 5.12435 11.9697 5.2605 11.9913 5.40814C12.0028 5.47209 12.0026 5.53761 11.9906 5.60147C11.9688 5.74863 11.8984 5.88427 11.7906 5.9868L6.84459 10.6981Z" fill="#222222"></path></svg>
  </div>
  </div>

  </div>

  <div className={styles.container}>
    <div className={`${styles.header} kr-h3 ${styles.scrollspySection}`} style={{height:'600px'}}  id="list-item-4">상품 문의</div>
  </div>

</div>

    </div>
  );
}
