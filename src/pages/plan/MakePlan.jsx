import { useState } from "react";
import PlanningOfDay from "../../components/Plan/PlanningOfDay";
import Map from "../../components/Plan/Map";
import styles from "../../components/Plan/Page.module.css";
import SelectedPlace from "../../components/Plan/SelectedPlace";
import { addData, getId } from "../../common";
import { useSelector } from "react-redux";
import useToggle from "../../hooks/useToggle";

const MakePlan = () => {
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
    try {
      const newPlan = {
        uid: currentUserInfo.uid,
        planId: getId(),
        startDate: startDate.date,
        endsDate: endsDate.date,
        title,
        plan,
        period,
      };
      addData("planList", newPlan.planId, newPlan);
      alert("계획작성이 완료되었습니다.");
    } catch (e) {}
  };

  return (
    <div>
      <div>
        {editTitleIsShown ? <input type="text" onChange={changeTitleHandler} value={title} /> : <h2> {title}</h2>}
        <button onClick={toggleEditTitleHandler}>{editTitleIsShown ? "수정 완료" : "타이틀 수정"}</button>
      </div>
      <h3>{period}</h3>
      <div className={styles.datelist}>
        <p>여행 첫날</p>
        <input type="date" onChange={changeStartDate} value={startDate.date} min={new Date().toISOString().slice(0, 10)} />
        <p>여행 마지막날</p>
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
              <div key={idx}>
                <PlanningOfDay date={idx + 1} onAddPlan={addPlanHandler} onRemovePlan={removePlanHandler} plan={plan} /> <hr />
              </div>
            );
          })}
      <button onClick={addFullPlanHandler}>계획 완료</button>
    </div>
  );
};

export default MakePlan;
