import React from "react";
import { assets } from "../assets/gemini-clone-assets/assets/assets";
import Card from "./Card";

const Main = () => {
  return (
    <div className="m-10 w-full h-full font-outfit flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-semibold text-gray-600">Gemini</p>
        <img
          src={assets.user_icon}
          alt="User Icon"
          className="w-12 h-12 rounded-full"
        />
      </div>

      <div className="mt-10">
        <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-400 to-red-500">
          Hello, Glanisha.
        </p>
        <p className="text-2xl text-gray-500 mt-2">How can I help you today?</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

      <div className="mt-10 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Enter your text here"
          className="w-full px-4 py-2 text-lg rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <img
          src={assets.gallery_icon}
          alt="Gallery Icon"
          className="w-8 h-8 cursor-pointer"
        />
        <img
          src={assets.mic_icon}
          alt="Mic Icon"
          className="w-8 h-8 cursor-pointer"
        />
        <img
          src={assets.send_icon}
          alt="Send Icon"
          className="w-8 h-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Main;
