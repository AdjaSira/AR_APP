import React from "react";
import { useState } from "react";

const Memory = ()  => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return(
        <>
              <button
                onClick={toggleDropdown}
                id="dropdownRadioBgHoverButton"
                data-dropdown-toggle="dropdownRadioBgHover"
                className="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                Stockage
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            <div
                id="dropdownRadioBgHover"
                className={`z-10 ${isOpen ? '' : 'hidden'} w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
            >
                <ul
                    className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownRadioBgHoverButton"
                >
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                                id="default-radio-4"
                                type="radio"
                                value=""
                                name="default-radio"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                                htmlFor="default-radio-4"
                                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                                128GB
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                                checked
                                id="default-radio-5"
                                type="radio"
                                value=""
                                name="default-radio"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                                htmlFor="default-radio-5"
                                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                                264GB
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                                id="default-radio-6"
                                type="radio"
                                value=""
                                name="default-radio"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                                htmlFor="default-radio-6"
                                className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                                512GB
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </>

    );
};

export default Memory