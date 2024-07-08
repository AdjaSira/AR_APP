import React,{useState} from 'react'
import Image from 'next/image'
import ColorPicker from './color';
import Memory from './memory';
import Poppup from './poppup';

export default function ImageCard({src, title, description}) {
  const [poppupVisible, setPoppupVisible] = useState(false);

  const togglePoppup = () => {
    setPoppupVisible(!poppupVisible);
  };


  return (
    <div>
      <div className='w-full relative layout fill '>
      <Image src={src} width={1500} height={10}  alt='/video'/>
      <div className=" absolute bottom-12 left-1/2  transform -translate-x-1/2   text-white p-40 w-full   "style={{ marginBottom: "300px"   }}>
          <h1 className="text-lg font-bold " >{title}</h1>
          <p className='text-balance'  style={{fontSize:"35px", width: "60%",lineHeight: "1.5"}} >{description}</p>
          <button className=" absolute inset-0 flex items-center justify-center  transform -translate-x-1/2  border-gray-400 rounded px-5 mt-60 " style={{marginLeft:"250px"}}onClick={togglePoppup} >
          <span className="py-6 px-12 text-gray-900 focus:outline-none text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm ">
            Précommander
          </span>
        </button>
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





    </div>

    
  )
}
