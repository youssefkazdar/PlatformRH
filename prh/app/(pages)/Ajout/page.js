'use client'
import React from 'react';
import ProfilePic from '../../components/ProfilePic.jsx'; 
import Boxes from '../../components/Boxes.jsx';

function page({ children }) {
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

export default page;
