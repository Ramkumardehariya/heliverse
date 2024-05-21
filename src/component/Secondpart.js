import React from 'react'
import first from "../images/first.png";
import second from "../images/second.png";
import third from "../images/third.png";
import star from "../images/star.png";
import StickStar from "../images/stick star.png"
import { GoArrowRight } from "react-icons/go";

const Secondpart = () => {
  return (
    <div className='flex justify-center items-center mt-32 text-white'>
    <div className='w-[1280px]'>
        <div className='font-semibold text-xl text-white'>
             Trusted by thousands of users around the world
        </div>
        <div className='flex md:flex-row flex-col justify-between mt-20'>
            <div className='flex flex-row gap-4'>
                <div>
                    <img src={first}/>
                </div>
                <div className='flex flex-col gap-5 items-center mt-5'>
                    <img src={star}/>
                    <div>4.5 Score,9 Reviews</div>
                </div>
            </div>

            <div className='flex flex-row gap-4'>
                <div>
                    <img src={second}/>
                </div>
                <div className='flex flex-col gap-5 items-center mt-5'>
                    <img src={star}/>
                    <div>4.5 Score,9 Reviews</div>
                </div>
            </div>

            <div className='flex flex-row gap-4'>
                <div>
                    <img src={third}/>
                </div>
                <div className='flex flex-col gap-5 items-center mt-5'>
                    <img src={star}/>
                    <div>4.5 Score,9 Reviews</div>
                </div>
            </div>
        </div>

        <div className='flex md:flex-row lg:flex-row flex-col justify-between mt-36'>
            <div className='flex flex-col w-[800px]'>
               <div className='text-5xl text-left leading-tight'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</div>
               <div className='mt-10 text-left text-lg text-[#888]'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</div>
               <button className='flex flex-row gap-6 rounded-2xl buttoncolor py-4 px-8 text-xl w-80 mt-8'>
                   <span>
                       Purchase From envato 
                   </span>
                   <span className='mt-1 text-2xl'>
                      <GoArrowRight />
                   </span>
               </button>

            </div>

            <div>
               <img src={StickStar}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Secondpart