import { getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
import { useState } from "react";


const MyPagePostImg = (props) => {
  const [post, setpost] = useState();
  const getImgUrl = async () => {
    const url = await getDownloadURL(props.imgRef);
    setpost(url);
  };
  useEffect(() => {
    getImgUrl();
  }, []);
  return (
    <img src={post}/>
  );
};

export default MyPagePostImg;
