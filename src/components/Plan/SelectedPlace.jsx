import styles from "./SelectedPlace.module.css";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_MARKED_PLACE } from "../../modules/plan";
const SelectedPlace = () => {
  const dispatch = useDispatch();
  const markedPlaces = useSelector((state) => state.plan.markedPlaces);
  const removePlaceHandler = (id) => { 
    dispatch(REMOVE_MARKED_PLACE(id))
  }
  const content = markedPlaces.map((place) => {
    return (
      <div className={styles.place_container} key={place.id}>
        <div>
          <div>
            <span>{place.id}. </span>
            <span>{place.name}</span>
          </div>
          <div>{place.address}</div>
        </div>
        <div className={styles.remove_btn_wrap}>
          <button onClick={()=>removePlaceHandler(place.id)}>x</button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h4>내가 선택한 장소</h4>
      {content}
    </div>
  );
};

export default SelectedPlace;
