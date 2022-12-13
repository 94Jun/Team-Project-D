import { useState,useRef,useEffect } from 'react';
import styles from "./UserPage.module.css";
import { storage } from "../../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import {useSelector } from "react-redux";


function Profile() {
  const [imageSrc, setImageSrc] = useState("");
  const fileInput = useRef(null)
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  
  const getProfile = async () => {
    const profileRef = ref(storage, `images/${currentUserInfo.profile}`);
    const url = await getDownloadURL(profileRef)
    setImageSrc(url)
  };
  useEffect(() => {
    getProfile();
  },[currentUserInfo.profile])


  const profileimg = (props) => {
    const reader = new FileReader();
    reader.readAsDataURL(props);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <div>
    <main className={styles.container}>
      <div className={styles.preview} >
        {imageSrc && <img src={imageSrc} alt="preview-img" width="100%" height="100%"
        onClick={()=>{fileInput.current.click()}}/>}
      </div>
      <input type="file" accept='image/*' onChange={(e) => {
        profileimg(e.target.files[0]);
      }} style={{display:'none'}} ref={fileInput}/>
    </main>
    </div>
  );
}

export default Profile;