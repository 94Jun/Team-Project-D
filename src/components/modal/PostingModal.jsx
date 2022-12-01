import styles from "./PostingModal.module.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { useSelector, useDispatch } from "react-redux";
import { ADD_POSTING } from "../../modules/posting1";
/* 버그...
  이미지 추가 업로드시 같은 이미지 들어감 (다른 파일이랑 같이 업로드시)
  미해결:setTagItem(e.target.value) 인풋 해쉬태그 text입력할때마다 리렌더 됨
*/
/* 기능 남은거
  드래그앤 드롭
  공개 비공개
*/
const PostingModal = (props) => {
  //업로드 이미지 저장 state
  const [data, setData] = useState([]); //넘겨줄 저장소
  const [imgs, setImgs] = useState();
  //해쉬태그 저장 state
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]); //넘겨줄 해쉬태그 저장
  //text 저장공간 state 만들어야함
  //reducer
  const dispatch = useDispatch();

  /*  {
    pid: Math.random().toString(),
    timestamp: new Date().toLocaleDateString(), //날짜 시간 초
    contents: {
      images: [], //업로드 이미지 배열로
      hashtags: [],
    }, //[""] 해쉬 태그 배열로
  },*/
  const addPosting = () => {
    dispatch(
      ADD_POSTING({
        images: [data],
        text: "가나다라",
        hashtags: [tagList],
      })
    );
  };

  //모달창 Open,Close 함수
  //const handleOpen = () => props.setOpen(true);
  const handleClose = () => props.setOpen(false);

  // input 작성 하면 함수 발생
  const valueOnChange = (e) => {
    setTagItem(e.target.value);
  };

  //해쉬태그 데이터 저장함수
  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem); //tagList []에  tagItem 값 을 넣어준다
    setTagList(updatedTagList); //입력한 value를 tagList에 넣어줌
    setTagItem(""); // 해쉬태그 값 입력후 인풋창 빈값으로 나타냄
  };

  //해쉬태그 조건 함수
  const onKeyPress = (e) => {
    //Enter key를 치면 함수 실행
    if (e.target.value.length !== 0 && e.code === "Space") {
      submitTagItem();
    }
  };

  //해쉬태그 삭제 함수
  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText; //DOM에 접근
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };

  //해쉬태그 출력 map
  const hashTag = tagList.map((tagItem, index) => {
    return (
      <div key={index} className={styles.hash_box}>
        <span className={styles.tag}>{tagItem}</span>
        <AddCircleSharpIcon
          onClick={deleteTagItem}
          className={styles.delfont}
          fontSize={"small"}
        />
      </div>
    );
  });
  const handleChangeFile = (e) => {
    //업로드 데이터 담는 함수

    for (let i = 0; i < e.target.files.length; i++) {
      // 추가 업로드 하면 e.target.files.length 값은 초기화
      if (e.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onloadend = () => {
          const resultImage = reader.result;
          setData((data) => [...data, resultImage]);
        };
      }
    }
  };

  //대표이미지 함수
  const clickImg = (index) => {
    setImgs(data.find((imags) => imags.length === index));
  };

  //삭제
  const deleteImg = (index) => {
    const imgNameArr = data.filter((idx) => idx !== index);
    setData([...imgNameArr]);
    // 이미지 삭세 대표이미지와 비교 후 같으면 같이 지워지게
    if (imgs === index) {
      setImgs("");
    }
  };

  // 이미지 출력 mpa
  const getPreviewImg = data.map((src) => {
    return (
      <li key={src}>
        <AddCircleSharpIcon
          onClick={() => deleteImg(src)}
          className={`${styles.delfont} ${styles.delete_img}`}
          fontSize={"small"}
        />
        <img
          src={src}
          alt=""
          width={"50px"}
          height={"50px"}
          onClick={() => clickImg(src.length)}
        />
      </li>
    );
  });
  //이미지 최대 4장 업로드 가능
  const map =
    data.length <= 4 ? getPreviewImg : `${alert("최대 4장")}${setData([])}`;

  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.posting}>
          <div className={styles.nav}>
            <div className={styles.filebox}>
              <label htmlFor="file" className={styles.label}>
                <AddAPhotoIcon />
              </label>
              <input
                type="file"
                id="file"
                multiple
                onChange={handleChangeFile}
              />
            </div>
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
              placeholder="내용을 작성해주세요"
            ></textarea>
            <div className={styles.hash_box}>{hashTag}</div>
            <input
              type="text"
              placeholder="해시태그"
              onChange={valueOnChange}
              className={styles.hash_input}
              value={tagItem}
              onKeyPress={onKeyPress}
            />
          </div>
          <ul>{map}</ul>
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
