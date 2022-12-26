import { NavLink } from "react-router-dom";
import styles from "./Myplan.module.css";
import PlanItem from "../../components/Plan/PlanItem";
import { useState } from "react";


const MyPlans = () => {
  const [isHovering, setIsHovering] = useState(0);



  return (
    <div className={styles.myplan}>

      <div className={styles.myplantitlewrap}>
      <div className={styles.myplantitle}>
        <div className={styles.profileimg}> </div>  
              
        <div  className={styles.titletextplus}>
          <div className={styles.titletext}> <br /><br /><h3>나의 여행</h3></div>
          <div className="Linkplus"> <NavLink to="/makeplan" className={styles.navlink}> 
              <div className={styles.addround} onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)} >
                +  </div>  </NavLink>
            {isHovering ? (
              <div className={styles.text}> <u>내 여행 계획 추가하기</u></div>
            ) : (
              ""
            )}
          </div>
        </div>       
      </div>
      </div>

      <br />  <hr /> <br />


      <div className={styles.planitem}>
        <PlanItem />
      </div>
      {/** 누르면 Plan으로 보이기 */}
    </div>
  );
};

export default MyPlans;
