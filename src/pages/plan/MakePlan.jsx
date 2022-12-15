import { useState } from "react";
import PlanningOfDay from "../../components/Plan/PlanningOfDay";
import Map from "../../components/Plan/Map"

const MakePlan = () => {
  const [startDate, setStartDate] = useState({date : new Date().toISOString().slice(0,10), value : Date.now()});
  const [endsDate, setEndsDate] = useState({ date: new Date().toISOString().slice(0, 10), value: Date.now() });

  const changeStartDate = (e) => {
    setStartDate((prev) => { 
      return {date : e.target.value, value : e.target.valueAsNumber}
    })
  }
  const changeEndsDate = (e) => { 
    setEndsDate((prev) => { 
      return {date : e.target.value, value : e.target.valueAsNumber}
    })
  }
  const dateValue = Math.ceil((endsDate.value - startDate.value) / 86400000);
  
  let period = "종료은 시작일 보다 같거나 커야합니다.";
  if (dateValue === 0) period = "당일";
  if (dateValue > 0) period = `${dateValue}박 ${dateValue + 1}일`;
  
  
  return (
    <div>
      <p>즐거운 여행 계획을 시작하세요</p>
      <div>
        <p>여행을 언제 시작하나요?</p>
        <input type="date" onChange={changeStartDate} value={startDate.date} min={new Date().toISOString().slice(0,10)}/>
      </div>
      <div>
        <p>여행을 언제 끝내나요?</p>
        <input type="date" onChange={changeEndsDate} value={endsDate.date} min={startDate.date} />
      </div>
      <div>{period}</div>
      <div> <Map /></div>
      {dateValue >= 0 && Array(dateValue + 1).fill().map((date, idx) => { 
        return <PlanningOfDay key={idx} date={idx+1} />
      })}
    </div>

  );
};

export default MakePlan;
