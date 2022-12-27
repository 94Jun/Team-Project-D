const PlanPlace = (props) => {
  return (
    <div>
      <p>Day {props.date}</p>
      <ul>
        {props.plan.map((place) => {
          return (
            <li>
              <p>{place.time}</p>
              <p>{place.place}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlanPlace;
