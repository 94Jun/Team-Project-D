import styles from "./ProfileEdit.module.css";
import ProfileImg from "./ProfileImg";
import { db } from "../../config/firebase";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useSelector } from "react-redux";
import { async } from "@firebase/util";
const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [email, setEmail] = useState("");

  const user = useSelector((state) => state.login.currentUser);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeIntroduce = (e) => {
    setIntroduce(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const test = async () => {};
  const washingtonRef = doc(db, "userList", user);
  const docSnap = getDoc(washingtonRef);

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
      setEmail("");
      alert("프로필이 수정되었습니다");
      console.log("성공");
    } catch (e) {
      alert("다시");
    }
  };
  return (
    <div className={styles.edit}>
      <div className={styles.menu}>
        <div>
          <div className={styles.edit_menu}>프로필 편집</div>
          <div className={styles.edit_menu}>비밀번호 변경</div>
        </div>
      </div>
      <div className={styles.edit_form}>
        <form className={styles.edit_profile}>
          <div className={styles.edit_memo}>
            <label>이름</label>
            <input
              type="text"
              className={styles.edit_input}
              value={name}
              onChange={onChangeName}
            />
            <p className={styles.edit_ex}>
              사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을
              사용하여 회원님의 계정을 찾을 수 있도록 도와주세요. <br />
              <br />
              이름은 14일 안에 두 번만 변경할 수 있습니다.
            </p>
          </div>
          <div className={styles.edit_memo}>
            <label>사용자이름</label>
            <input type="text" className={styles.edit_input} />
            <p className={styles.edit_ex}>
              대부분의 경우 이후 14일 동안 사용자 이름을 다시 000(으)로 변경할
              수 있습니다.
            </p>
          </div>
          <div className={styles.edit_memo}>
            <div className={styles.edit_text}>
              <label>소개</label>
              <textarea
                value={introduce}
                className={styles.edit_textarea}
                onChange={onChangeIntroduce}
              />
            </div>
          </div>
          <div className={styles.edit_memo}>
            <label>이메일</label>
            <input
              type="text"
              placeholder=" 이메일"
              value={email}
              className={styles.edit_input}
              onChange={onChangeEmail}
            />
          </div>
          <button className={styles.edit_button} onClick={modify}>
            제출
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
