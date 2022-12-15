import { useState } from "react";
import PlanningOfDay from "../../components/Plan/PlanningOfDay";
import Map from "../../components/Plan/Map"
import PageDesign from "../../components/Plan/pageDesign";
import styles from "../../components/Plan/Page.module.css"

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
      <h2> 000 여행 여행 / 타이틀 </h2>
      <h3>{period}</h3>
      <div className={styles.datelist}> 
        <p>여행 첫날</p>
        <input type="date" onChange={changeStartDate} value={startDate.date} min={new Date().toISOString().slice(0,10)}/>
        <p>여행 마지막날</p>
        <input type="date" onChange={changeEndsDate} value={endsDate.date} min={startDate.date} />
      </div>
       <br />

      <div >
            <div className={styles.round}></div>
            <div className={styles.round}></div>
            <div className={styles.round}></div>
      <button>일행 추가</button>  </div> <br /><br />
 
      <div> <Map /></div>
      {dateValue >= 0 && Array(dateValue + 1).fill().map((date, idx) => { 
        return <div> <PlanningOfDay key={idx} date={idx+1} /> <hr /> </div>
      })}

    </div>

  );
};

export default MakePlan;
