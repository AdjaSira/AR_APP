/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite-react/lib/**/*.js",
];
export const theme = {
  extend: {},
};
export const plugins = [
  require("flowbite/plugin")
];


