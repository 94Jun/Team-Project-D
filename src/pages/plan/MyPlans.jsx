import { NavLink } from "react-router-dom";
import styles from "./Myplan.module.css";
import PlanItem from "../../components/Plan/PlanItem";
import PlanItemList from "../../components/Plan/PlanItemList";
import { useState } from "react";
import { UserProfile } from "../user/ProfileImg";
import { useSelector } from "react-redux";


const MyPlans = () => {
  const [isHovering, setIsHovering] = useState(0);
  const profile = useSelector((state) => state.user.profile);


  return (
<div className={styles.myplan}>

<div className={styles.myplantitlewrap}> 
<div><UserProfile profile={profile} className={styles.profileimg}/></div> 
<div className={styles.myplantitle}> 
<div className={styles.titletextplus}> <h3> 내 계획 </h3> </div> 
<NavLink to = '/makeplan'> <div className={styles.addround}> + 여행 추가 </div> </NavLink>
</div> </div> 



<hr /> 
        <br />
        <PlanItemList /> 
        {/** 누르면 Plan으로 보이기 */}
    </div> 
    
    
    );

  }
export default MyPlans;
