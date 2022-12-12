import PlanItem from "./PlanItem";
import { useSelector } from "react-redux";

const PlanItemList = () => {
    const planItemList = useSelector((state) => {
        return state.planItem.planItemList;
      });
    return ( 
        <div>
    <div>
      {planItemList.map((planItem) => {
        return <PlanItem  />;
      })}
    </div>

        </div>
     );
}
 
export default PlanItemList;