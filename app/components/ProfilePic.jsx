import React from 'react';

function ProfilePic({ imageUrl }) {
  return (
    <div className="flex justify-center">
      <div className="mt-4">
        <img src={imageUrl || 'https://via.placeholder.com/250'} alt="Profile" className="w-40 h-40 rounded-full object-cover" />
      </div>
    </div>
  );
}

export default ProfilePic;