import React, { useContext } from "react";
import { assets } from "../assets/gemini-clone-assets/assets/assets";
import { useState } from "react";
import { Context } from "../context/Context";

const Sidebar = () => {
  const [extended, setextended] = useState(false);
  const {onSent, prevPropmt, setRecentPrompt}=useContext(Context);
  
  return (
    <div
      className={`${
        extended ? "w-[260px]" : "w-[80px]"
      } h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-100 font-outfit relative`}
    >
      <div className="p-4 flex flex-col ">
        <button
          onClick={() => setextended((prev) => !prev)}
          className="p-2 hover:bg-gray-100 rounded-full inline-block"
        >
          <img
            src={assets.menu_icon}
            alt="Menu"
            className="w-6 h-6 text-gray-600"
          />
        </button>
        <button className="flex items-center bg-[#e5eaf1] rounded-lg px-3 py-2  hover:bg-[#d7e0ec] transition-colors mt-5">
          <img src={assets.plus_icon} alt="" className="w-5 h-5" />
          {extended ? (
            <span className="text-gray-600 font-medium ml-2">New chat</span>
          ) : null}
        </button>
      </div>
      {extended ? (
            <span className="text-sm text-gray-700 px-4 ">Recents</span>
          ) : null}

      <div className="flex-grow overflow-auto">
        {extended?(prevPropmt.map((item, index)=>{
          return(
            <div key={index} className="px-4 flex">
              <div className="hover:bg-[#f1f3f5] rounded-lg p-3 flex items-center">
                <img
                  src={assets.message_icon}
                  alt=""
                  className="w-5 h-5 mr-2 text-gray-600"
                />
                <span className="text-sm text-gray-600 truncate">
                  {item}...
                </span>
              </div>
            </div>
          )
        })):null}
      </div>
      
      <div className="px-4 pb-4 space-y-4">
        <button className="w-full flex items-center p-2 hover:bg-gray-100 rounded-lg">
          <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 group-hover:bg-gray-200">
            <img
              src={assets.question_icon}
              alt="Help"
              className="w-5 h-5 text-gray-600"
            />
          </div>
          {extended ? (
            <span className="text-sm text-gray-700">Help</span>
          ) : null}
        </button>

        <button className="w-full flex items-center p-2 hover:bg-gray-100 rounded-lg">
          <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 group-hover:bg-gray-200">
            <img
              src={assets.history_icon}
              alt="Activity"
              className="w-5 h-5 text-gray-600"
            />
          </div>
          {extended ? (
            <span className="text-sm text-gray-700">Activity</span>
          ) : null}
        </button>

        <button className="w-full flex items-center p-2 hover:bg-gray-100 rounded-lg">
          <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 group-hover:bg-gray-200">
            <img
              src={assets.setting_icon}
              alt="Settings"
              className="w-5 h-5 text-gray-600"
            />
          </div>
          {extended ? (
            <span className="text-sm text-gray-700">Settings</span>
          ) : null}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;