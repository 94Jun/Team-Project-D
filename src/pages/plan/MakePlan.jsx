import { useState } from "react";


const MakePlan = () => {
    const [startDate, setStartDate]=useState();
    const [endsDate, setEndsDate]=useState();




    return ( 
        <div>
         <p> 즐거운 여행 계획을 시작하세요 </p>

         여행을 언제 시작하나요? {startDate} <br />
         <input type="date" id="start" name="trip-start"
       value={startDate}
       min="2023-01-01" max="2080-12-31" onChange={(e)=>setStartDate(e.target.value)}/><br />
         
         여행을 언제 끝내나요? {endsDate} <br />
         <input type="date" id="ends" name="trip-start"
       value={endsDate}
       min={startDate} max="2080-12-31" onChange={(e)=>setEndsDate(e.target.value)}  /><br />
        <button > 날짜? </button>
         0박 0일 <br />

         여행을 어디로 떠나나요? <br /> 
         
         <input type="text" /> <button>검색</button><br />        

         <h4>Day 1  </h4> 
         <li>부산역 </li>
         <li>도착시간 : 12:00 pm </li>

         <h4>Day 3  </h4> 
         <li>부산역 </li>
         <li>도착시간 : 12:00 pm </li>

         <h4>Day 4  </h4> 
         <li>부산역 </li>
         <li>도착시간 : 12:00 pm </li>

        </div>
     );
}
 
export default MakePlan;