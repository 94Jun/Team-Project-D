import styles from "./PostingModal.module.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { ADD_POSTING } from "../../modules/posting";
import { INITIAL_STATE_HASH } from "../../modules/hash";
import { INITIAL_STATE_IMG } from "../../modules/upload";
import HashTag from "./HashTag";
import Upload from "./Upload";
import UploadImg from "./UploadImg";
import "firebase/compat/storage";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { storage } from "../../config/firebase";
import { ref, uploadString } from "firebase/storage";

//해쉬태그 작성후 스패이스 안누르고 바로 업로드 하면 해쉬태그 안들어감
/* 기능 남은거
  드래그앤 드롭
  공개 비공개
*/
const PostingModal = (props) => {
  //posting-Text 저장 state
  const [text, setText] = useState("");
  //업로드 이미지 저장 state
  const [imgs, setImgs] = useState();
  //모달창 Open,Close 함수
  //const handleOpen = () => props.setOpen(true);
  const handleClose = () => props.setOpen(false);

  //reducer
  const dispatch = useDispatch();
  //데이터 전송 확인용 posting 모듈에서 postingList를 useSelector로 받아옴
  const postingList = useSelector((state) => state.posting.postingList);

  //해쉬태그 redux
  const HashTagList = useSelector((state) => state.hash.HashList);
  //user redcer 에서 useSelector로 임이로 정의된   currentUser: "u1"를 받아옴
  const currentUser = useSelector((state) => state.user.currentUser);

  const imgList = useSelector((state) => state.upload.ImgList);
  //피드 작성 textOnChange
  const textOnChange = (e) => {
    setText(e.target.value);
  };

  // posting data전송 함수
  const addPosting = async () => {
    //데이터 베이스 추가
    const addedPosting = {
      //전달할 데이터 정의
      pid: Math.random().toString(),
      timestamp: new Date().toLocaleDateString(),
      like: [],
      writer: currentUser,
      comments: [],
      contents: {
        images: [],
        hashtags: HashTagList,
        text: text,
      },
      //writer : currentUser
    };

    try {
      for (let i = 0; i < imgList.length; i++) {
        const randomNum = Math.random().toString(); //파일이름은 겹치지 않게 random으로
        const imageRef = ref(storage, `images/${randomNum}`);
        uploadString(imageRef, imgList[i], "data_url");
        addedPosting.contents.images.push(randomNum);
      } //uploadString:data_url,base64데이터 업로드용
      //imageRef=ref(storage,폴더이름/파일이름)

      await setDoc(doc(db, "postingList", addedPosting.pid), addedPosting);
      setText("");
      setImgs("");
      dispatch(INITIAL_STATE_HASH());
      dispatch(INITIAL_STATE_IMG());
      handleClose(); //피드 추가 후 모달창 Close
      dispatch(ADD_POSTING(addedPosting));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.posting}>
          <div className={styles.nav}>
            <Upload />
            <p className={styles.title}>새 개시물 만들기</p>
            <p className={styles.delete}>
              <ClearIcon onClick={handleClose} />
            </p>
          </div>
          <img src={imgs} alt="" width={"100%"} className={styles.image} />
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={text}
              onChange={textOnChange}
              placeholder="내용을 작성해주세요"
            ></textarea>
            <HashTag />
          </div>
          <ul>
            <UploadImg imgs={imgs} setImgs={setImgs} />
          </ul>
          <div className={styles.bottom}>
            <button className={styles.posting_btn} onClick={addPosting}>
              추가
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PostingModal;
