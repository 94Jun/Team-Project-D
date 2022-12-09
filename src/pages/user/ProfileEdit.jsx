import styles from "./ProfileEdit.module.css";
import ProfileImg from "./ProfileImg";


const ProfileEdit = () => {
    return (
        <div className={styles.edit}>
            <div className={styles.menu}>
                <div>
                    <div className={styles.edit_menu}>
                        프로필 편집
                    </div>
                    <div className={styles.edit_menu}>
                        비밀번호 변경
                    </div>
                </div>
            </div>
    <div className={styles.edit_form}>
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
            <label>소개</label>
            <textarea className={styles.edit_textarea}/>
            </div>
            </div>
            <div className={styles.edit_memo}>
            <label>이메일</label>
            <input type="text" placeholder=" 이메일" className={styles.edit_input}/>
            </div>
            <button className={styles.edit_button}>제출</button>
        </form>
    </div>

</div>
);
}

export default ProfileEdit;