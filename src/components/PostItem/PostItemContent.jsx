import styles from "./PostItem.module.css";
import { storage } from "../../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { useEffect } from "react";
import PostItemImg from "./PostItemImg";
import { useSelector, useDispatch } from "react-redux";
import { updatePushData } from "../../common";
import { useNavigate } from "react-router-dom";
import { REMOVE_RECENT_SEARCH, ADD_RECENT_SEARCH } from "../../modules/user";
import { SET_CURRENT_SEARCH, SET_SEARCH_LAST_VISIBLE } from "../../modules/search";
import { TOGGLE_SEARCH_MODAL } from "../../modules/modal";


  
const PostItemContent = (props) => {
  const { images, hashtags, text } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  const [imgRefList, setImgRefList] = useState([]);

  useEffect(() => {
    switch (images.length) {
      case 4:
        setImgRefList((prev) => [...prev, ref(storage, `images/${images[3]}`)]);
      case 3:
        setImgRefList((prev) => [...prev, ref(storage, `images/${images[2]}`)]);
      case 2:
        setImgRefList((prev) => [...prev, ref(storage, `images/${images[1]}`)]);
      case 1:
        setImgRefList((prev) => [...prev, ref(storage, `images/${images[0]}`)]);
        break;
      default:
        break;
    }
  }, []);
  const searchHandler = (content) => {
    try {
      if (currentUserInfo.recentSearchs.includes(content)) {
        updatePushData("userList", currentUserInfo.uid, "recentSearchs", content, false);
        dispatch(REMOVE_RECENT_SEARCH(content));
      }
      updatePushData("userList", currentUserInfo.uid, "recentSearchs", content, true);
      dispatch(SET_CURRENT_SEARCH(content));
      dispatch(ADD_RECENT_SEARCH(content));
      dispatch(SET_SEARCH_LAST_VISIBLE(null))
      navigate("/search");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className={styles.post_contents}>
      <div className={styles.post_contents_images}>
        {imgRefList.map((ref, idx) => {
          return <PostItemImg imgRef={ref} key={idx} />;
        })}
      </div>

      <div className={styles.post_contents_text}>{text}</div>
      <div className={styles.hashtags_wrap}>
        {hashtags &&
          hashtags.map((tag, idx) => {
            return (
              <span className={styles.post_contents_hashtags} key={idx} onClick={() => searchHandler(tag)}>
                {tag}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default PostItemContent;