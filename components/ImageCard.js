import React from 'react'
import Image from 'next/image'

export default function ImageCard({src,title,description}) {
  return (
    <div>
      <div className='w-full'>
      <div className=''>
      <Image src={src} width={1500} height={30} alt='/video'/>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center bg-opacity-75 bg-black text-white p-4 w-full mb-96">
      <h1 className="text-lg font-bold">{title}</h1>
      <p>{description}</p>
    </div>
      </div>
    </div>
    </div>
  )
}
