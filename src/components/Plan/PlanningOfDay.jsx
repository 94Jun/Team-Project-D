import { useState } from "react";
import { useSelector } from "react-redux";

const PlanningOfDay = (props) => {
  const [select, setSelect] = useState();
  const selectedPlaces = useSelector(state => state.plan.selectedPlaces);
  const onChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div>
      <h3>{props.date}일차</h3>
      <p>여행계획등록</p>
      <select onChange={onChange} value={select}>
        {selectedPlaces.length > 0 ? selectedPlaces.map(place => { 
          return <option value={place.name}>{place.name}</option>
        }) : <option>장소를 선택해 주세요</option>}
      </select>
      <br />
      {select}
    </div>
  );
};

export default PlanningOfDay;
