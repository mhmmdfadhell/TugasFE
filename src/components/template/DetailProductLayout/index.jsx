import React from 'react'
import Navbar from '../../organism/Navbar'
import Footer from '../../organism/Footer'

export default function DetailProductLayout(props) {
  const {children} = props
    return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center w-full'>
        {children}
    </div>
    <Footer/>
    </>
  )
}
