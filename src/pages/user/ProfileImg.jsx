import { useState, useRef } from "react";
import styles from "./UserPage.module.css";

function Profile() {
  const [imageSrc, setImageSrc] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const fileInput = useRef(null);

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
        <div className={styles.preview}>
          {imageSrc && (
            <img
              src={imageSrc}
              alt="preview-img"
              width="100%"
              height="100%"
              onClick={() => {
                fileInput.current.click();
              }}
            />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            profileimg(e.target.files[0]);
          }}
          style={{ display: "none" }}
          ref={fileInput}
        />
      </main>
    </div>
  );
}

export default Profile;
