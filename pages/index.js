import React, { useState } from 'react';
import Menue from '@/components/menue';
import Footer from '@/components/footer';
import Poppup from '@/components/poppup';
import ColorPicker from '@/components/color';
import Memory from '@/components/memory';
import HeroSection from '@/components/heroSection';
import Image from 'next/image';
import Phonecard from '@/components/phonecard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import style from "../styles/swipper.module.css"
import 'swiper/css';
import 'swiper/css/navigation';


export default function Home() {
  const [poppupVisible, setPoppupVisible] = useState(false);

  const togglePoppup = () => {
    setPoppupVisible(!poppupVisible);
  };
  
  return (
    <>
      <div className="flex">
        <Menue />
      </div>

      <div className="w-full h-full">
      <Swiper navigation={true} modules={[Navigation]} >
        <SwiperSlide><HeroSection unoptimized src={"/video.gif"} title={"Matériaux"} description={"Ce telephone est trés performant"} togglePoppup={togglePoppup}/></SwiperSlide>
        <SwiperSlide><HeroSection unoptimized src={"/360_world.jpg"} title={"Matériaux"} description={"Ce telephone est trés performant"} togglePoppup={togglePoppup}/></SwiperSlide>
        <SwiperSlide><HeroSection unoptimized src={"/zfoldd.gif"} title={"Matériaux"} description={"Ce telephone est trés performant"} togglePoppup={togglePoppup}/></SwiperSlide>
      </Swiper>
      </div>

      <div className="flex mt-10">
        <Phonecard src={"/iPhone_15_Pro_Blue_Titanium_1_0.jpg"} title={"Iphone 15 Pro"} description={"628 000 CFA"} price={"532 000"} />
        <Phonecard src={"/téléchargement (3).jpeg"} title={"Iphone 15 Pro"} description={"628 000 CFA"} price={"532 000"} />
        <Phonecard src={"/téléchargement.jpeg"} title={"Iphone 15 Pro"} description={"628 000 CFA"} price={"532 000"} />
        <Phonecard src={"/ipad.jpeg"} title={"Iphone 15 Pro"} description={"628 000 CFA"} price={"532 000"} />
      </div>

      
      <Footer />
    </>
  );
}
{/* 
      <div className="grid grid-flow-col grid-rows-2 md:grid-cols-4 gap-8 max-h-[720px]">
         <div className="md:col-span-3 relative mt-2">
          <Image   src={"/video.gif"} width={1000} height={500} alt='/video' />
        </div> 
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:static md:ml-96 md:mt-10 md:bottom-auto">
          <button
            className="border-gray-400 rounded mt-36 px-5"
            onClick={togglePoppup}
          >
            <span className="py-7 px-16 text-gray-900 focus:outline-none text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:focus:ring-orange-900">
              Précommander
            </span> 
          </button>
        </div>
        <div className="md:col-start-4 md:mt-0">
          <div className="text-lg font-bold md:mt-10 mr-10">
            <p>Description</p>
            <br /><br />
          </div>
          <div className="liste">
            <ul className="flex flex-col mr-10">
              <li className="mb-4">
                <h2 className="text-orange-500 font-bold">Matériaux Premium :</h2> L&apos;iPhone 15 Pro est fabriqué avec un châssis en titane de qualité aéronautique, ce qui lui confère robustesse et légèreté.
              </li>
              <li className="mb-4">
                <h2 className="text-orange-500 font-bold">Couleurs : </h2>Disponible en plusieurs coloris élégants, incluant le noir sidéral, l&apos;argent, l&apos;or et un nouveau bleu profond.
              </li>
              <li className="mb-4">
                <h2 className="text-orange-500 font-bold">Écran :</h2> Écran Super Retina XDR de 6,1 pouces (ou 6,7 pouces pour le modèle Pro Max) .
              </li>
            </ul>
          </div>
        </div>
      </div>  */}