import PlanPlace from "../../components/Plan/PlanPlace";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleData } from "../../common";
import { useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
const Plan = () => {
  const [plan, setPlan] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const planId = params.planId;
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  const length = plan?.period === "당일" ? 1 : Number(plan?.period.slice(-2, -1));
  useEffect(() => {
    getSingleData("planList", planId, setPlan);
  }, [planId]);
  const removePlanHandler = async () => {
    await deleteDoc(doc(db, "planList", planId));
    navigate("/myplans");
  };

  return (
    <div>
      <h2>{plan?.title}</h2>
      {currentUserInfo.uid === plan?.uid && <button onClick={removePlanHandler}>삭제</button>}
      <h3>
        {plan?.startDate} ~ {plan?.endsDate}
      </h3>
      <p> {plan?.period}</p>
      <hr />
      <div> 지도사진 or 장소사진 </div>
      {length &&
        Array(length)
          .fill()
          .map((el, idx) => {
            const filteredPlan = plan.plan.filter((plan) => plan.whatDate === idx + 1);
            return <PlanPlace key={idx} date={idx + 1} plan={filteredPlan} />;
          })}
    </div>
  );
};

export default Plan;
