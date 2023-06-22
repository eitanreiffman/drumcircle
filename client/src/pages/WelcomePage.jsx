import React from 'react'


export default function WelcomePage() {
  return (
    <>
    <div className='flex justify-center items-center h-screen text-center'>
        <div>
            <h1 className='text-8xl font-bold'>Drumcircle</h1> 
            <h1 className='text-5xl font-medium'>Sign Up <a className='text-blue-600 hover:text-blue-400' href='/signup'>Here</a></h1>
        </div>
    </div>
    </>
  )
}
