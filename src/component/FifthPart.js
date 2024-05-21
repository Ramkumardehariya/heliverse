import React from 'react'
import Common from "../common/Common";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";

const FifthPart = () => {
  return (
    <div className='mt-32 flex justify-center items-center text-white'>
        <div className='w-[1280px] flex flex-col justify-center items-center gap-16'>
            <div className='max-w-[500px]'>
              <div className='text-4xl font-semibold leading-tight '>An All-Round Plugin With Powerful Features</div>
              <div className='mt-8 text-neutral-400'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience</div>
            </div>
            <div className='flex md:flex-row lg:flex-row flex-col gap-4 justify-between'>
                <Common image={card1} title="Light Weight" para="Motion Art for Elementor is designed to be lightweight." />
                
                <Common image={card2} title="100% Responsive" para="Create a consistent visual experience across all devices." />
               
                <Common image={card3} title="User Friendly Interface" para="Ensure a smooth experience for both applicants and administrators." />
                
            </div>
        </div>
    </div>
  )
}

export default FifthPart