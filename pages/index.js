import React, { useState } from 'react';
import Image from 'next/image';
import Menue from '@/components/menue';
import Footer from '@/components/footer';
import Poppup from '@/components/poppup';
import ColorPicker from '@/components/color';
import Memory from '@/components/memory';


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

      <div className="grid grid-flow-col grid-rows-2 md:grid-cols-4 gap-8 max-h-[720px]">
        <div className="md:col-span-3 relative mt-2">
          <Image src={'/video.gif'} width={1000} height={500} alt='/video' />
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
                <h2 className="text-orange-500">Matériaux Premium :</h2> L&apos;iPhone 15 Pro est fabriqué avec un châssis en titane de qualité aéronautique, ce qui lui confère robustesse et légèreté.
              </li>
              <li className="mb-4">
                <h2 className="text-orange-500">Couleurs: </h2>Disponible en plusieurs coloris élégants, incluant le noir sidéral, l&apos;argent, l&apos;or et un nouveau bleu profond.
              </li>
              <li className="mb-4">
                <h2 className="text-orange-500">Écran:</h2> Écran Super Retina XDR de 6,1 pouces (ou 6,7 pouces pour le modèle Pro Max) .
              </li>
            </ul>
          </div>
        </div>
      </div>

      {poppupVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <Poppup trigger={poppupVisible} setTrigger={setPoppupVisible}>
            <h2 className="text-orange-500">Nom :</h2>
            <input className="border border-orange-300" type="text" placeholder="Nom..." />
            <br /><br />
            <h2 className="text-orange-500">Prénom :</h2>  
            <input className="border border-orange-300" type="text" placeholder="Prénom..." />
            <br /><br />
            <h2 className="text-orange-500">Numéro de Télèphone :</h2>
            <input className="border border-orange-300" type="text" placeholder="Numéro..." />
            <br /><br />
            <ColorPicker />
            <br /><br />
            <Memory />
            <br /><br />
            <h2 className="text-orange-500">Choisissez votre option de paiement :</h2>
            <input type='radio' name='paiement' id='tontine' /> 
            <label htmlFor='tontine' className="ml-2 text-gray-700">Tontine</label>
              <br/>
            <input type='radio' name='paiement' id='paiement-unique' /> 
            <label htmlFor='paiement-unique' className="ml-2 text-gray-700">Paiement en une fois</label>
            <br /><br />
            <button className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
              Suivant
            </button>
          </Poppup>
        </div>
      )}

      <Footer />
    </>
  );
}