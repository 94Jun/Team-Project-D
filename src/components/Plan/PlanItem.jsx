import styles from "./PlanItem.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PlanItem = (props) => {
  const navigate = useNavigate();
  const currentUserInfo = useSelector(state => state.user.currentUserInfo);
  const gotoplan = () => {
    navigate(`/plan/${props.plan.planId}`);
  };

  return (
    <div className={styles.listbox}>
      <button onClick={gotoplan}>
        <div className={styles.myplanboxs}>
          <p>{props.plan.title}</p>
          <p>여행시작 : {props.plan.startDate}</p>
          <p>여행끝 : {props.plan.endsDate}</p>
          <p>{props.plan.period}</p>
          {currentUserInfo.uid !== props.plan.uid && <p>참여하는 여행</p>}
        </div>
      </button>
    </div>
  );
};

export default PlanItem;
