import React, { Children } from "react";
import Menue from "./menue";
import Footer from "./footer";


export default function Layout({Children}) {
  return (
    <div>
       <div>
       <Menue/>
       </div>
       <div>
       {Children}
       </div>
       <div>
       <Footer/>
       </div>
    </div>
  )
}
