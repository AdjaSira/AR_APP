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
      </div>


      <div class="grid grid-flow-col grid-rows-2 md:grid-cols-4 gap-8 max-h-[720px]">
        <div className='md:col-span-3'>
        <img  src='iPhone_15_Pro_Blue_Titanium_1_0.jpg'/> 
        </div>
       <div className="md:col-start-4">
       <div className='text-lg font-bold  mt-20 mr-10'>
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

    <div className="flex flex-wrap justify-center md:justify-start  ">
      <div className="mr-96 mt-40  md:ml-0 md:mt-0">
          <Button onClick={togglePoppup} />
          <Poppup trigger={poppupVisible} setTrigger={setPopuppVisible}>
            <h2 className="titre  text-orange-500">Numéro de Téléphone :</h2>
            <br/>
            <input className="input border border-orange-300" type="text" placeholder="Entrez votre numéro..." /> 
            <br/><br/>
            <ColorPicker />
            <br/><br/>
            <Memory />
            <br/><br/>
            <button className=" text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-10 py-10 text-center me-2 mb-2 ">Suivant</button>
          </Poppup>
      </div>
    </div>
 

      <div  >
      <Footer/>
      </div>
    </>
 )};

