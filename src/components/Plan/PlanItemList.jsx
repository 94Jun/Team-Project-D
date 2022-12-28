import PlanItem from "./PlanItem";
import { useEffect, useState } from "react";
import { getNowValue, getqueryData } from "../../common";
import { useSelector } from "react-redux";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const PlanItemList = () => {
  const [planList, setPlanList] = useState();
  const [participatedPlans, setParticipatedPlans] = useState();
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  const getparticipatedPlans = async () => {
    const q = query(collection(db, "planList"), where("companion", "array-contains", currentUserInfo.uid), where("uid", "!=", currentUserInfo.uid));
    const querySnapshot = await getDocs(q);
    const loadedData = querySnapshot.docs.map((doc) => doc.data());
    setParticipatedPlans(loadedData);
  };
  useEffect(() => {
    getqueryData("planList", "uid", "==", currentUserInfo.uid, setPlanList);
    getparticipatedPlans();
  }, [currentUserInfo]);
  useEffect(() => {
    if (participatedPlans) {
      setPlanList((prev) => {
        return [...prev, ...participatedPlans];
      });
    }
  }, [participatedPlans]);
  const prevPlanList =
    planList && participatedPlans
      ? planList.filter((plan) => {
          const nowValue = getNowValue();
          const endsValue = new Date(plan.endsDate.slice(0, 4), plan.endsDate.slice(5, 7) - 1, Number(plan.endsDate.slice(-2)) + 1).valueOf();
          return nowValue > endsValue;
        })
      : null;
  const nextPlanList =
    planList && participatedPlans
      ? planList.filter((plan) => {
          const nowValue = getNowValue();
          const endsValue = new Date(plan.endsDate.slice(0, 4), plan.endsDate.slice(5, 7) - 1, Number(plan.endsDate.slice(-2)) + 1).valueOf();
          return nowValue <= endsValue;
        })
      : null;
  return (
    <div>
      <div>
        <h3>지난 여행</h3>
        {prevPlanList && prevPlanList.length !== 0 ? (
          prevPlanList.map((plan) => {
            return <PlanItem key={plan.planId} plan={plan} />;
          })
        ) : (
          <div>완료한 여행이 없습니다.</div>
        )}
        <h3>진행(계획)중인 여행</h3>
        {nextPlanList && nextPlanList.length !== 0 ? (
          nextPlanList.map((plan) => {
            return <PlanItem key={plan.planId} plan={plan} />;
          })
        ) : (
          <div>계획중인 여행이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default PlanItemList;
