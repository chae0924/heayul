<div className="">
  {cartItems.length > 0 ? (
    <>
      {cartItems.map((v, i) => (
        <div
          key={i}
          className="d-md-flex col mb32 justify-content-between align-items-center"
        >
          <div className="d-flex col-7">
            <div className="pe-3">
              <img
                src={v.image_url}
                alt={v.image_alt}
                className="img-fluid rounded-4"
                style={{ width: "80px", height: "80px" }}
              ></img>
            </div>
            <div className="px-0">
              <p className="mb-1 px-0 fs18 fw400">{v.name}</p>
              <p className="mb-2 px-0 kr-body text-tintdark">
                {v.simple_description}
              </p>
              <p className="mb-0 px-0 kr-h6">
                {Number(v.discountPrice) > 0
                  ? v.discountPrice
                  : v.originalPrice}
                <span className="pe-3">원</span>
                <span className="pe-2 kr-btn text-muted">X</span>
                <span>{v.quantity}개</span>
              </p>
            </div>
          </div>
          <div className="d-flex col-5">
            <div className="d-flex justify-content-center align-items-center w-100 px-3 kr-h6">
              배송중
            </div>
            <div className="row mx-0 g-1">
              <button className={`${styles.btnPlsit} btn`}>재구매하기</button>
              <button className={`${styles.btnPlsit} btn`}>
                리뷰 작성하기
              </button>
            </div>
          </div>
        </div>
      ))}
      <Plusbtn className="col-3 mx-auto">더보기</Plusbtn>
    </>
  ) : (
    <div className="">
      <p>1개월간 주문 내역이 없습니다.</p>
      <button className="btn btn-primary">베스트 상품 보기</button>
    </div>
  )}
</div>;
