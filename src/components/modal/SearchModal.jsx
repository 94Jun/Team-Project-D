import styles from "./SearchModal.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TOGGLE_SEARCH_MODAL } from "../../modules/modal";
import SearchLog from "../search/SearchLog";
const SearchModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const changeInputHandler = (e) => {
    setUserInput(e.target.value);
  };
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(TOGGLE_SEARCH_MODAL());
    navigate("/search", { replace: false, state: userInput });
  };
  return (
    <div className={styles.search_modal}>
      <h2 className={styles.search_modal_header}>검색</h2>
      <form className={styles.search_form} onSubmit={searchHandler}>
        <div className={styles.search_input_wrap}>
          <input
            onChange={changeInputHandler}
            value={userInput}
            placeholder="검색할 내용을 입력하세요"
          ></input>
          <button className={styles.search_btn}>
            <SearchIcon />
          </button>
        </div>
      </form>
      <SearchLog />
    </div>
  );
};

export default SearchModal;
