import React from 'react'
import motionLogo from "../images/MotionArtEffect-logo.png"

const Firstpart = () => {
  return (
    <div className='flex justify-center items-center w-full text-white mt-12'>   
      <div className='w-[1280px] flex flex-col'>
          <div className='flex md:flex-row lg:flex-row flex-col justify-between mt-10'>
                  <div>
                    <img src={motionLogo}/>
                   </div>
                   <button className='bg-white text-black rounded-lg px-8 py-4 w-[200px] md:w-auto font-semibold'>
                       Purchase Now
                   </button>
          </div>
          <div className='flex md:flex-row lg:flex-row flex-col mt-24'>
               <div className='text-lg tracking-widest max-w-[200px]'>
                    <p className='gradient-class left-0 text-left'>Transform</p>
                    <div className='gradient-class left-0 text-left'>Your website</div> 
                    <div className='text-left'>With Motion Art </div>
                    <div className='text-left'>Effect</div>
               </div>
               
               <div className=''>
                  <div className=' max-w-[600px] font-semibold text-white text-7xl text-left leading-tight ml-36 '> Attract Your Visitors Attention With Colorful <span className='gradient-class'>Motion Art Effect</span> </div>
                  <div className='w-[600px] ml-36 text-lg text-left text-white mt-12'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website</div>
               </div>
               
          </div>
          
      </div>
    </div>
  )
}

export default Firstpart