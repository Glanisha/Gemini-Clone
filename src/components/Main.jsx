import React, { useContext } from "react";
import { assets } from "../assets/gemini-clone-assets/assets/assets";
import Card from "./Card";
import { Context } from "../context/Context";
import "./main.css"

const Main = () => {
  const {
    prevPropmt,
    setPrevPropmt,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    showResult,
    setShowresult,
    loading,
    onSent,
    setLoading,
    resultData,
    setresultData,
  } = useContext(Context);

  return (
    <div className="p-4 sm:p-6 md:p-10 w-full min-h-screen flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600">Gemini</p>
        <img
          src={assets.user_icon}
          alt="User Icon"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full"
        />
      </div>

      {!showResult ? (
        <div className="flex-grow overflow-auto">
          <div className="mt-6 sm:mt-8 md:mt-10">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-400 to-red-500">
              Hello, Glanisha.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-500 mt-2">
              How can I help you today?
            </p>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card
              text="Suggest beautiful places to see during my next road trip."
              img={assets.compass_icon}
            />
            <Card
              text="Suggest beautiful places to see during my next road trip."
              img={assets.bulb_icon}
            />
            <Card
              text="Suggest beautiful places to see during my next road trip."
              img={assets.message_icon}
            />
            <Card
              text="Suggest beautiful places to see during my next road trip."
              img={assets.code_icon}
            />
          </div>
        </div>
      ) : (
        <div className="flex-grow overflow-auto">
          <div className="flex items-center">
            <img
              src={assets.user_icon}
              alt="user image"
              className="rounded-3xl w-8 h-8 sm:w-10 sm:h-10"
            />
            <p className="ml-2 sm:ml-3 text-sm sm:text-base">{recentPrompt}</p>
          </div>
          <div className="flex mt-4 sm:mt-6">
            <img
              src={assets.gemini_icon}
              alt="gemini icon"
              className="rounded-3xl w-8 h-8 sm:w-10 sm:h-10"
            />
            {loading ? (
              <div className="loader">
                <hr />
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              <p 
                dangerouslySetInnerHTML={{ __html: resultData }}
                className="text-sm sm:text-base md:text-[17px] result ml-2 sm:ml-3"
              />
            )}
          </div>
        </div>
      )}

      <div className="sticky bottom-0 bg-white py-2 sm:py-4 flex items-center space-x-2 sm:space-x-4">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Enter your text here"
          className="w-full px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <img
          src={assets.gallery_icon}
          alt="Gallery Icon"
          className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
        />
        <img
          src={assets.mic_icon}
          alt="Mic Icon"
          className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
        />
        <img
          src={assets.send_icon}
          alt="Send Icon"
          onClick={() => onSent()}
          className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Main;