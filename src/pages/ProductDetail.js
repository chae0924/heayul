import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'; // js-cookie 라이브러리 import

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { Wishheart } from '../components/common/util/_icon'
import ReviewItem from "../components/common/ReviewItem";
import { Arrow } from '../components/common/_common'

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'; // 리액트 스크롤스파이 기능이 아닌 부트스트랩으로 처리하기 위힌 핵심 모듈


import styles from "./productdetail.module.scss";

export default function ProductDetail({ addToCart, productinfo, naviinfo }) {


  const { productId } = useParams(); 
  const [detailinfo, setDetailinfo] = useState({});
  const [locationinfo, setLocationinfo] = useState(null);
  const [subloactioninfo , setSubLocationinfo] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0); // 현재 활성화된 이미지의 인덱스
  const [hasClaimedCoupon, setHasClaimedCoupon] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);


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

const thumbnails = [
  detailinfo?.image_url,
  ...(detailinfo?.addimage?.split("|") || []),
];

const handleToggle = (index) => {
  const currentButton = buttonRef.current;
  if (currentButton) {
    // 이전에 열려 있던 항목이 있으면, 해당 항목에서 expend 클래스를 제거
    if (expandedIndex !== null) {
      currentButton.classList.remove(styles.expend);
    }

    // 클릭한 항목에 expend 클래스를 추가/제거
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
      currentButton.classList.add(styles.expend);
    }
  }
};

  
  useEffect(()=>{
    const button = buttonRef.current;
    
    const toggleClass = () => {
      if (button) {
        button.classList.toggle("active");
      }
    };

    // 버튼이 렌더링된 후에만 이벤트 리스너 추가
    if (button) {
      button.addEventListener("click", toggleClass);
    }

    const handleScroll = () => {
      if (window.scrollY > 1010) { // 스크롤이 1010px 이상 내려가면 고정
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: "#taplist"
    });

    // 클린업 함수로 이벤트 리스너 제거
    return () => {
      scrollSpy.dispose();
      if (button) {
        button.removeEventListener("click", toggleClass);
      }
      window.removeEventListener('scroll', handleScroll);
    };
    

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
        {/* 큰 이미지 Swiper */}
        <div className={styles.productImageWrapper}>
          <Swiper
            spaceBetween={0}
            loop={true}
            className={`w-100 round-pagination`}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              type: "fraction",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper 인스턴스 저장
            onSlideChange={(swiper) => setActiveImageIndex(swiper.realIndex)} // 활성 슬라이드 업데이트
          >
            {thumbnails.map((image, index) => (
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

        {/* 썸네일 */}
        <div className={styles.imageThumbnails}>
          <div className={styles.thumbnailPack}>
            {thumbnails.map((image, index) => (
              <div
                key={index}
                className={`${styles.thumbnail} ${
                  activeImageIndex === index ? styles.active : ""
                }`}
                style={{
                  opacity: activeImageIndex === index ? 1 : 0.5,
                }}
                onClick={() => {
                  setActiveImageIndex(index); // 썸네일 활성화 상태 업데이트
                  swiperRef.current?.slideToLoop(index); // Swiper의 슬라이드 이동
                }}
              >
                <img src={image} alt={`썸네일 ${index + 1}`} className={styles.thumbImage} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/*오른쪽  상품정보 */}
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
              {detailinfo.productInfo && detailinfo.productInfo.split('|')[3] !== '""' && detailinfo.productInfo.split('|')[3] !== '' 
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
                  {new Intl.NumberFormat('ko-KR').format(Number(detailinfo.discountPrice) > 0
                          ? Number(detailinfo.discountPrice)
                          : Number(detailinfo.originalPrice)*quantity)}
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
        <img src="https://github.com/chae0924/heayul/blob/chae0924-patch-1/detail_app_banner.jpg?raw=true" alt="banner" />
    </div>

        
    <div className={styles.productHeaderContainer} >
      <div className={`${styles.productHeaderRow} d-flex`}>
        <div className={`${styles.productHeaderCol} col-auto nav-item`}>
          <a href="#list-item-1"  >상품설명</a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto nav-item`}>
          <a href="#list-item-2"  >상세정보</a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto nav-item`}>
          <a href="#list-item-3"  >
            <span className={styles.productHeaderReview}>
            후기
            </span>
            <span className={styles.productHeaderReviewCount}>
            ({reviews.length})
            </span>
          </a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto nav-item`}>
          <a href="#list-item-4"  >상품문의</a>
        </div>
      </div>
    </div>
    <div className={`${styles.productHeaderContainer} ${isFixed ? styles.fixedHeader : ''} pt-5 d-none`} id="taplist">
      <div className={`${styles.productHeaderRow} d-flex`}>
        <div className={`${styles.productHeaderCol} col-auto nav-item`}>
          <a href="#list-item-1" className="nav-link">상품설명</a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto nav-item`}>
          <a href="#list-item-2" className="nav-link">상세정보</a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto nav-item`}>
          <a href="#list-item-3" className="nav-link">
            <span className={styles.productHeaderReview}>
              후기
            </span>
            <span className={styles.productHeaderReviewCount}>
              
              ({reviews.length})
            </span>
          </a>
        </div>
        <div className={`${styles.productHeaderCol} col-auto nav-item`}>
          <a href="#list-item-4"  className="nav-link">상품문의</a>
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
       
      <div className={` h-auto bg-white mb-5 ${styles.detailImage} `}>
        <img src="https://cdn.oasis.co.kr:48580/se/2022/2/11/se_2022d0e17176-c479-4bf2-b3f9-d03532cddce9.jpg" alt="상품상세이미지1" className="" />
        <img src="https://cdn.oasis.co.kr:48580/se/2022/2/11/se_2022f3e43620-43cc-4ef8-b090-891ce2b9a64f.jpg" alt="상품상세이미지2" className="" />
      </div> 
  </div>
  <div className={styles.container} id="list-item-2">
      <div className={`${styles.header} ${styles.scrollspySection} kr-h4`} >물품기본정보</div> 
      {/* 상품상세설명 */}
        <div className={styles.detailsContainer}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.item}>
                        <div className={styles.labelContainer}>
                            <div className={styles.label}>물품명</div>
                        </div>
                        <div className={styles.valueContainer}>
                            <div className={styles.value}>{detailinfo.name}</div>
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
  </div>
  {/* 상품후기 */}
  <div className={styles.container}  id="list-item-3">
      <div className={`${styles.header} kr-h3 ${styles.scrollspySection}`}>상품 후기</div>

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
    <div className="kr-h5 lh1-5">총 {reviews.length}개</div>
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
   </div>
  <div className={styles.container} id="list-item-4">
    <div className={`${styles.header} kr-h3 ${styles.scrollspySection}`}  >상품 문의</div>
  


  <div className={styles.content}>
      <div className="px-0 mb-5">
        <dl className="mb-0">
          <dt
            className="ps-2 border-bottom py-3 d-flex justify-content-between align-items-center kr-body"
            onClick={() => handleToggle(0)}
            ref={buttonRef} // ref를 사용하여 버튼에 접근
          >
            <span className="">프론트앤드 과정을 훈련받으면서 가장 어려웠던 점은?</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666" className="bi bi-chevron-down m-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path>
            </svg>
          </dt>
          <dd className={`py-2 m-0 ${expandedIndex === 0 ? 'd-block' : 'd-none'}`}>
            <span className="d-block">k 디지털 훈련에서 팀프로젝트를 완수해야 하는데 훈련생으로써 ...</span>
          </dd>
        </dl>
  </div>
</div>
</div>
</div>

     
    </div>
  
  );
}
