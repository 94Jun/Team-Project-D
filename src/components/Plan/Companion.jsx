import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../config/firebase";
import styles from "./Companion.module.css";
import { Link } from "react-router-dom";
import { updatePushData } from "../../common";

const Companion = (props) => {
  const [profile, setProfile] = useState();
  const getProfile = async () => {
    const profileRef = ref(storage, `images/${props.user.profile}`);
    const url = await getDownloadURL(profileRef);
    setProfile(url);
  };
  useEffect(() => {
    getProfile();
  }, [props.user]);
  const rejectRequestHandler = () => {
    try {
      updatePushData("planList", props.planId, "request", props.user.uid, false);
      props.onToggleRequest();
    } catch (e) { 
      console.log(e.message)
    }
  }
  const acceptRequestHandler = () => { 
    try {
      updatePushData("planList", props.planId, "request", props.user.uid, false);
      updatePushData("planList", props.planId, "companion", props.user.uid, true);
      props.onToggleRequest();
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <li className={styles.container}>
      <div className={styles.user_wrap}>
        <div>
          <Link to={`/user/${props.user.uid}`}>
            <img src={profile} className={styles.profile} />
          </Link>
        </div>
        <div>
          <span className={styles.name}>
            <Link to={`/user/${props.user.uid}`}>{props.user.name}</Link>
          </span>
          <p className={styles.introduction}>{props.user.introduction}</p>
        </div>
      </div>
      <div>
        <button onClick={acceptRequestHandler}>수락</button>
        <button onClick={rejectRequestHandler}>거절</button>
      </div>
    </li>
  );
};

export default Companion;
