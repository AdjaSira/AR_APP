import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Menue from '@/components/menue';
import Button from '@/components/button';
import Footer from '@/components/footer';
import Memory from '@/components/memory';
import { color } from 'three/examples/jsm/nodes/Nodes';
import ColorPicker from '@/components/color';
import Poppup from '@/components/poppup';
import style from "../styles/poppup.module.css"
import Image from 'next/image';


export default function Home() {
  const [poppupVisible, setPopuppVisible] = useState(false);

  const togglePoppup = () => {
    setPopuppVisible(!poppupVisible);
  };

 return (
    <>
      <div className="flex">
        <div className="">
          <Menue />
        </div>
      </div>


      <div class="grid grid-flow-col grid-rows-2 md:grid-cols-4 gap-8 max-h-[720px]">
        <div className='md:col-span-3 relative '>
        <Image  src={'/video.gif'} width={'1000'} height={'500'} />  
        </div>
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 md:static md:ml-96 md:mt-10 md:bottom-auto'>
             <button 
          
                      className=" border-gray-400 rounded mt-60 "
                      onClick={() => setPopuppVisible(true)}
                    >
                      <span
                        className=" py-2 px-3 text-gray-900 focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:focus:ring-orange-900 "
                      >
                        Précommander
                      </span>
                </button>
       </div>
       <div className="md:col-start-4 md:mt-0 ">
       <div className='text-lg font-bold md:mt-10 mr-10'>
       <p>Description</p>
       <br/><br/>
       </div>
          <div className="liste"> 
            <ul className="flex flex-col mr-10">
              <li className="mb-4"><h2 className='text-orange-500'>Matériaux Premium :</h2> L'iPhone 15 Pro est fabriqué avec un châssis en titane de qualité aéronautique, ce qui lui confère robustesse et légèreté.</li>
              <li className="mb-4"><h2 className='text-orange-500'>Couleurs: </h2>Disponible en plusieurs coloris élégants, incluant le noir sidéral, l'argent, l'or et un nouveau bleu profond.</li>
              <li className="mb-4"><h2 className='text-orange-500'>Écran:</h2> Écran Super Retina XDR de 6,1 pouces (ou 6,7 pouces pour le modèle Pro Max) .</li>
            </ul>
        </div>
        </div>
      </div>

      

  <div className="mt-4 md:hidden">
      
          <Poppup trigger={poppupVisible} setTrigger={setPopuppVisible}>
            <h2 className="titre  text-orange-500">Numéro de Téléphone :</h2>
            <br/>
            <input className="input border border-orange-300" type="text" placeholder="Entrez votre numéro..." /> 
            <br/><br/>
            <ColorPicker />
            <br/><br/>
            <Memory />
            <br/><br/>
            <button className=" text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2   text-center me-2 mb-2 ">Suivant</button>
          </Poppup>
  </div>
 

      <div className='position-fixed' >
      <Footer/>
      </div>
    </>
 )};

