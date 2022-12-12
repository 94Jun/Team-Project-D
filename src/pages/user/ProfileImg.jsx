import { useState,useRef } from 'react';
import styles from "./UserPage.module.css";
import { storage } from "../../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
import { useSelector } from "react-redux";


function Profile() {
  const [profile, setProfile] = useState(null);

  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);

  // 현재 유저 프로필 불러오기
  const getProfile = async () => {
    const profileRef = ref(storage, `images/${currentUserInfo.profile}`);
    const url = await getDownloadURL(profileRef)
  };
  useEffect(() => {
    getProfile();
  },[currentUserInfo.profile])


  const fileInput = useRef(null)

  const profileimg = (props) => {
    const reader = new FileReader();
    reader.readAsDataURL(props);
    return new Promise((resolve) => {
      reader.onload = () => {

        resolve();
      };
    });
  };

  return (
    <div>
    <main className={styles.container}>
      <div className={styles.preview} >
        {profile && <img src={profile} alt="preview-img" width="100%" height="100%"
        onClick={()=>{fileInput.current.click()}}/>}
      </div>
      <input type="file" accept='image/*' onChange={(e) => {
        profileimg(e.target.files[0]);
      }}  ref={fileInput}/>
    </main>
    </div>
  );
}

export default Profile;