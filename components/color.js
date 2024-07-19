import React, { useState } from "react";
import colorItem from './color'
import { color } from "three/examples/jsm/nodes/Nodes";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#ffff');
  const colors = ["pink", "white", "black","blue"];

  const handleColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-orange-500 "> Couleur :</h1>
        <br/>
      </div>
      <div className="flex space-x-4">
      <button  onClick={() => handleColor("pink")}  className={`w-8 h-8  rounded-full bg-pink-500   text-white border-2    ${selectedColor === "pink" ? "focus:border-orange-500" : "border-transparent"}`}></button>
      <button  onClick={() => handleColor("white")} className={`w-8 h-8  rounded-full bg-white      text-black border-2   ${selectedColor === "white" ? "focus:border-orange-500" : ""} `}></button>
      <button  onClick={() => handleColor("black")} className={`w-8 h-8  rounded-full bg-black      text-white border-2    ${selectedColor === "black" ? "focus:border-orange-500" : "border-transparent"}  `}></button>
      <button  onClick={() => handleColor("blue")} className={`w-8 h-8  rounded-full bg-blue-200      text-white border-2    ${selectedColor === "blue" ? "focus:border-orange-500" : "border-transparent"}  `}></button>
      </div>
      
     
    </div>
  );
};

export default ColorPicker;