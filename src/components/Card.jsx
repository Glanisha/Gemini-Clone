import React from "react";
import { assets } from "../assets/gemini-clone-assets/assets/assets";

const Card = (props) => {
  return (
    <div className="relative h-72 bg-gray-100 rounded-xl p-6 flex flex-col justify-between">
      <p className="text-lg font-medium text-gray-700">{props.text}</p>

      <div className="absolute bottom-4 right-4">
        <img
          src={props.img}
          alt="Card Icon"
          className="w-10 h-10 rounded-full border-2 border-white shadow-md"
        />
      </div>
    </div>
  );
};

export default Card;
