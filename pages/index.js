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
import Mdstyle from "../components/phonecard"
import Link from 'next/link';


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

    
      <div className="w-full h-full ">
      <Swiper navigation={true} modules={[Navigation]} >
        <SwiperSlide><HeroSection unoptimized src={"/video.gif"}  title={"Iphone 15 Pro Max"} description={"Decouvrez le nouveau Iphone 15 Pro Max "}        togglePoppup={togglePoppup}/></SwiperSlide>
        <SwiperSlide><HeroSection unoptimized src={"/ipad.gif"}   title={"Ipad Pro 20"}       description={"Venez découvrir le Nouvel Ipad Pro 2020"}        togglePoppup={togglePoppup}/></SwiperSlide>
        <SwiperSlide><HeroSection unoptimized src={"/zfoldd.gif"} title={"Galazy Z Fold 5"}   description={"Entrez dans l'ére de l'IA Avec le galazy Zfold"} togglePoppup={togglePoppup}/></SwiperSlide>
      </Swiper>
      </div>

      <div className="flex mt-10 space-x-4">
      <Link href="/products/iphone-15" >
          <div>
            <Phonecard 
              src="/iPhone_15_Pro_Blue_Titanium_1_0.jpg" 
              title="Iphone 15 Pro" 
              description="628 000 CFA" 
              price="532 000" 
            />
          </div>
        </Link>
        <Link href="/products/galaxy-z-fold" >
          <div>
            <Phonecard 
              src="/téléchargement (3).jpeg" 
              title="Galaxy Z Fold" 
              description="725 000 CFA" 
              price="935 000" 
            />
          </div>
        </Link>
        <Link href="/products/galaxy-z-flip" >
          <div>
            <Phonecard 
              src="/téléchargement.jpeg" 
              title="Galaxy Z Flip" 
              description="800 000 CFA" 
              price="1 000 000" 
            />
          </div>
        </Link>
        <Link href="/products/ipad-pro" >
          <div>
            <Phonecard 
              src="/ipad.jpeg" 
              title="Ipad Pro" 
              description="500 000 CFA" 
              price="800 000" 
            />
          </div>
        </Link>
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