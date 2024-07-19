import React, { useState } from 'react';
import ImageCard from './ImageCard';
import Poppup from './poppup';
import ColorPicker from './color';
import Memory from './memory';
import Link from 'next/link';

export default function HeroSection({ src, title, description, title1 }) {
  
  return (
    <div className="relative">
       <div className="relative ">
       <div className="w-full h-96">
          <ImageCard src={src} title={title} description={description} title1={title1} />
       </div>
     </div>

     
    </div>
  );
}

     
          //   <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          //     <Poppup trigger={poppupVisible} setTrigger={setPoppupVisible}>
          //       <h2 className="text-orange-500">Nom :</h2>
          //       <input className="border border-orange-300" type="text" placeholder="Nom..." />
          //       <br /><br />
          //       <h2 className="text-orange-500">Prénom :</h2>  
          //       <input className="border border-orange-300" type="text" placeholder="Prénom..." />
          //       <br /><br />
          //       <h2 className="text-orange-500">Numéro de Télèphone :</h2>
          //       <input className="border border-orange-300" type="text" placeholder="Numéro..." />
          //       <br /><br />
          //       <ColorPicker />
          //       <br /><br />
          //       <Memory />
          //       <br /><br />
          //       <h2 className="text-orange-500">Choisissez votre option de paiement :</h2>
          //       <input type='radio' name='paiement' id='tontine' /> 
          //       <label htmlFor='tontine' className="ml-2 text-gray-700">Tontine</label>
          //         <br/>
          //       <input type='radio' name='paiement' id='paiement-unique' /> 
          //       <label htmlFor='paiement-unique' className="ml-2 text-gray-700">Paiement en une fois</label>
          //       <br /><br />
          //       <button className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
          //         Suivant
          //       </button>
          //     </Poppup>
          //   </div>
          // )} 
       
