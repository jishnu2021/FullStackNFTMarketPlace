import React, { useState } from 'react';
import '../styles/accountsetting.css';

const AccountSetting = () => {
  const [profileImage, setProfileImage] = useState(''); // State to manage profile image

  // Function to handle profile image change
  const handleProfileImageChange = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setProfileImage(imageUrl);
  };

  return (
    <div className="account-settings">
      <div className="basic-info">
        <h2>Basic Info</h2>
        <div className="profile-picture">
          <h3>Profile Picture</h3>
          <img src={profileImage || 'default-profile-image.jpg'} alt="Profile" />
          <input type="file" accept="image/*" onChange={handleProfileImageChange} />
          <button onClick={() => setProfileImage('')}>Remove Profile Picture</button>
        </div>
      </div>
      <div className="account-info">
        <h2>Account Info</h2>
        {/* Add account info fields here */}
      </div>
    </div>
  );
};

export default AccountSetting;
