import { DELETE_IMG, INITIAL_STATE_IMG } from "../../modules/upload";
import styles from "./PostingModal.module.css";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const UploadImg = ({ imgs, setImgs }) => {
  const dispatch = useDispatch();

  const imgList = useSelector((state) => state.upload.ImgList);
  const images = useSelector((state) => state.upload.Image);
  const image = imgList.filter((data) => data.includes("image"));
  const video = imgList.filter((data) => data.includes("video"));

  /*console.log("agag", agag);
  console.log("bgbg", bgbg);*/
  console.log("imgList", imgList);

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
    //useEffect 없이 dispatch(INITIAL_STATE_IMG())실행시 잘못된 작성법으로 애러가뜸
    const map =
      imgList.length <= 4 && video.length <= 1
        ? ""
        : `${alert("사진은 최대 4장")}${dispatch(INITIAL_STATE_IMG())}`;
  }, [imgList]); //imgList 값이 변할때 함수 실행

  return (
    <>
      {image.length >= 0
        ? image.map((src) => (
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
          ))
        : ""}
      {video.length >= 0
        ? video.map((src) => (
            <li key={src}>
              <AddCircleSharpIcon
                onClick={() => deleteImg(src)}
                className={`${styles.delete_font} ${styles.delete_img}`}
                fontSize={"small"}
              />
              <video
                src={src}
                onClick={() => clickImg(src.length)}
                width={"50px"}
                height={"50px"}
              ></video>
            </li>
          ))
        : ""}
    </>
  );
};
export default UploadImg;
