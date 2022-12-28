import { useState } from "react";
import PlanningOfDay from "../../components/Plan/PlanningOfDay";
import Map from "../../components/Plan/Map";
import styles from "../plan/MakePlan.module.css";
import SelectedPlace from "../../components/Plan/SelectedPlace";
import { addData, getId } from "../../common";
import { useSelector } from "react-redux";
import useToggle from "../../hooks/useToggle";
import { useNavigate } from "react-router-dom";

const MakePlan = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState({ date: new Date().toISOString().slice(0, 10), value: Date.now() });
  const [endsDate, setEndsDate] = useState({ date: new Date().toISOString().slice(0, 10), value: Date.now() });
  const [plan, setPlan] = useState([]);
  const [title, setTitle] = useState("여행 타이틀");
  const [editTitleIsShown, toggleEditTitleHandler] = useToggle(false);
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  const addPlanHandler = (addedplan) => {
    const updatedPlan = [...plan, addedplan];
    setPlan(updatedPlan);
  };
  const removePlanHandler = (id) => {
    const filteredPlan = plan.filter((plan) => {
      return plan.id !== id;
    });
    setPlan(filteredPlan);
  };
  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const changeStartDate = (e) => {
    setStartDate({ date: e.target.value, value: e.target.valueAsNumber });
  };
  const changeEndsDate = (e) => {
    setEndsDate({ date: e.target.value, value: e.target.valueAsNumber });
  };
  const dateValue = Math.ceil((endsDate.value - startDate.value) / 86400000);

  let period = "종료은 시작일 보다 같거나 커야합니다.";
  if (dateValue === 0) period = "당일";
  if (dateValue > 0) period = `${dateValue}박 ${dateValue + 1}일`;

  //여행계획 파이어베이스 업로드
  const addFullPlanHandler = () => {
    if (plan.length > 0) {
      try {
        const newPlan = {
          uid: currentUserInfo.uid,
          planId: getId(),
          startDate: startDate.date,
          endsDate: endsDate.date,
          title,
          plan,
          period,
          companion : [currentUserInfo.uid],
        };
        addData("planList", newPlan.planId, newPlan);
        alert("계획작성이 완료되었습니다.");
        navigate('/myplans')
      } catch (e) {}
    }
  };

  return ( <div  className={styles.makeplanall}>
    <div> <h2>내 여행 계획하기 </h2> </div> 
    <div>
      <div className={styles.title}>
        {editTitleIsShown ? <input type="text" onChange={changeTitleHandler} value={title} /> : <h3> {title}</h3>}
        <button onClick={toggleEditTitleHandler}>{editTitleIsShown ? "수정 완료" : "타이틀 수정"}</button>
        &nbsp;&nbsp;&nbsp;<h3>{period}</h3>
      </div>

    
      <div className={styles.datelist}>
        <p>Start</p>&nbsp;
        <input type="date" onChange={changeStartDate} value={startDate.date} min={new Date().toISOString().slice(0, 10)} />
        <p>Ends</p>&nbsp;
        <input type="date" onChange={changeEndsDate} value={endsDate.date} min={startDate.date} />

      </div>

      
      <br />

      <div>
        <Map />
      </div>
      <SelectedPlace />
      {dateValue >= 0 &&
        Array(dateValue + 1)
          .fill()
          .map((date, idx) => {
            return (
              <div key={idx} className={styles.days}>
                <PlanningOfDay date={idx + 1} onAddPlan={addPlanHandler} onRemovePlan={removePlanHandler} plan={plan} /> <hr />
              </div>
            );
          })}
      <button onClick={addFullPlanHandler}>계획 완료</button>
    </div> <br /><br /><br /><br /><br />
    </div> );
};

export default MakePlan;
