import React from 'react'
import sd from './sidebar.module.scss'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
 
    <div className={`${sd.Sidebar} overflow-hidden d-flex flex-column align-items-center justify-content-end zup`} id="quick">
    
    <div className={`${sd.svgbox} d-flex flex-column justify-content-between align-items-center flex-grow-1 flex-shrink-0 flex-basis-0 gap-2`}>

      <div className={`${`${sd.svgs} d-flex flex-column justify-content-center align-items-center`} d-flex flex-column justify-content-center align-items-center`}>
    <Link to={"/login"} className='d-flex flex-column align-items-center'>
      <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 28V26.5C1 21.535 5.035 17.5 10 17.5H16C20.965 17.5 25 21.535 25 26.5V28" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 13C9.685 13 7 10.315 7 7C7 3.685 9.685 1 13 1C16.315 1 19 3.685 19 7C19 10.315  16.315 13 13 13Z" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className='d-block mt-2'>로그인</span>
      </Link>
      </div>

      <div className={`${`${sd.svgs} d-flex flex-column justify-content-center align-items-center`} d-flex flex-column justify-content-center align-items-center`}>
      <Link to={"/login"} className='d-flex flex-column align-items-center'>
      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 1V7M3 7H9M3 7C6 2.5 10 1 14 1C20.5 1 27 6 27 14.5C27 23 20 27.5 14 27.5C8 27.5 1 22.5 1 14.5M14 6.5V15L19 20" stroke="#222222" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span className='d-block mt-2'>최근 본 상품</span>
      </Link>
      </div>

      <div className={`${sd.svgs} d-flex flex-column justify-content-center align-items-center`}>
      <Link to={"/login"} className='d-flex flex-column align-items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M9.3877 24.2225C8.95304 24.0465 8.7117 23.9612 8.57837 23.9785C8.41304 23.9985 8.17304 24.1745 7.69304 24.5252C6.8477 25.1465 5.7837 25.5918 4.2037 25.5532C3.40504 25.5345 3.00637 25.5252 2.8277 25.2212C2.64904 24.9185 2.8717 24.4985 3.31704 23.6585C3.93437 22.4932 4.32504 21.1598 3.73304 20.0918C2.7117 18.5665 1.8437 16.7585 1.71704 14.8078C1.65027 13.7476 1.65027 12.6841 1.71704 11.6238C2.06504 6.26518 6.29437 1.99718 11.6037 1.64518C13.4117 1.52518 15.3024 1.52518 17.113 1.64518C22.3997 1.99584 26.6157 6.22918 26.9957 11.5558" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.597 27.752C15.2504 27.5387 12.5837 24.9293 12.365 21.6547C12.3219 21.0065 12.3219 20.3562 12.365 19.708C12.585 16.4333 15.2504 13.8253 18.597 13.6107C19.7384 13.5373 20.9304 13.5373 22.069 13.6107C25.4157 13.8253 28.0824 16.4333 28.301 19.7093C28.3437 20.3493 28.3437 21.0133 28.301 21.6547C28.221 22.8467 27.6744 23.952 27.0304 24.884C26.657 25.5373 26.9037 26.3507 27.293 27.0627C27.573 27.576 27.7144 27.8333 27.601 28.0187C27.4877 28.204 27.237 28.2093 26.7344 28.2213C25.7384 28.2453 25.0677 27.972 24.5344 27.5933C24.2317 27.3787 24.081 27.2707 23.977 27.2587C23.873 27.2467 23.6677 27.328 23.257 27.4907C22.8771 27.  6377 22.4769 27.7258 22.0704 27.752C20.9137 27.8239 19.7537 27.8239 18.597 27.752Z"   stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className='d-block mt-2'>상담 문의</span>
    </Link>
    </div>

    <div className={`${sd.svgs} d-flex flex-column justify-content-center align-items-center`}>
    <Link to={"/login"} className='d-flex flex-column align-items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
  <path d="M24.0562 23.649L33 32M14.5095 27.5418C16.2836 27.5418 18.0403 27.1985 19.6794 26.5316C21.3184 25.8647 22.8077 24.8872 24.0622 23.6548C25.3167 22.4225 26.3118 20.9596 26.9907 19.3495C27.6696 17.7394 28.019 16.0137 28.019 14.2709C28.019 12.5281 27.6696 10.8024 26.9907 9.19235C26.3118 7.58225 25.3167 6.11928 24.0622 4.88696C22.8077 3.65464 21.3184 2.67711 19.6794 2.01019C18.0403 1.34326 16.2836 1 14.5095 1C10.9266 1 7.49037 2.39818 4.95685 4.88696C2.42332 7.37573 1 10.7512 1 14.2709C1 17.7906 2.42332 21.1661 4.95685 23.6548C7.49037 26.1436 10.9266 27.5418 14.5095 27.5418Z" stroke="black" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.67938 14.8594C5.77354 14.7019 5.77354 13.4022 6.67938 13.2446C8.2822 12.9647 9.76544 12.2141 10.9402 11.0884C12.115 9.96267 12.9282 8.5128 13.2763 6.92339L13.3305 6.67478C13.5274 5.77878 14.8 5.77385 15.0043 6.66739L15.0708 6.95785C15.4336 8.54086 16.2558 9.98149 17.4342 11.099C18.6126 12.2166 20.0948 12.9613 21.6948 13.2397C22.6055 13.3997 22.6055 14.7043 21.6948 14.8643C20.0952 15.1432 18.6136 15.8881 17.4356 17.0056C16.2577 18.1231 15.4359 19.5635 15.0732 21.1462L15.0068 21.4366C14.8025 22.3302 13.5298 22.3228 13.3329 21.4292L13.2788 21.1831C12.9314 19.5924 12.1182 18.1413 10.9429 17.0146C9.76754 15.8879 8.28329 15.1392 6.67938 14.8594Z" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    <span className='d-block mt-2'>AI추천</span>
    </Link>
    </div>

    </div>  {/* svgbox end */}
   
    <div className=
        {`${sd.topbtn} overflow-hidden d-flex flex-column align-items-center justify-content-end`}>
      <a href="#">TOP</a>
    </div>

    
   
    </div>
  )
}
