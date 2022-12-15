
import { NavLink } from "react-router-dom";

import PlanItem from "../../components/Plan/PlanItem";
import SearchMap from "../../components/Plan/SearchMap";


const MyPlans = () => {
    return ( <div>
        <div>
            <h1>나의 여행 계획</h1>

         <button>  <NavLink to ='/makeplan' > 계획만들기 </NavLink> </button>

         </div> <br />
         <SearchMap />
        <PlanItem /> 
        {/** 누르면 Plan으로 보이기 */}
     
    </div> );
}
 
export default MyPlans;