import PlanItem from "./PlanItem";
import { useEffect, useState } from "react";
import { getqueryData } from "../../common";
import { useSelector } from "react-redux";

const PlanItemList = () => {
  const [planList, setPlanList] = useState();
  const currentUserInfo = useSelector(state=>state.user.currentUserInfo)
  useEffect(() => {
    getqueryData("planList", "uid", "==", currentUserInfo.uid, setPlanList);
  }, [currentUserInfo])
  
  return (
    <div>
      <div>
        {planList && planList.length !== 0 && planList.map((plan) => {
          return <PlanItem key={plan.planId} plan={plan} />;
        })}
      </div>
    </div>
  );
};

export default PlanItemList;
