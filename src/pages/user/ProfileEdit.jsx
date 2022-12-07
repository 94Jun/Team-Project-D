import styles from "./ProfileEdit.module.css";
import ProfileImg from "./ProfileImg";


const ProfileEdit = () => {
    return (
        <div className={styles.edit}>
            <div className={styles.menu}>
                <div className={styles.edit_menu}>
                    <ul><a>프로필 편집</a></ul>
                    <ul><a>비밀번호 변경</a></ul>
                </div>
            </div>
    <div className={styles.edit_form}>
        <form className={styles.edit_profile}>
            <div className={styles.edit_memo}>
            <label>이름</label>
            <input type="text" className={styles.edit_input}/>
            </div>
            <div className={styles.edit_memo}>
            <label>사용자이름</label>
            <input type="text" className={styles.edit_input}/>
            </div>
            <div className={styles.edit_memo}>
            <label>웹사이트</label>
            <input type="text" className={styles.edit_input}/>
            </div>
            <div className={styles.edit_memo}>
            <label>소개</label>
            <input type="text" className={styles.edit_input}/>
            </div>
            <div className={styles.edit_memo}>
            <label>이메일</label>
            <input type="text" className={styles.edit_input}/>
            </div>
        </form>
    </div>
</div>
);
}

export default ProfileEdit;