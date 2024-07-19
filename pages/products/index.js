   import React, { Children } from "react"
   import Layout from "@/components/layout";
   import Image from "next/image";
   import Link from "next/link";
   import Phonecard from "@/components/phonecard";
   const products = () => {

   
   return (
        
         
            
            <Layout> 
               <div >
                <h1>TOUS MES PRODUITS</h1>
                 <Image src="/imgQuickSaleHero1.jpg"  alt='#'/>
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
                 </div>
            </Layout>
            

         
        
    )


}  
export default  products;
