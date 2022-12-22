import { useState } from "react";

const PlanningOfDay = (props) => {

    const [select, setSelect] = useState();
    const onChange = (e) => {
      setSelect(e.target.value); 
    }

    return (
      <div>
        <h3>{props.date}일차</h3>
        <p>여행계획등록</p>
        <select  onChange={onChange}  value={select} >
			<option value={1}>하나</option>
			<option value={2}>둘</option>
			<option value={3}>셋</option>
		</select>
<br />
{select}
      </div>
    );
  };
  
  export default PlanningOfDay;