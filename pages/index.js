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


export default function Home() {
  const [poppupVisible, setPopuppVisible] = useState(false);

  const togglePoppup = () => {
    setPopuppVisible(!poppupVisible);
  };

 /* const containerRef = useRef();
  const [gltfScene, setGltfScene] = useState(null);

  useEffect(() => {
    
    const loadGLTFScene = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader().setPath('/public/');
    loader.load('scene.gltf', (gltf) => {
      const mesh = gltf.scene;
      scene.add(mesh);
      mesh.position.set(0, 1.05, -1)
    }, undefined, function (error) {
      console.error(error);
    });

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      if (gltfScene) {
        gltfScene.rotation.x += 0.01;
        gltfScene.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Nettoyage des ressources Three.js lors du démontage du composant
      renderer.dispose();
    };
  };

  // Appeler la fonction de chargement de la scène GLTF
  loadGLTFScene();
}, []);*/


 return (
    <>
      <div className="flex">
        <div className="">
          <Menue />
        </div>

        <div className="">
          {/* bouton */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 ml-10">
      <div  className="bg-gray-500 h-96 flex justify-center items-center">
        <div className="w-full md:w-1/2">
          {/* Image ou modèle 3D */}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
        <div className="w-full md:w-3/4 md:mx-auto lg:ml-60">
          <p className="text-lg font-bold mb-4 ">Description</p>
          <div className="liste"> 
            <ul className="flex flex-col">
              <li className="mb-4"><h2 className='text-orange-500'>Matériaux Premium :</h2> L'iPhone 15 Pro est fabriqué avec un châssis en titane de qualité aéronautique, ce qui lui confère robustesse et légèreté.</li>
              <li className="mb-4"><h2 className='text-orange-500'>Couleurs: </h2>Disponible en plusieurs coloris élégants, incluant le noir sidéral, l'argent, l'or et un nouveau bleu profond.</li>
              <li className="mb-4"><h2 className='text-orange-500' >Écran:</h2> Écran Super Retina XDR de 6,1 pouces (ou 6,7 pouces pour le modèle Pro Max) avec une résolution impressionnante et un taux de rafraîchissement ProMotion de 120 Hz, offrant une fluidité exceptionnelle.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

      <div className="flex flex-wrap mt-20 flex-row md:flex-row">
        <div className=" w-full md:w-1/2 h-20 flex justify-center md:justify-start items-center">
          <Button onClick={togglePoppup}/>
          <Poppup trigger={poppupVisible} setTrigger={setPopuppVisible}>
          <h2 className={style.titre}>Numéro de Téléphone :</h2>
          <br/>
          <input className={style.input} type="text" placeholder="Entrez votre numéro..." /> 
          <br/>  <br/>
          <button className={style.next}>Suivant</button>
          </Poppup>
         </div>

        <div className=" md:mb-0 mb-4  w-full md:w-1/2 h-50  flex flex-row justify-between md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:ml-40 text-lg font-bold w-full md:w-1/2 flex flex-col justify-center items-center">
          <ColorPicker/>
          </div>

          <div className=" w-full md:w-1/2 flex  justify-center items-center  ">
          <Memory/>
          </div>
        </div>
      </div>

      <div className="mt-20 ">
      <Footer/>
      </div>
    </>
 )};

