import React from 'react'

const Footer = () => {
  return (
    <div className='mt-32 w-full h-14 backgroundColor'>
        <div className='flex justify-center items-center'>
            <div className='w-[1280px] mt-4 flex justify-between items-center'>
                <div>
                   © 2023 Copywrite. All rights reserved by QodeMatrix
                </div>
                <div className='flex flex-row  gap-8'>
                    <div>Documentaion</div>
                    <div>Support</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer