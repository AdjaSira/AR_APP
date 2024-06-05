import React, { useState } from "react";

const Color = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const colors = ["pink", "white", "black"];

  const handleColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="w-full mr-10 md:w-1/2 h-60 flex flex-col justify-center items-center">
      <div className="mb-4 text-lg font-bold">
        <p>Choisissez une Couleur</p>
      </div>
      <div className="flex justify-between w-2/3">
        {colors.map((color, index) => (
          <button
            key={index}
            className="rounded-full w-16 h-16 border-4 border-black"
            style={{ backgroundColor: color, outline: "none" }}
            onClick={() => handleColor(color)} 
          />
        ))}
      </div>
      <div className="mt-4">
        {selectedColor && (
          <p className="text-white bg-black p-2 rounded-md">
            Couleur sélectionnée : {selectedColor}
          </p>
        )}
      </div>
    </div>
  );
};

export default Color;
