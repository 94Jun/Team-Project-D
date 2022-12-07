import CameraAltIcon from '@mui/icons-material/CameraAlt';
import styles from "./UserPage.module.css";

const MyPagePost = () => {
  return (
    <div className={styles.post_main}>
      <div className={styles.post_memo}>
      <CameraAltIcon/>
      <h3>사진 공유</h3><br/>
      <p className={styles.post_comment}>사진을 공유하면 프로필에 표시됩니다</p>
      <button className={styles.post_button}>사진 추가하기</button>
      </div> 
    </div> //글 작성 모달창과 버튼 연결
    );
}
 
export default MyPagePost;