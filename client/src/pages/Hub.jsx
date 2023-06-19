import React from 'react'
import Navbar from './Navbar'


export default function Hub() {
  return (
    <>
        <Navbar />
        <div className='flex justify-center items-center h-screen'>
            <h1 className='text-blue-500 text-3xl font-bold'>Welcome to the Artist Hub</h1>
        </div>
    </>
  )
}
