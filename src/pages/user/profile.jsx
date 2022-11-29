import React from "react";
import { useState, useRef } from "react";
import profileimg from "./img/nprofile.png";

const Profile = (props) => {
  const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef();

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      console.log("이미지주소", reader.result);
    };
  };

  const onClickFileBtn = (e) => {
    imgRef.current.click();
  };

  return (
    <div>
      <div className="profile">
        <img src={profileimg}
        onClick={() => {onClickFileBtn();}}></img>
      </div>
      <input type="file" ref={imgRef} onChange={onChangeImage}
      style={{ display: "none" }}></input>
    </div>
  );
};

export default Profile;