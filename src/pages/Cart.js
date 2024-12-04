import React, {useEffect} from 'react'

export default function Cart({cartItems}) {
  //cartItems 상태변수
 useEffect(()=>{
  console.log('여기 장바구니'+cartItems)
 },[])
  return (
    <div className='mw'>
      <h2 className='text-center my-5'>장바구니</h2>
      { cartItems.length  > 0 ? 
       <dl className='border-top'>
        <dt className='d-flex border-bottom'>
          <p  style={{width : '20px'}}>id</p>
          <p  style={{width : '70px'}}>이미지</p>
          <p className='d-flex align-items-center col justify-content-between'>
            <span>상세설명</span>
            <span>수량</span>
          </p>
        </dt>
        {
          cartItems.map((v, i)=>{
            return <dd className='d-flex border-bottom py-3'>
              <p style={{width : '20px'}}><input type="checkbox"  /><label>{i + 1}</label></p>
              
              <img src={v.image_url} alt={v.image_alt} className='img-fluid rounded-4' style={{width : '70px'}}></img>
              <div className='d-flex align-items-center col justify-content-between'>
                   <p>
                   {v.name}
                  </p>
                  { v.quantity }
              </div>
              </dd>
          })
        }
       </dl>  
       : <p>장바구니가 비어있습니다.</p>
    }


    </div>
  )
}
