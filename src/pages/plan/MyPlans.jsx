
import { NavLink } from "react-router-dom";
import styles from "./Myplan.module.css";
import PlanItem from "../../components/Plan/PlanItem";
import { useState } from "react";



const MyPlans = () => {
    const [isHovering, setIsHovering] = useState(0);

    return ( <div  className={styles.myplan}>

        <div className={styles.title}>
        <div className={styles.profile}> </div>
        <div className={styles.userinfo}>
          <div className={styles.titletext}> <h3>나의 여행</h3>  </div> 
           <NavLink to ='/makeplan' className={styles.navlink} >   
          <div className={styles.round} 
           onMouseOver={() => setIsHovering(1)}
           onMouseOut={() => setIsHovering(0)}
           > +  </div></NavLink>

           {isHovering ? (
          <div className={styles.text}>
         내 여행 계획 추가하기
          </div>
        ) : (
          ""
        )} 
        </div></div>
         
         
         <hr />
         <br />
         <div className={styles.planitem}>
        <PlanItem /> 
        </div>
        {/** 누르면 Plan으로 보이기 */}
     
    </div> );
}
 
export default MyPlans;