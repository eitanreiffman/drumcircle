import React from 'react'
import Navbar from './Navbar'


export default function WelcomePage() {
  return (
    <>
    <Navbar />
    <div className='flex justify-center items-center h-screen'>
        <h1 className='text-blue-500 text-3xl font-bold'>Our React App Is Up And Running</h1>
    </div>
    </>
  )
}
