import React from 'react';
import ProfilePic from './Components/ProfilePic';
import Boxes from './page';
function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="mt-8"> 
        <ProfilePic imageUrl={"https://via.placeholder.com/150"} />
      </div>
      <div className="mt-4"> 
        <Boxes />
      </div>
    </div>
  );
}

export default Layout;
