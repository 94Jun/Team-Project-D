import { useState,useRef } from 'react';

function Profile() {
  const [imageSrc, setImageSrc] = useState('');

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
    <main className="container">
      <div className="preview" >
        {imageSrc && <img src={imageSrc} alt="preview-img" width="100%" height="100%"/>}
      </div>
      <input type="file" accept='image/*' onChange={(e) => {
        profileimg(e.target.files[0]);
      }} />
    </main>
    </div>
  );
}

export default Profile;