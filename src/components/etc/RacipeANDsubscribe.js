import rs from "./RacipeANDsubscribe.module.scss";
import { Link } from "react-router-dom";

export default function RacipeANDsubscribe() {
  return (
    <div className={rs.boxs}>
      <div className="d-flex justify-content-center gap-4">
        
        <Link to="/Recipe" className={rs.artbox1}>
          <div>
            <h3 className="kr_h2">레시피 공유하고<br></br>요리 재료 받기!</h3>
              <div className={rs.arrowbox}>

                  <svg className={rs.arrowbar} width="46"  viewBox="0 0 46 4" fill="none" 
                          xmlns="http://   www.w3.org/2000/svg">
                          <path d="M2.25 2L43.25 2" stroke="#222222" stroke-width="4"
                          stroke-linecap="round"  stroke-linejoin="round"/>
                  </svg>
              
                  <svg className={rs.arrowhead} width="20" viewBox="0 0 20 41" fill="none"
                          xmlns="http://  www.w3.org/2000/svg">
                          <path d="M2.25 2L17.75 21L2.25 38.5" stroke="#222222" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

            </div>
          </div>
          <div>
            <img className={rs.art1} src="/img/RacipeANDsubscribe/imgLeft.svg" alt="" />
          </div>
        </Link>

        <Link to="/Subscription" className={rs.artbox2}>
          <div>
            <h3 className="kr_h2">정기배송<br></br>구독하러 가기!</h3>
            <div className={rs.arrowbox}>

                  <svg className={rs.arrowbar} width="46"  viewBox="0 0 46 4" fill="none" 
                          xmlns="http://   www.w3.org/2000/svg">
                          <path d="M2.25 2L43.25 2" stroke="#222222" stroke-width="4"
                          stroke-linecap="round"  stroke-linejoin="round"/>
                  </svg>
              
                  <svg className={rs.arrowhead} width="20" viewBox="0 0 20 41" fill="none"
                          xmlns="http://  www.w3.org/2000/svg">
                          <path d="M2.25 2L17.75 21L2.25 38.5" stroke="#222222" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
            </div>
          </div>
          <div>
            <img className={rs.art2} src="/img/RacipeANDsubscribe/imgRight.svg" alt="" />
          </div>
        </Link>
      
      </div>
    </div>
  );
}
