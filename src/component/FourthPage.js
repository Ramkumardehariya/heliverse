import React from 'react'
import chrome from "../images/chrome.png"

const FourthPage = () => {
  return (
    <div className='flex justify-center items-center mt-32 text-white'>
        <div className='w-[1280px] flex justify-center items-center border-2 rounded-3xl border-neutral-700 shadow-4xl bg-neutral-800'>
            <div className='my-12 flex flex-col gap-6'>
                <div className='text-2xl font-semibold'>Supported by All Popular Browsers</div>
                <div className='w-[450px] text-lg text-neutral-500'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</div>
                <img src={chrome}/>
            </div>
        </div>
    </div>
  )
}

export default FourthPage