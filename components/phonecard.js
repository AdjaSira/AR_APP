import React from 'react'
import style from "../styles/phonecard.module.css"




export default function Phonecard({src,title,description,price}) {
  return (
    
   <div className={`$(style.part1) w-full  bg-gray-200 `} >
  <div  className="  bg-white border border-gray-200 w-80  shadow dark:bg-gray-800 dark:border-gray-700 ml-2" style={{ height: "400px" }}>
  <img src={src} width={200} className='h-60'  style={{marginLeft:"46px",marginTop:"40px"}}  />
  <div className="px-5 pb-5 mt-10 ml-16 ">
      <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <h7 className="tracking-tight text-3xl text-orange-500 dark:text-white  ">{description}</h7>
  <div className="flex items-center justify-between">
  <span className="line-through font-bold ">
    {price}
  </span>
  </div>
 </div>
</div> 

</div> 
   
    
     
   
   
   
  )
}
