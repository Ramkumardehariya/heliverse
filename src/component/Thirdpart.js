import React from 'react'
import { IoIosLock } from "react-icons/io";

const Thirdpart = () => {
  return (
    <div className='flex justify-center items-center mt-32 text-white'>
        <div className='w-[1280px] flex flex-col justify-center items-center'>
            <div className='text-4xl font-semibold w-[580px] text-center leading-tight'>
              Apply On Any Section Or Enable For Whole Page
            </div>
            <div className='mt-16 flex md:flex-row lg:flex-row flex-col gap-4 '>
                {/* left cart */}
                <div className='w-45% rounded-3xl border-2 border-neutral-700 shadow-4xl bg-neutral-800 mb-14'>
                    <div className=' my-10 mx-8'>
                        <div className='text-2xl text-left font-semibold'>Apply On Section</div>
                        <div className='my-4 text-left text-lg text-neutral-500'>Apply on section is a game-changer, offering an unparalleled way to
                         manage applications directly from your website.</div>
                         <div className='w-full h-[400px] border-2 rounded-3xl border-neutral-700'>
                            <div className='relative border-b-2 border-neutral-700 h-12 bcardbackgroundcolor'>
                                <div className='absolute flex flex-row gap-2 mt-5 ml-10'>
                                    <div className='h-2 w-2 rounded-full bg-white'></div>
                                    <div className='h-2 w-2 rounded-full bg-white'></div>
                                    <div className='h-2 w-2 rounded-full bg-white'></div>
                                </div>
                                <div className='text-center flex justify-center gap-2 items-center'>
                                     <div className='mt-3'><IoIosLock /></div>
                                     <div className='mt-3'>Section</div>
                                </div>
                            </div>
                            <div className='flex flex-row gap-4 my-8 mx-8 w-[560px] h-72'>
                                <div className='flex flex-col my-8 w-full h-full '>
                                    <div className='mx-10 rounded-3xl my-4 h-6 border-2 border-neutral-700'></div>
                                    <div className='rounded-3xl h-6 mr-24 border-2 border-neutral-700 mx-10'></div>
                                    <div className='rounded-3xl h-16 border-2 border-neutral-700 mx-10 mr-24 mt-12'></div>
                                </div>
                                <div className='w-full h-full rounded-3xl border-2 border-neutral-700'>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
                {/* right card */}
                <div className='w-50% mt-14 rounded-3xl border-2 border-neutral-700 shadow-4xl bg-neutral-800'>
                    <div className='my-10 mx-8'>
                        <div className='text-2xl text-left font-semibold'>Apply On Page</div>
                        <div className='my-4 text-left text-lg text-neutral-500'>Take your website to new heights with Motion Art for Elementor. 
                        Embrace the power of motion and animation.</div>
                        <div className='w-full h-[400px] border-2 rounded-3xl border-neutral-700'>
                            <div className='relative border-b-2 border-neutral-700 h-12 bcardbackgroundcolor'>
                                <div className='absolute flex flex-row gap-2 mt-5 ml-10'>
                                    <div className='h-2 w-2 rounded-full bg-white'></div>
                                    <div className='h-2 w-2 rounded-full bg-white'></div>
                                    <div className='h-2 w-2 rounded-full bg-white'></div>
                                </div>
                                <div className='text-center flex justify-center gap-2 items-center'>
                                     <div className='mt-3'><IoIosLock /></div>
                                     <div className='mt-3'>Page</div>
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <div className='flex items-center justify-center h-40'>
                                    <div className='h-12 -mt-16 w-72 border-2 rounded-3xl border-neutral-700'></div>
                                </div>
                                <div className='border-2 border-neutral-700'></div>
                                <div className='flex flex-row justify-center items-center h-40 gap-6'>
                                    <div className='h-28 w-28 border-2 rounded-3xl border-neutral-700'></div>
                                    <div className='h-28 w-28 border-2 rounded-3xl border-neutral-700'></div>
                                    <div className='h-28 w-28 border-2 rounded-3xl border-neutral-700'></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Thirdpart