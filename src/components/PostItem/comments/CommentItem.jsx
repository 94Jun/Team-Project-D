import { useEffect, useState } from "react";
import { getSingleData } from "../../../common";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../config/firebase";
import styles from "./PostItemComments.module.css";
const CommentItem = (props) => {
  const [commentWriterInfo, setCommentWriterInfo] = useState({})
  const [profile, setProfile] = useState(null);

  //프로필 스토리지에서 불러오기
  const getProfile = async () => { 
    const profileRef = ref(storage, `images/${commentWriterInfo.profile}`);
    const url = await getDownloadURL(profileRef)
    setProfile(url)
  }

  //코멘트 작성자 데이터 불러오기
  useEffect(() => {
    getSingleData("userList", props.comment.writer, setCommentWriterInfo)
  }, [])
  useEffect(() => {
    if (commentWriterInfo.profile) { 
      getProfile();
    }
  },[commentWriterInfo.profile])

  return (
    <div className={styles.comment_item}>
      <div className={styles.comment_profile_wrap}>
        <img src={profile} />
      </div>
      <div>
        <span className={styles.comment_writer_name}>{commentWriterInfo.name}</span>
        <span className={styles.comment_date}>{props.comment.writeDate}</span>
        <p className={styles.comment_text}>{props.comment.text}</p>
      </div>
    </div>
  );
};

export default CommentItem;
