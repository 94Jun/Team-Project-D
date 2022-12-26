import { useState } from "react";
import { useSelector } from "react-redux";
import { getId } from "../../common";

const PlanningOfDay = (props) => {
  const [selectedPlace, setSelectedPlace] = useState();
  const [selectedTime, setSelectedTime] = useState("08:00");
  const markedPlaces = useSelector((state) => state.plan.markedPlaces);
  const changeSelectedPlace = (e) => {
    setSelectedPlace(e.target.value);
  };
  const changeSelectedTime = (e) => {
    setSelectedTime(e.target.value);
  };
  const addPlanHandler = () => {
    if (selectedPlace && selectedTime) {
      const address = markedPlaces.find((place) => place.name === selectedPlace).address;
      const addedPlan = {
        id: getId(),
        whatDate: props.date,
        time: selectedTime,
        place: selectedPlace,
        address,
      };
      props.onAddPlan(addedPlan);
    }
  };
  const removePlanHandler = (id) => {
    props.onRemovePlan(id)
  }
  const filteredPlan = props.plan
    .filter((plan) => plan.whatDate === props.date)
    .sort((a, b) => {
      const timeA = a.time;
      const timeB = b.time;
      if (timeA < timeB) return -1;
      if (timeA > timeB) return 1;
      return 0;
    });

  return (
    <div>
      <h3>{props.date}일차</h3>
      <div>
        <div>
          <div>
            <span>시작시간</span>
            <input type="time" onChange={changeSelectedTime} value={selectedTime} />
          </div>
          <div>
            <span>장소</span>
            <select onChange={changeSelectedPlace} value={selectedPlace}>
              <option>장소를 선택해 주세요</option>
              {markedPlaces.length > 0 &&
                markedPlaces.map((place) => {
                  return (
                    <option value={place.name} key={place.id}>
                      {place.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div>
          <button onClick={addPlanHandler}>등록</button>
        </div>
      </div>
      {filteredPlan &&
        filteredPlan.length !== 0 &&
        filteredPlan.map((plan) => {
          return (
            <div>
              <div>
                <div>시간 : {plan.time}</div>
                <div>장소 : {plan.place}</div>
                <div>주소 : {plan.address}</div>
              </div>
              <div><button onClick={()=>removePlanHandler(plan.id)}>x</button></div>
            </div>
          );
        })}
    </div>
  );
};

export default PlanningOfDay;
