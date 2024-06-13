import React from "react";
import { useState } from "react";
import IconName from "./iconeName";



const Footer =  () => {
    return(
 
        <footer className="w-full bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ml-0 md:ml-40 py-10">
            <div className="text-white font-bold mt-10 flex items-start mr-10">
              <IconName className="w-20 h-20 mr-2" icon="RiCustomerService2Fill" /> Contacter Orange
            </div>
            <div className="text-white font-bold mt-10 flex items-start mr-10">
              <IconName icon="MdOutlineWhereToVote" /> Agences
            </div>
            <div className="text-white font-bold mt-10 flex items-start mr-10">
              <IconName icon="FaShop" /> Boutique
            </div>
            <div className="text-white font-bold mt-10 flex items-start">
              Retrouvez nous sur :
              <IconName icon="FaFacebook" /> 
              <IconName icon="FaInstagram" />
              <IconName icon="FaTwitter" /> 
              <IconName icon="CiLinkedin" /> 
              <IconName icon="FaGooglePlusG" />
            </div>
          </div>
      
          <hr className="mt-10 w-3/4 mx-auto" />
      
          <div className="w-full max-w-screen-xl mx-auto py-6 lg:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-4">
              <div>
                <h2 className="mb-6 text-sm font-bold text-white uppercase">Offres Mobiles</h2>
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
                    <a href="#" className="hover:text-orange-500">Roaming et Tarifs vers l'international</a>
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
                    <a href="#" className="hover:text-orange-500">La Tv d'orange</a>
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
                <h2 className="mb-6 text-white font-bold">Boutique en Ligne</h2>
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
                <h2 className="mb-6 text-white font-bold">Orange et Vous</h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Les Codes USSD à Connaitre</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Orange S'engage</a>
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
                <h2 className="mb-6 text-white font-bold">Informations Légales</h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Politique de Confidentialité</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Conditions Générales de la Vente</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-orange-500">Conditions Générales d'utilisation</a>
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
          <div className="flex mt-10 justify-center">
        <div className="text-orange-500 mr-4">Particuliers</div>
        <div className="text-white mr-4 hover:text-orange">Professionnels</div>
        <div className="text-white hover:text-orange">Entreprises</div>
      </div> 
      <div className="flex mt-10 justify-center">
        <div className="text-white mr-4">Orange 2021</div>
        <div className="text-white mr-4 hover:text-orange">Kiréne avec Orange</div>
        <div className="text-white hover:text-orange mr-4">Sonatel</div>
        <div className="text-white hover:text-orange mr-4">Couverture Réseau</div>
        <div className="text-white hover:text-orange">Orange.com</div>
      </div> 
    </div>
  </div>
</footer>

      
    

        
    );
};

export default Footer