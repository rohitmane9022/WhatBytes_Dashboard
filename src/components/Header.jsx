import Image from 'next/image'
import { FaMap } from "react-icons/fa";
import MineImage from ".././Image/MineImage.jpg"


const Header = () => {
  return (
    <nav className='text-black flex justify-between px-10 py-6 border-b '>
      <div className='flex gap-2 items-center text-xl sm:text-3xl'>  
      <div><FaMap className='size-6'/></div>
      <h1 className='font-bold'>WhatBytes</h1>
      </div>
      <div className='flex items-center gap-2 border-gray-400 border px-2 py-1 rounded-lg '>
      <Image src={MineImage} alt='Image' width={30} height={30} className="rounded-full object-cover"/>
      <p className=' text-lg font-semibold font-inter'>Rohit Mane</p>
      </div>
    </nav>
  )
}

export default Header