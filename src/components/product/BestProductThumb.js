export default function ProductThumbSet({ id, style, ea, filterNV, to, className, addToCart , rateview }) {
  
  return (
    <div id={id} className={className}>
      <h2 className="kr_h2 mb26">지금 가장 많이 구매하는 인기상품🔥</h2>
      <div className="BestProductThumb">
        <ul className='d-flex flex-wrap'>
          {
                limitedProducts.map((product) => (
                  <li key={product.productId} className={`${style} product-item`}>
                    <BestProduct info={product} addToCart={addToCart} ></BestProduct>
                  </li>
                ))
          }
        </ul>
      </div>
      <div className="d-flex justify-content-center mt32">
        <Plusbtn icon="arrow" to={to}>더보기</Plusbtn>
      </div>
    </div>
  );


}