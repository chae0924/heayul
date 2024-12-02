import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Plusbtn } from "../common/_common";

import styles from './SaleItemSet.module.scss';
import productdb from '../../data/product.json';
import SaleProduct from './SaleProduct';
import { Pagination } from 'react-bootstrap';

export default function SaleItemSet({ id, style, ea, filterNV, to, className }) {

  const productset = productdb.filter((item) => item.badges && item.badges.includes('S'));

  const itemsPerPage = 4;
  const maxPages = 5;
  const maxItems = itemsPerPage * maxPages;
  const visibleProducts = productset.slice(0, maxItems);

  return (
    <div className={`${className || ''}`} style={style}>
      <div className='d-flex position-relative'>
        <div className='gap-3 p-2'>
          <h2 className="kr-h2 d-flex w-100" style={{ textAlign: 'left' }}>
            <span>놓치기 아쉬운</span>
            <br />
            <span className={styles.textGreen}>할인 상품</span></h2>

          <svg
            className="vector-5"
            width="180"
            height="1"
            viewBox="0 0 180 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1L180 1.00002" stroke="#898989" />
          </svg>
          <p className="kr-body d-flex w-100 p-2">
            가격 인하 상품을<br />
            지금 바로 확인해보세요!
          </p>

          <Plusbtn>더보기</Plusbtn>
          <Pagination></Pagination>

        </div>


        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={itemsPerPage}
          slidesPerGroup={itemsPerPage}
          navigation
          loop={true}
        >
          {visibleProducts.map((product) => (
            <SwiperSlide key={product.productId}>
              <SaleProduct info={product} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}
