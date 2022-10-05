import React from "react";
import HeaderOption from "./HeaderOption";
// import { FaSearch,FaNewspaper,FaMapMarkerAlt } from 'react-icons/fa';
// import { HiPhoto } from 'react-icons/hi';
// // import { AiFillPlayCircle } from 'react-icons/ai';
// // import { BsThreeDotsVertical } from 'react-icons/bs';


const HeaderOptions = () => {
  return (
    <div className='flex w-full text-gray-600 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b'>
      {/* Left Section */}
      <div className="flex space-x-6">
        <HeaderOption  title="All" selected />
        <HeaderOption  title="Images" />
        <HeaderOption  title="Videos" />
        <HeaderOption  title="News" />
        <HeaderOption  title="Maps"/>
        <HeaderOption  title="More"/>
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Setting</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
