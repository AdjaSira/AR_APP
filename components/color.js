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
    <div className="w-full mr-10 md:w-1/2 h-60 flex flex-col justify-center items-center">
      <div className="w-40 mr-10 w-full flex flex-col items-center mb-4 text-lg font-bold">
        <h1>Choisir Couleur</h1>
      </div>
      <div className="flex space-x-4">
      <button  onClick={() => handleColor("pink")} className={`w-12 h-12  rounded-full ${selectedColor === "pink" ? "bg-blue-500" : "bg-pink-500"} text-white`}></button>
      <button  onClick={() => handleColor("white")}  className={`w-12 h-12 rounded-full ${selectedColor === "white" ? "bg-blue-500" : "bg-white"} text-black border`}></button>
      <button  onClick={() => handleColor("black")} className={`w-12 h-12  rounded-full ${selectedColor === "black" ? "bg-blue-500" : "bg-black"} text-white`}></button>
      </div>
      
     
    </div>
  );
};

export default ColorPicker;