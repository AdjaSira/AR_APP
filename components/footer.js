import React from "react";
import { useState } from "react";
import IconName from "./iconeName";



const Footer =  () => {
    return(
 
        <footer className="w-full bg-black">
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-4 gap-2">
            <div className="ml-10 text-white font-bold mt-10 flex items-center mr-10">
              <IconName className="w-8 h-8 " icon="RiCustomerService2Fill" />
              <span className="ml-2">Contacter Orange</span> 
            </div>
            <div className="text-white font-bold mt-10  flex items-center justify-center mr-12">
              <IconName  className="w-8 h-8 mx-4  " icon="MdOutlineWhereToVote"  />
              <span className="ml-2">Agence</span> 
            </div>
            <div className="text-white font-bold mt-10 ml-12 flex items-center ">
              <IconName  className="w-8 h-8 mr-4" icon="FaShop" />
              <span className="ml-4"> Boutique</span> 
            </div>
            <div className="text-white font-bold mt-10 flex items-center">
              RetrouvezNous:
              <span className="ml-2" ><IconName icon="FaFacebook" /></span>  
              <span className="ml-2" ><IconName icon="FaInstagram" /></span> 
              <span className="ml-2" ><IconName icon="FaTwitter" /></span>
              <span className="ml-2" ><IconName icon="CiLinkedin" /></span> 
              <span className="ml-2" ><IconName icon="FaGooglePlusG" /></span> 
            </div>
          </div>
      
          <hr className="mt-10 w-3/4 mx-auto" />
      
          <div className="w-full max-w-screen-xl mx-auto py-6 lg:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-4">
              <div>
                <h2 className="mb-6  font-bold text-white uppercase">Offres Mobiles</h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Pass Internet</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Illimix</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Jamono</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Offres Family</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Roaming et Tarifs vers l&apos;international</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Domino 4G</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-white font-bold uppercase">Internet/Fixe/TV</h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Gamme Box</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">La Tv d&apos;orange</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">5G</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Fibre</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-white font-bold">BOUTIQUE EN LIGNE</h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Accessoires</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Mobiles</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Internet et Fixe</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">E-Cartes</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Maisons Connectés</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Sim-eSim</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-white font-bold">ORANGE ET VOUS</h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Les Codes USSD à Connaitre</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Orange S&apos;engage</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Portail Magique</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Wido</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Conseils Usages Terminaux</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Partagez Vos Idées</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Service Client Digital</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">CGU Sargal</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Annuaire</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-white font-bold">INFORMATIONS LEGALES</h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Politique de Confidentialité</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Conditions Générales de la Vente</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Conditions Générales d&apos;utilisation</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">CGU Maxit</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Conditions Générales de Vente E-Shop</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Traitement Erreurs de Vente SEDDO</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Couverture Réseau</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">CGU Transfert Bonus</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">CGU Orange Money Partenaires</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Entreprises</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">CGV pour la vente seddo</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">CGV applications Orange Money</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Nos Certifications et Label</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      
          <hr className="mt-10 w-3/4 mx-auto" />
      
<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto mt-6">
          <div className="flex mt-10 justify-center mr-40 mb-10">
            <div className="text-orange-500 mr-4 cursor-pointer">Particuliers</div>
            <div className="text-white mr-4 hover:text-orange  cursor-pointer">Professionnels</div>
            <div className="text-white hover:text-orange cursor-pointer">Entreprises</div>
          </div> 
          <div className="flex mt-10 justify-center mr-10">
            <div className="text-white mr-4 cursor-pointer">Orange 2021</div>
            <div className="text-white mr-4 hover:text-orange cursor-pointer">Kiréne avec Orange</div>
            <div className="text-white hover:text-orange mr-4 cursor-pointer">Sonatel</div>
            <div className="text-white hover:text-orange mr-4 cursor-pointer">Couverture Réseau</div>
            <div className="text-white hover:text-orange cursor-pointer">Orange.com</div>
          </div> 
</div>


</div>
</footer>

      
    

        
    );
};

export default Footer