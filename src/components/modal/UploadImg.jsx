import { DELETE_IMG, INITIAL_STATE_IMG } from "../../modules/upload";
import styles from "./PostingModal.module.css";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const UploadImg = ({ imgs, setImgs }) => {
  const dispatch = useDispatch();
  const imgList = useSelector((state) => state.upload.ImgList);
  const images = useSelector((state) => state.upload.Image);

  //삭제
  const deleteImg = (index) => {
    const imgNameArr = imgList.filter((idx) => idx !== index);
    const imgName = images.filter((idx) => idx !== index);
    dispatch(DELETE_IMG(imgNameArr, imgName));
    // 이미지 삭제 대표이미지와 비교 후 같으면 같이 지워지게
    if (imgs === index) {
      setImgs("");
    }
  };
  //대표이미지 함수
  const clickImg = (index) => {
    setImgs(imgList.find((imags) => imags.length === index));
  };

  //이미지 최대 4장 업로드 가능
  useEffect(() => {
    const map =
      imgList.length <= 4
        ? ""
        : `${alert("사진은 최대 4장")}${dispatch(INITIAL_STATE_IMG())}
        ${setImgs("")}`;
  }, [imgList]); //imgList 값이 변할때 함수 실행

  return (
    <>
      {imgList.map((src) => (
        <li key={src} className={styles.img_list}>
          <AddCircleSharpIcon
            onClick={() => deleteImg(src)}
            className={`${styles.delete_font} ${styles.delete_img}`}
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
      ))}
    </>
  );
};
export default UploadImg;
