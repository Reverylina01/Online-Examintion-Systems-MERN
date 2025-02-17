import React, { useState } from "react";
import "./Profile.css";  // Import the custom CSS file for styling

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdateProfile = () => {
    // Logic to update profile details (e.g., API call to save changes)
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h2>Profile</h2>
        </div>
        
        <div className="profile-picture-container text-center">
          <img
            src={profilePicture || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-picture"
          />
          <br />
          <label className="btn-upload">
            Upload Picture
            <input
              type="file"
              onChange={handlePictureChange}
              hidden
              accept="image/*"
            />
          </label>
        </div>

        <div className="profile-details">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="buttons-container">
            <button className="btn-update" onClick={handleUpdateProfile}>
              Update Profile
            </button>
            <button className="btn-logout" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
