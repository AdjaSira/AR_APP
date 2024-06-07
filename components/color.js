import React, { useState } from "react";
import colorItem from './color'
import { color } from "three/examples/jsm/nodes/Nodes";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#ffff');
  const colors = ["pink", "white", "black"];

  const handleColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <div>
        <h1>Choisir Couleur</h1>
      </div>
      <div className="flex space-x-4">
      <button  onClick={() => handleColor("pink")}  className={`w-12 h-12  rounded-full bg-pink-500  text-white border-2 ${selectedColor === "pink" ? "focus:border-orange-500" : "border-transparent"}`}></button>
      <button  onClick={() => handleColor("white")} className={`w-12 h-12 rounded-full bg-white      text-black border-2   ${selectedColor === "white" ? "focus:border-orange-500" : "border-transparent"} `}></button>
      <button  onClick={() => handleColor("black")} className={`w-12 h-12  rounded-full bg-black     text-white border-2    ${selectedColor === "black" ? "focus:border-orange-500" : "border-transparent"}  `}></button>
      </div>
      
     
    </div>
  );
};

export default ColorPicker;