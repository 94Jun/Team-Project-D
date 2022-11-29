import styles from "./PostingModal.module.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import Modal from "@mui/material/Modal";

const PostingModal = (props) => {
  const [data, setData] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const [imgs, setImgs] = useState("");

  //모달창 Open,Close 함수
  //const handleOpen = () => props.setOpen(true);
  const handleClose = () => props.setOpen(false);

  const handleChangeFile = (e) => {
    //업로드 사진 미리보기 함수
    setImgFile(e.target.files);
    setData([]);
    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onloadend = () => {
          const resultImage = reader.result;
          if (resultImage) {
            const resultImageSub = resultImage.toString();
            setData((data) => [...data, resultImageSub]);
          }
        };
      }
    }
  };

  const clickImg = (id) => {
    //미리보기 사진 클릭시 이미지 크게 보임 ==구현중../
    setImgs(data.find((item) => item.length === id));
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
          <img src={imgs} alt="" width={"100%"} height={"460px"} />
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="내용을 작성해주세요"
            ></textarea>
            <input
              type="text"
              placeholder="해시태그"
              className={styles.hash_input}
            />
          </div>
          <div className={styles.bottom}>
            <button className={styles.posting_btn}>추가</button>
            <ul>
              {data.map((src) => (
                <li key={src.length} onClick={() => clickImg(src.id)}>
                  <img src={src} alt="" width={"50px"} height={"50px"} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PostingModal;
