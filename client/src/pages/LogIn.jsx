import React, { useState } from 'react'

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogIn = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                // Login successful
                const data = await response.json();
                // Check if response contains a redirect URL for Artist Setup
                // This would only be true if the user hasn't set up an Artist Profile
                if (data.redirectUrl) {
                    // Redirects to Artist Setup
                    window.location.href = data.redirectUrl;
                } else {
                const token = data.token;
                // Store token in localStorage or secure storage mechanism
                localStorage.setItem('token', token);
                // Redirect logged in user to Artist Hub
                window.location.href = '/hub';
            }
            } else {
                // Login failed
                console.log('Login failed')
            }
        } catch (error) {
            console.error('Failed to log in:', error)
        }
    };

  return (
    <>
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-xs p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
                <form onSubmit={handleLogIn} >
                    <div className="mb-4">
                        <label htmlFor="username" className='block mb-2 text-sm font-medium'>
                            Username
                        </label>
                        <input 
                            type="username" 
                            id='username'
                            value={username}
                            onChange={handleUsernameChange}
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className='block mb-2 text-sm font-medium'>
                            Password
                        </label>
                        <input 
                            type="password" 
                            id='password'
                            value={password}
                            onChange={handlePasswordChange}
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}
