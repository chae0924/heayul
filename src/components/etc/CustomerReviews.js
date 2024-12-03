// import { SwiperSlide } from 'swiper/react';
// import cr from "./customerReview.module.scss";
// import rs from "./reviewContents.module.scss";

// export default function CustomerReviews({item}) {
//   return (

//         <SwiperSlide className={rs.className}>
//           <div className={cr.wrapper}>
//             {/* 메인 이미지 */}
//             <img
//               src={item.image_url}
//               className="img-fluid"
//               style={{ borderRadius: "8px" }}
//               alt={item.image_alt}
//             />
//           </div>

//           <div className="d-flex">
//             {/* 리뷰 내용 */}
//             <div className={cr.contentsbox}>
//               <div className={`${cr.text} kr-body`}>
//                 {item.userReview}
//               </div>
//               <div className="kr-h5 ms-2">{item.userId}</div>
//             </div>

//             {/* 작성자 이미지 및 제품 이름 */}
//             <div>
//               <img
//                 src={item.userImg}
//                 className={`img-fluid ${cr.smallpicture}`}
//                 alt={`${item.userId}의 리뷰 이미지`}
//               />
//               <p className={`${cr.productName} kr-body`}>{item.name}</p>
//             </div>
//           </div>
//         </SwiperSlide>
    
//   );
// }
