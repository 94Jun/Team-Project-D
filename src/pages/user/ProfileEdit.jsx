import styles from "./ProfileEdit.module.css";
import ProfileImg from "./ProfileImg";
import { db } from "../../config/firebase";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import { getSingleData } from "../../common";


const ProfileEdit = (props) => {
  const [name, setName] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [profile, setProfile] = useState();

  const user = useSelector((state) => state.login.currentUser);
  const handleClose = () => props.setOpen(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeIntroduce = (e) => {
    setIntroduce(e.target.value);
  };
  console.log("profile", profile);
  const washingtonRef = doc(db, "userList", user);
  //user 프로필 불러오기

  /*const getSingleData = async () => {
    const docSnap = await getDoc(washingtonRef);
    if (docSnap.exists()) {
      setName(docSnap.data().name);
      setIntroduce(docSnap.data().introduction);
      setProfile(docSnap.data().profile);
    }
  };*/

  useEffect(() => {
    getSingleData("userList", user, setName);
  }, []);

  //프로필 업데이트 함수
  const modify = async (e) => {
    e.preventDefault();
    await updateDoc(washingtonRef, {
      name: name,
      introduction: introduce,
    });
    try {
      setName("");
      setIntroduce("");
      alert("프로필이 수정되었습니다");
      window.location.reload("/user"); //새로고침
      console.log("성공");
    } catch (e) {
      alert("다시");
    }
  };
  return (
    <div>
      <Modal
        onClose={handleClose}
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form className={styles.edit_profile}>
            <ProfileImg className={styles.edit_img}/>
            <div className={styles.edit_memo}>
            <label>이름</label>
            <input type="text" className={styles.edit_input}/>
            <p className={styles.edit_ex}>
                사람들이 이름, 별명 또는 비즈니스 이름 등 
                회원님의 알려진 이름을 사용하여 회원님의 
                계정을 찾을 수 있도록 도와주세요. <br/><br/>
                이름은 14일 안에 두 번만 변경할 수 있습니다.</p>
            </div>
            <div className={styles.edit_memo}>
            <label>사용자이름</label>
            <input type="text" className={styles.edit_input}/>
            <p className={styles.edit_ex}>
                대부분의 경우 이후 14일 동안 사용자 이름을 다시 000(으)로 변경할 수 있습니다.</p>
            </div>
            <div className={styles.edit_memo}>
            <div className={styles.edit_text}>
              <label>이름</label>
              <input
                type="text"
                className={styles.edit_input}
                value={name.name}
                onChange={onChangeName}
              />
            </div>

            <p className={styles.edit_ex}>
              사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 <br />
              이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요. <br />
              이름은 14일 안에 두 번만 변경할 수 있습니다.
            </p>
          </div>
          <div className={styles.edit_memo}>
            <div className={styles.edit_text}>
              <label>소개</label>
              <textarea
                value={name.introduction}
                className={styles.edit_textarea}
                onChange={onChangeIntroduce}
              />
            </div>
          </div>
          <button className={styles.edit_button} onClick={modify}>
            제출
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ProfileEdit;
