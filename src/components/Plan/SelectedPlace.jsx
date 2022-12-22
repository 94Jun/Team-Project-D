import styles from "./SelectedPlace.module.css";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_SELECETED_PLACE } from "../../modules/plan";
const SelectedPlace = () => {
  const dispatch = useDispatch();
  const selectedPlaces = useSelector((state) => state.plan.selectedPlaces);
  const removePlaceHandler = (id) => { 
    dispatch(REMOVE_SELECETED_PLACE(id))
  }
  const content = selectedPlaces.map((place) => {
    return (
      <div className={styles.place_container}>
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
