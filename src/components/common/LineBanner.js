// LineBanner.jsx
import lb from "./lineBanner.module.scss";

import Hsvg from '../../assets/svg/H.svg';  // 이미지 경로 import
import Esvg from '../../assets/svg/E.svg';  // 이미지 경로 import
import Ysvg from '../../assets/svg/Y.svg';  // 이미지 경로 import
import Usvg from '../../assets/svg/U.svg';  // 이미지 경로 import
import Lsvg from '../../assets/svg/L.svg';  // 이미지 경로 import

export default function Linebanner() {
  return (
    <div>

      <div className={lb.greenBanner}>
        <div className={`d-flex ${lb.movingText} mw jusitfy-content-between `}>

            <div style={{ backgroundImage: `url(${Hsvg})` }} className={`${lb.h}`}></div>
            <div style={{ backgroundImage: `url(${Esvg})` }} className={`${lb.e}`}></div>
            <div style={{ backgroundImage: `url(${Ysvg})` }} className={`${lb.y}`}></div>
            <div style={{ backgroundImage: `url(${Usvg})` }} className={`${lb.u}`}></div>
            <div style={{ backgroundImage: `url(${Lsvg})` }} className={`${lb.l}`}></div>
     
        </div>
      </div>
    </div>
  );
}
