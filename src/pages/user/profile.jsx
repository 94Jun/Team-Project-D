import { useState } from 'react';

function Profile() {
  const [imageSrc, setImageSrc] = useState('');

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
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
      <div className="preview">
        {imageSrc && <img src={imageSrc} alt="preview-img" />}
      </div>
      <input type="file" onChange={(e) => {
        encodeFileToBase64(e.target.files[0]);
      }} />
    </main>
    </div>
  );
}

export default Profile;