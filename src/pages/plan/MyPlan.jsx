
import { NavLink } from "react-router-dom";
import PlanItem from "../../components/Plan/PlanItem";
import MakePlan from "./MakePlan";

const MyPlan = () => {
    return ( <div>
        <div>
            <h1>나의 여행 계획</h1>
         
            <button>  <NavLink to ='/makeplan' > 계획만들기 </NavLink> </button>
         </div> <br />
         <MakePlan />
        <PlanItem /> 
     
    </div> );
}
 
export default MyPlan;