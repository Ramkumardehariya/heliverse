import React from 'react'
import Navbar from '../component/Navbar'
import Firstpart from '../component/Firstpart'
import Secondpart from '../component/Secondpart'
import Thirdpart from '../component/Thirdpart'
import FourthPage from '../component/FourthPage'
import FifthPart from '../component/FifthPart'
import Footer from '../component/Footer'

const Homepage = () => {
  return (
    <div className='relative bg-gray-900 m-0 p-0 overflow-x-hidden h-screen w-screen'>
       <Navbar/>
       <Firstpart/>
       <Secondpart/>
       <Thirdpart/>
       <FourthPage/>
       <FifthPart/>
       <Footer/>
    </div>
  )
}

export default Homepage