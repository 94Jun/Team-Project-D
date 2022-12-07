import styles from "./PostingModal.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { ADD_POSTING, TEST_POSTING } from "../../modules/posting";
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
import Dropdown from "./Dropdown";
import Emoticon from "./Emoticon";
/* 기능 남은거
  드래그앤 드롭
  공개 비공개
*/
const PostingModal = (props) => {
  //posting-Text 저장 state
  const [text, setText] = useState("");
  //업로드 이미지 저장 state
  const [imgs, setImgs] = useState();
  //피드 공개 비공개
  const [show, setShow] = useState(true);
  //이모티콘 모달창
  const [icon, setIcon] = useState(false);

  //모달창 Open,Close 함수
  //const handleOpen = () => props.setOpen(true);
  const handleClose = () => props.setOpen(false);
  //reducer dispatch
  const dispatch = useDispatch();

  //해쉬태그 redux
  const HashTagList = useSelector((state) => state.hash.HashList);
  //user redcer 에서 useSelector로 임이로 정의된   currentUser: "u1"를 받아옴
  const currentUser = useSelector((state) => state.user.currentUser);
  // redux imgList
  const imgList = useSelector((state) => state.upload.ImgList);

  //피드 작성 textOnChange
  const textOnChange = (e) => {
    setText(e.target.value);
  };

  //이모티콘 모달창
  const clickIconModal = () => {
    setIcon(!icon);
  };

  // posting data전송 함수
  const addPosting = async () => {
    //데이터 베이스 추가
    const addedPublicPosting = {
      //전달할 데이터 정의
      pid: Math.random().toString(),
      date: new Date().toLocaleDateString(),
      timestamp: new Date().valueOf(),
      like: [],
      writer: currentUser,
      comments: [],
      contents: {
        images: [],
        hashtags: HashTagList,
        text: text,
      },
    };
    const addedPrivatePosting = {
      //비공개 전달할 데이터 ???
      pid: Math.random().toString(),
      date: new Date().toLocaleDateString(),
      timestamp: new Date().valueOf(),
      //like: [],
      writer: currentUser,
      //comments: [],
      contents: {
        images: [],
        hashtags: HashTagList,
        text: text,
        test: "테스트용 ",
      },
    };

    /*test */
    //개시물 내용 확인
    if (text !== undefined) {
      //공개 비공개 확인
      if (show === true) {
        try {
          for (let i = 0; i < imgList.length; i++) {
            const randomNum = Math.random().toString(); //파일이름은 겹치지 않게 random으로
            const imageRef = ref(storage, `images/${randomNum}`);
            uploadString(imageRef, imgList[i], "data_url");
            addedPublicPosting.contents.images.push(randomNum);
          } //uploadString:data_url,base64데이터 업로드용
          //imageRef=ref(storage,폴더이름/파일이름)
          await setDoc(
            doc(db, "postingList", addedPublicPosting.pid),
            addedPublicPosting
          );
          setText("");
          setImgs("");
          dispatch(INITIAL_STATE_HASH());
          dispatch(INITIAL_STATE_IMG());
          handleClose(); //피드 추가 후 모달창 Close
          dispatch(ADD_POSTING(addedPublicPosting));
        } catch (e) {
          alert("업로드에 실패 했습니다");
        }
      } else {
        //비공개
        try {
          for (let i = 0; i < imgList.length; i++) {
            const randomNum = Math.random().toString(); //파일이름은 겹치지 않게 random으로
            const imageRef = ref(storage, `images/${randomNum}`);
            uploadString(imageRef, imgList[i], "data_url");
            addedPrivatePosting.contents.images.push(randomNum);
          } //uploadString:data_url,base64데이터 업로드용
          //imageRef=ref(storage,폴더이름/파일이름)
          await setDoc(
            doc(db, "postingList", addedPrivatePosting.pid),
            addedPrivatePosting
          );
          setText("");
          setImgs("");
          dispatch(INITIAL_STATE_HASH());
          dispatch(INITIAL_STATE_IMG());
          handleClose(); //피드 추가 후 모달창 Close
          dispatch(TEST_POSTING(addedPrivatePosting));
          //Test용 dispatch ||dispatch(ADD_POSTING(addedPublicPosting)) 정의 되지 않은 속성으로 애러뜸
        } catch (e) {
          alert("업로드에 실패 했습니다");
        }
      }
    } else {
      alert("개시물을 작성해주세요");
    }
  };

  return (
    <div>
      <Modal
        onClose={handleClose}
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.posting}>
          <div className={styles.nav}>
            <Upload />
            <p className={styles.title}>
              <span>새 개시물 만들기</span>
            </p>
            <p className={styles.delete}>
              <ClearIcon onClick={handleClose} className={styles.icon} />
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
            <button className={styles.emoticon_btn} onClick={clickIconModal}>
              😀
            </button>
            <div className={styles.posting_btn_box}>
              <button className={styles.posting_btn} onClick={addPosting}>
                추가
              </button>
            </div>
            <Dropdown show={show} setShow={setShow} />
          </div>
          <Emoticon text={text} setText={setText} icon={icon} />
        </div>
      </Modal>
    </div>
  );
};

export default PostingModal;
