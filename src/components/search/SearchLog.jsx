import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Search.module.css";
import { REMOVE_RECENT_SEARCH } from "../../modules/user";
const SearchLog = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const currentUser = useSelector((state) => state.user.currentUser);
  const user = userList.find((user) => {
    return user.uid === currentUser;
  });
  const [recentSearchs, setRecentSearchs] = useState(user.recentSearchs);
  const filteredRecentSearchs =
    recentSearchs.length > 0
      ? recentSearchs.filter((content, idx) => {
          return recentSearchs.indexOf(content) === idx;
        })
      : null;
  useEffect(() => {
    setRecentSearchs(user.recentSearchs);
  }, [user.recentSearchs]);

  const removeRecentSearchHandler = (e) => {
    console.log(e.target);
    const removedContent =
      e.target.parentElement.previousElementSibling.textContent;
    dispatch(REMOVE_RECENT_SEARCH({ removedContent }));
  };

  return (
    <div className={styles.search_log}>
      <h3 className={styles.recent_search}>최근 검색어</h3>
      {filteredRecentSearchs &&
        filteredRecentSearchs.reverse().map((content) => {
          return (
            <div
              key={currentUser + content}
              className={styles.search_content_wrap}
            >
              <p className={styles.search_content}>{content}</p>
              <button
                className={styles.remove_btn}
                onClick={removeRecentSearchHandler}
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
