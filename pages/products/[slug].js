import Menue from '@/components/menue';
import Phonecard from '@/components/phonecard';
import React, { useState } from 'react';
import Image from 'next/image';
import Memory from '@/components/memory';
import ColorPicker from '@/components/color';
import  { useEffect } from 'react';

export async function getStaticPaths() {
    const products = [
        { id: '1', slug: 'iphone-15' },
        { id: '2', slug: 'galaxy-z-fold' },
        { id: '3', slug: 'galaxy-z-flip' },
        { id: '4', slug: 'ipad-pro' },
    ];

    const paths = products.map((product) => ({
        params: { slug: product.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    let productDetails = {};
    switch (slug) {
        case 'iphone-15':
            productDetails = {
                slug,
                name:"Iphone" ,
                type:"Iphone 15 Pro Max Space Black 128GO",
                price:"507 000 CFA",
                image:"/iPhone_15_Pro_Blue_Titanium_1_0.jpg",
                description: [
                    "L'iPhone 15 présente le même design épuré et minimaliste que le modèle de base de la gamme,",
                    "à la différence qu'il a des dimensions et un poids plus importants (147,6x71,6x7,8 mm et 171 g, respectivement)."
                ]
            };
            break;

        case 'galaxy-z-fold':
            productDetails = {
                slug,
                name:"Galaxy",
                type:"Galaxy Z Fold 2024 Beige",
                price:"700 000 CFA",
                image:"/téléchargement (3).jpeg",
                description:"Le Samsung Galaxy Z Fold 5 est le nouveau smartphone pliant de la firme. Il devrait arborer un design similaire à son predecesseur, mais être cette fois-ci équipé d'une charnière en forme de goutte d'eau, laissant moins apparaitre le pli. Une fois fermée, on profiterait toujours d'une dalle de 6,2 pouces, qui passerait à 7,6 pouces une fois dépliée. L'ensemble devrait tourner sous Snapdragon 8 Gen 2 et proposer différentes options de stockage (128, 256 ou 512 Go de stockage). En photo, il devrait devrait conserver le capteur principal ISOCELL GN3 de son predecesseur. Le reste de la configuration photo est encore mystérieuse. Il supporterait bien sûr le S-Pen, mais ne devrait pas bénéficier d'une emplacement dédié sur l'appareil."
            };
            break;

        case 'galaxy-z-flip':
            productDetails = {
                slug,
                name:"Galaxy",
                type:"Galaxy-Z-Flip Bleue Graphite 256Go",
                price:"900 000 CFA",
                image:"/téléchargement.jpeg",
                description:"Le Galaxy Z Flip4 est une pièce d'exception qui tiendra dans votre poche. Ses lignes contenues ne laissent pas indifférent, pour un smartphone qui tiendra aisément dans la paume de votre main. Ses couleurs mates révèleront votre personnalité et correspondront à votre humeur du jour*."
            };
            break;

        case 'ipad-pro':
            productDetails = {
                slug,
                name:"Ipad",
                type:"Ipad Pro 2024 Bleu Marine",
                price:"807 000 CFA",
                image:"/ipad.jpeg",
                description:"Le tout nouvel iPad Pro concentre une puissance étourdissante dans un design incroyablement fin, léger et portable. Repoussez les limites de l’expérience iPad en optant pour le modèle 11 pouces ultra-portable ou le modèle 13 pouces plus spacieux, le produit le plus fin qu’Apple ait jamais créé."
            };
            break;
    }
    
   

    return {
        props: {
            product: productDetails,
        },
    };
}



const PageDetail = ({ product }) => {
   
        const [quantity , setQuantity] = useState(1);
       
        
        const incrementQuantity = ()  => {
            setQuantity (quantity + 1)
        }
    
        const decrementQuantity = ()  => {
            if(quantity >  1 )
            setQuantity (quantity - 1 )
        };

      
    
    return (
        <div>
        <Menue />
        <section className='bg-black h-14 w-full text-white flex items-center  '>
            <p  className="text-gray-500 ml-10">Boutique en ligne</p><span className="mx-2"></span> <p>{product.name}</p>
        </section>
        <div  className="mt-6 ml-20 flex">
        <div  className="border-2 border-gray-300 p-24 pb-16  inline-block ">
        <Image src={product.image} width={300} height={10}  alt='/video'/>
        </div>
         <div className="ml-40 flex flex-col ">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-3xl font-bold mt-4">{product.type}</p>
                <div  className="mt-10  flex">
                 <div  className=" ">
                 <button className='border-2 p-1 rounded-md bg-black text-white'>Disponible</button>
                  <br></br>
                  <p className='text-2xl font-bold'>Quantité</p>
                  <br></br>
                  <button className='border-2 border-black p-2 pr-4 pl-4' onClick={decrementQuantity}>-</button><button className='border-2 border-black p-2 pr-4 pl-4 '>{quantity}</button><button className='border-2 border-black p-2 pr-4 pl-4' onClick={incrementQuantity}>+</button>
                 </div>
                    <div className="ml-40 flex flex-col ">
                    <h2 className="text-2xl font-bold text-orange-500 ">{product.price}</h2>
                    <br></br> <br></br>
                    <Memory/>
                    <br></br>
                    <ColorPicker/>
                   </div>
                </div>
            </div> 
            </div>

            <div className="mt-20 ">
            <h2 className="ml-20 text-2xl font-bold">Description</h2>
            <br></br>
            <p className='ml-20 font-bold'>{product.description}</p>
            </div>
       
    </div>
    );
};

export default PageDetail;
