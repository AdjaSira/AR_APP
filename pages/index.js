// import Head from "next/head";
 import Image from "next/image";
 import Menue from "../components/menue"
 import Button from "../components/button";
// import { Inter } from "next/font/google";
import Menustyles from "../styles/menue.module.css";
import Buttonstyles from "../styles/button.module.css"
import Link from "next/link";




export default function Home() {
  return (
    <> 
       <div className="flex">
     
      <div className="">
      <Menue/> 
      
      </div>
      
      <div className="">
        
        <Button/>
      </div>
    </div>

    <div className="flex flex-wrap mt-20 flex-col md:flex-row">
      {/* Section gauche*/}
      <div className="bg-blue-500 w-1/2 h-96 flex flex-col justify-center items-center">
       
        
        
      </div>

      {/* Section droite  */}
      <div className="bg-gray-200 w-1/2 h-96 flex flex-col justify-center items-center">
        {/* Description */}
        <p>Description</p>
        
      </div>
    </div>


    <div className="flex flex-wrap mt-20 flex-col md:flex-row">
      {/* Section gauche*/}
      <div className="bg-blue-500 w-1/2 h-20 flex flex-col justify-center items-center">
       
       {/* button */}

      </div>

      <div className="bg-gray-200 w-1/2 h-60 flex flex-col justify-center items-center">
        
        <div className="bg-violet-100 w-full flex flex-col justify-center items-center">
          <p>Choix de couleurs</p>
        </div>

        
        <div className="bg-red-100 w-full flex flex-col justify-center items-center mt-4">
          <p>Choix de mémoire</p>
        
        </div>
      </div>
    </div>

     
     <footer className="bg-black w-full h-80 flex justify-center items-center mt-20">
        <p>Footer</p>
      </footer>
    


    </>
  );
}
