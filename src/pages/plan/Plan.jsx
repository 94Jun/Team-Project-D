import PlanPlace from "../../components/Plan/PlanPlace";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleData } from "../../common";
const Plan = () => {
  const [plan, setPlan] = useState();
  const params = useParams();
  const planId = params.planId;
  const length = Number(plan?.period.slice(-2, -1));
  useEffect(() => {
    getSingleData("planList", planId, setPlan);
  }, [planId]);

  return (
    <div>
      <h2>{plan?.title}</h2>
      <h3>
        {plan?.startDate} ~ {plan?.endsDate}
      </h3>
      <p> {plan?.period}</p>
      <hr />

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
