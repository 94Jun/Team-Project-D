import { getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
import { useState } from "react";
const PostItemImg = (props) => {
  const [img, setImg] = useState();
  const getImgUrl = async () => {
    const url = await getDownloadURL(props.imgRef);
    setImg(url);
  };
  useEffect(() => {
    getImgUrl();
  }, []);
  return <img src={img}/>;
};

export default PostItemImg;
