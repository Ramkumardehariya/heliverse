import React from 'react'

const common = ({image, title, para}) => {
  return (
    <div className='border-2 border-neutral-700 shadow-2xl rounded-3xl bg-neutral-800'>
      <div className='my-8 mx-8 w-80 text-left'>
        <div className='bg-left '><img src={image}/></div>
        <div className='text-left text-2xl leading-tight my-4 font-semibold'>{title}</div>
        <div className='text-left text-lg text-neutral-400'>{para}</div>
      </div>
    </div>
  )
}

export default common