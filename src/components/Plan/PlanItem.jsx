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
          <p><b>{props.plan.title}</b></p>
          <br />
          <p>{props.plan.startDate} </p>
          <p> - </p>
          <p>{props.plan.endsDate}</p>
          <br />
          <p>{props.plan.period}</p>
        </div>
      </button>
    </div>
  );
};

export default PlanItem;
