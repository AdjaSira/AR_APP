import React, { useState } from "react";
import Poppup from "./poppup";

const DefaultImage = () => {
  const [currentImage, setCurrentImage] = useState(
    "iPhone_15_Pro_Blue_Titanium_1_0.jpg"
  );

  return { currentImage, setCurrentImage };
};

const Menue = () => {
  const [poppupVisible, setPoppupVisible] = useState(false);
  const { currentImage, setCurrentImage } = DefaultImage();

  const ImageChange = (image) => {
    setCurrentImage(image);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://www.orange.sn/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="logo.png" className="h-8" alt="Flowbite Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="fixed right-0 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-80"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto ml-80" id="navbar-default">
          <ul className="ml-30 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="">
              <a
                href="#"
                className={`block py-2 px-3 w-25 h-6 text-white bg-blue-700 md:bg-transparent md:text-orange-400 md:p-0 dark:text-white md:dark:text-blue-500 ${
                  currentImage === "iPhone_15_Pro_Blue_Titanium_1_0.jpg"
                    ? "bg-blue-700"
                    : ""
                }`}
                onClick={() => ImageChange("iPhone_15_Pro_Blue_Titanium_1_0.jpg")}
                aria-current="page"
              >
                Iphone 15
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className={`block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  currentImage === "téléchargement (2).jpeg"
                    ? "text-orange-400"
                    : ""
                }`}
                onClick={() => ImageChange("téléchargement (2).jpeg")}
              >
                Iphone 15 Pro
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className={`block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  currentImage === "téléchargement (3).jpeg"
                    ? "text-orange-400"
                    : ""
                }`}
                onClick={() => ImageChange("téléchargement (3).jpeg")}
              >
                Samsung Galaxy S24
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className={`block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  currentImage === "téléchargement.jpeg" ? "text-orange-400" : ""
                }`}
                onClick={() => ImageChange("téléchargement.jpeg")}
              >
                Galaxy Z Fold
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className={`block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  currentImage === "téléchargement (4).jpeg"
                    ? "text-orange-400"
                    : ""
                }`}
                onClick={() => ImageChange("téléchargement (4).jpeg")}
              >
                Ipad Pro
              </a>
            </li>
            <li className="">
              <button
                className="border-gray-400 rounded"
                onClick={() => setPoppupVisible(true)}
              >
                <span
                  className="py-2 px-3 text-gray-900 focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-orange-900 "
                >
                  Suivre Précommande
                </span>
              </button>
              <Poppup trigger={poppupVisible} setTrigger={setPoppupVisible}>
                <h2 className="titre text-orange-500">Numéro de précommande :</h2>
                <br />
                <input
                  className="input border border-orange-300"
                  type="text"
                  placeholder="Saisir..."
                />
                <br />
                <br />
                <button
                  className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Suivant
                </button>
              </Poppup>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menue;
