import styles from "./PlanPlace.module.css";
const PlanPlace = (props) => {
  const changeCenterHandler = (position) => { 
    props.onChangeCenter(position)
  }
  return (
    <div className={styles.day_container}>
      <h3>Day {props.date}</h3>
      <ul>
        {props.plan.map((place) => {
          return (
            <li className={styles.list} onClick={() => changeCenterHandler(place.position)} key={place.id}>
              <div className={styles.place}>
                <p>{place.time}</p>
                <p>{place.place}</p>
              </div>
              <p className={styles.address}>{place.address}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlanPlace;
