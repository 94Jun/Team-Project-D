import styles from "./Search.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updatePushData } from "../../common";
import { REMOVE_RECENT_SEARCH } from "../../modules/user";

const SearchLog = () => {
  const dispatch = useDispatch();
  const currentUserInfo = useSelector(state => state.user.currentUserInfo);
  const recentSearchs = currentUserInfo.recentSearchs ? [...currentUserInfo.recentSearchs].reverse() : null;
  const removeRecentSearchHandler = async (content) => { 
    try {
      updatePushData("userList", currentUserInfo.uid, "recentSearchs", content, false);
      dispatch(REMOVE_RECENT_SEARCH(content))
    } catch (e) { 
      console.log(e.message)
    }
  }

  return (
    <div className={styles.search_log}>
      <h3 className={styles.recent_search}>최근 검색어</h3>
      {recentSearchs &&
        recentSearchs.map((content) => {
          return (
            <div
              key={currentUserInfo.uid + content}
              className={styles.search_content_wrap}
            >
              <p className={styles.search_content}>{content}</p>
              <button
                className={styles.remove_btn}
                onClick={()=>removeRecentSearchHandler(content)}
              >
                <span>x</span>
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default SearchLog;
