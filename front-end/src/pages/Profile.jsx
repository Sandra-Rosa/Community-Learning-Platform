import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Bio: {user.bio}</p>
      <p>Location: {user.location}</p>
    </div>
  );
};

export default UserProfile;
