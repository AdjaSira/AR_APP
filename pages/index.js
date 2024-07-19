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

      <div  className="flex mt-10 space-x-4">
      <Link href="/products/iphone-15" >
          <div id="iphone-15">
            <Phonecard 
              src="/iPhone_15_Pro_Blue_Titanium_1_0.jpg" 
              title="Iphone 15 Pro" 
              description="628 000 CFA" 
              price="532 000" 
            />
          </div>
        </Link>
        <Link href="/products/galaxy-z-fold" >
          <div id="galaxy-z-fold">
            <Phonecard 
              src="/téléchargement (3).jpeg" 
              title="Galaxy Z Fold" 
              description="725 000 CFA" 
              price="935 000" 
            />
          </div>
        </Link>
        <Link href="/products/galaxy-z-flip" >
          <div  id="galaxy-z-flip">
            <Phonecard 
              src="/téléchargement.jpeg" 
              title="Galaxy Z Flip" 
              description="800 000 CFA" 
              price="1 000 000" 
            />
          </div>
        </Link>
        <Link href="/products/ipad-pro" >
          <div id="ipad-pro">
            <Phonecard 
              src="/ipad.jpeg" 
              title="Ipad Pro" 
              description="500 000 CFA" 
              price="800 000" 
            />
          </div>
        </Link>
      </div>

      <Link href="/products" >
      <div className='mt-16 flex justify-center'>
      <button className='' >
          <span className="py-6 px-12 text-gray-900 focus:outline-none text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm ">
            Voir Tout les Produits
          </span>
        </button>
      </div>
      </Link>
      
      <Footer />      
    </>
  );
}
