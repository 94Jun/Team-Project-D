import styles from "./PostItem.module.css";
import { storage } from "../../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { useEffect } from "react";
import PostItemImg from "./PostItemImg";
const PostItemContent = (props) => {
  const { images, hashtags, text } = props;
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
              <span className={styles.post_contents_hashtags} key={idx}>
                {tag}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default PostItemContent;