import React, { useState } from "react";
import { Navbar } from "flowbite-react";


const Menue = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleToggle = () => {
    setFormVisible(!isFormVisible);
  };

  const [currentImage,setCurrentImage] = useState("/iPhone_15_Pro_Blue_Titanium_1_0.jpg");
  const imageChange = (newImage) => {
    setCurrentImage(newImage);
  };




  return (
    <div className="relative max-w-screen justify-between flex flex-wrap items-center ml-6">
      <img
        src="/logo.png"
        className="h-6 sm:h-9 ml-3"
        alt="Orange Logo"
        width={36}
        height={36}
      />

      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://orange.sn/"></Navbar.Brand>

        <Navbar.Collapse className="sm:flex ml-40">
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="#"  onClick={() => imageChange("/téléchargement (2).jpeg") }>iPhone 15</Navbar.Link>
          <Navbar.Link href="#"  onClick={() => imageChange("/iPhone_15_Pro_Blue_Titanium_1_0.jpg") } >iPad Pro Max</Navbar.Link>
          <Navbar.Link href="#"  onClick={() => imageChange("/") } >Galaxy Z Fold</Navbar.Link>
          <Navbar.Link href="#"  onClick={() => imageChange("/") }>Galaxy Z Flip</Navbar.Link>
        </Navbar.Collapse>
        <div className="block sm:hidden ml-auto">
          <Navbar.Toggle />
        </div>
      </Navbar>
      <div
        className="mt-2 ml-96 py-2 px-2 text-gray-900 focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:focus:ring-orange-900"
      >
        <button onClick={handleToggle}>Suivre Précommande</button>
       
      </div>
      {isFormVisible && (                                                                                                                             
        <div className="ml-60 absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 p-4 border rounded-lg shadow-lg bg-white z-50">
          <form >
            <div className="mb-4">
            <button className="bg-orange-400 w-10 ml-40" onClick={handleToggle}>X</button>
              <label htmlFor="orderNumber" className="block text-gray-700">
                Numéro de précommande
              </label>
              <input
                type="text"
                id="orderNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-300 focus:border-orange-300"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
            >
              Suivant
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Menue;
