import { NavLink } from "react-router-dom";
import styles from "./Myplan.module.css";
import PlanItem from "../../components/Plan/PlanItem";
import PlanItemList from "../../components/Plan/PlanItemList";


const MyPlans = () => {
  const [isHovering, setIsHovering] = useState(0);


  return (
    <div className={styles.myplan}>

        <br />
        <PlanItemList /> 
        {/** 누르면 Plan으로 보이기 */}
     
    </div> );

  }
export default MyPlans;
