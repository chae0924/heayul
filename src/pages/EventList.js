import React from "react";
import {Link} from 'react-router-dom'
import { Arrow} from '../components/common/_common'
import EventCard from "../components/product/EventCard";

export default function EventList() {
  return (
    <div className="px-3 px-xxl-0">
      <div className="mw mb88 ">
        <div className="location d-flex justify-content-end py-4 align-items-center">
          <span>
            <Link to="/">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='me-1'>
                <path d="M5.66666 10.6666V7.33331H8.33333V10.6666C8.33333 11.0333 8.63333 11.3333 9 11.3333H11C11.3667 11.3333 11.6667 11.0333 11.6667 10.6666V5.99998H12.8C13.1067 5.99998 13.2533 5.61998 13.02 5.41998L7.44666 0.39998C7.19333 0.173314 6.80666 0.173314 6.55333 0.39998L0.979997 5.41998C0.75333 5.61998 0.89333 5.99998 1.2 5.99998H2.33333V10.6666C2.33333 11.0333 2.63333 11.3333 3 11.3333H5C5.36666 11.3333 5.66666 11.0333 5.66666 10.6666Z" fill="#555555"/>
                </svg>
            홈
            </Link>
          </span>
          <span className="mx-2">
            <Arrow icon="gray" />
          </span>
          <span>
            <Link to="/event">기획전</Link>
          </span>
        </div>
        <div
          className="position-relative overflow-hidden rounded-3 mb-3"
          style={{ height: "290px" }}
        >
          <div
            className="position-relative w-100 h-100 overflow-hidden top-0 start-0"
            style={{
              backgroundImage: "url('/img/recipe/0.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <EventCard couponFilter="5|신규회원  " className="event-list mw" />
        <div className="w-100 border-top mt32"></div>
      </div>

      <div className="mw mb88">
        <div
          className="position-relative overflow-hidden rounded-3 mb-3"
          style={{ height: "290px" }}
        >
          <div
            className="position-relative w-100 h-100 overflow-hidden top-0 start-0"
            style={{
              backgroundImage: "url('/img/recipe/0.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <EventCard couponFilter="10|가을 기획전 " className="event-list mw" />
        <div className="w-100 border-top mt32"></div>
      </div>

      <div className="mw mb88">
        <div
          className="position-relative overflow-hidden rounded-3 mb-3"
          style={{ height: "290px" }}
        >
          <div
            className="position-relative w-100 h-100 overflow-hidden top-0 start-0"
            style={{
              backgroundImage: "url('/img/recipe/0.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <EventCard couponFilter="5|회원 특별 " className="event-list mw" />
        <div className="w-100 border-top mt32"></div>
      </div>
    </div>
  );
}
