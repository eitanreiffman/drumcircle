import React from 'react'

export default function Navbar({isAuthenticated}) {

    const handleSignOut = () => {
        localStorage.clear();

        if (isAuthenticated) {
            isAuthenticated = false;
        }
    }

  return (
        <div className="w-full z-10 py-4 text-center text-xl font-bold">
            <ul className='flex justify-start'>
                <li className='mx-4'><a href='/'>Drumcircle</a></li>
                {isAuthenticated && <li className='mr-4'><a href='/hub'>Hub</a></li>}
                {!isAuthenticated && <li className='mr-4'><a href='/signup'>Sign Up</a></li>}
                {!isAuthenticated && <li className='mr-4'><a href='/login'>Log In</a></li>}
                <li className='mr-4'><a href='/about'>About Us</a></li>
                {isAuthenticated && <li className='ml-auto mr-4' onClick={handleSignOut}><a href='/'>Sign Out</a></li>}
            </ul>
        </div>
  )
}
