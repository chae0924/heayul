import cr from "./customerReview.module.scss";

export default function CustomerReviews() {
  return (
    <div>
      <div>
        <img
          src="/img/partner/test.png"
          className="img-fluid"
          style={{ borderRadius: "8px" }} // 인라인 스타일로 border-radius 적용
          alt="food"
        />
      </div>

      <div className="d-flex">
        <div className={cr.contentsbox}>
          <div className={`${cr.text} kr-body `}>
            대박적 리뷰 내용들 좋은 말 좋은 칭찬 좋은 말만 적어주세요 너무 길면
            잘리게 제작해주셔야 합니다.
          </div>
          <div className="kr-h5 ms-2">price</div>
        </div>

        <div>
          <img
            src="/img/partner/test.png"
            className={`img-fluid ${cr.smallpicture}`}
            alt="food"
          />
          <p className={`${cr.productName} kr-body`}>제품이름입니다</p>
        </div>
      </div>
    </div>
  );
}
