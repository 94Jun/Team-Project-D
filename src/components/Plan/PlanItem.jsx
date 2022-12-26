import styles from "./PlanItem.module.css";
import { useNavigate } from "react-router-dom";

const PlanItem = (props) => {
  const navigate = useNavigate();
  const gotoplan = () => {
    navigate(`/plan/${props.plan.planId}`);
  };

  return (
    <div className={styles.listbox}>
      <button onClick={gotoplan}>
        <div className={styles.myplanboxs}>
          <p>{props.plan.title}</p>
          <p>Start : {props.plan.startDate}</p>
          <p>Ends  : {props.plan.endsDate}</p>
          <p>{props.plan.period}</p>
        </div>
      </button>
    </div>
  );
};

export default PlanItem;
