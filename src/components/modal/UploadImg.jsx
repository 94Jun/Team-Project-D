import { DELETE_IMG, INITIAL_STATE_IMG } from "../../modules/upload";
import styles from "./PostingModal.module.css";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { useSelector, useDispatch } from "react-redux";

const UploadImg = ({ imgs, setImgs }) => {
  const dispatch = useDispatch();

  const imgList = useSelector((state) => state.upload.ImgList);

  //삭제
  const deleteImg = (index) => {
    const imgNameArr = imgList.filter((idx) => idx !== index);
    dispatch(DELETE_IMG(imgNameArr));
    // 이미지 삭세 대표이미지와 비교 후 같으면 같이 지워지게
    if (imgs === index) {
      setImgs("");
    }
  };
  //대표이미지 함수
  const clickImg = (index) => {
    setImgs(imgList.find((imags) => imags.length === index));
  };
  // 이미지 출력 mpa

  const getPreviewImg = imgList.map((src) => {
    return (
      <li key={src}>
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
    );
  });
  //이미지 최대 4장 업로드 가능
  const map =
    imgList.length <= 4
      ? getPreviewImg
      : `${alert("최대 4장")}}${dispatch(INITIAL_STATE_IMG())}`;
  return map;
};
export default UploadImg;
