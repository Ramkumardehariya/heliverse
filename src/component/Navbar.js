import React from 'react'
import logo from "../images/envatomarketlogo.png";

const Navbar = () => {
  return (
    <div className='fixed h-14 bg-slate-800 flex flex-row justify-between '>
        <div className='w-[1580px]'>
          <div className='w-32 ml-8 -mt-2'>
              <img className='' src={logo}/>
          </div>
          <div className='-mr-[1200px] -mt-12'>
              <button className='text-white bg-green-800 px-2 py-1 rounded-md'>
                  Buy now
              </button>
          </div>
        </div>
    </div>
  )
}

export default Navbar;