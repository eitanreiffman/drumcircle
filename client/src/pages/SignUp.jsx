import React, { useState } from 'react'

export default function SignUp() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Get user values
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            if (response.ok) {

                window.location.href = '/hub';

                alert('Sign up was successful')

                console.log('Sign up was successful')
            } else {

                alert('Sign up was unsuccessful')

                console.log('Sign up was unsuccessful')
            }
        } catch (error) {
            console.log(error)
            alert('An error has occurred during the sign up')
        }
    }

  return (
    <div className="flex justify-center items-center h-screen">
        <div className="max-w-xs p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
            <form onSubmit={handleSignUp} >
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
                    <label htmlFor="email" className='block mb-2 text-sm font-medium'>
                        Email
                    </label>
                    <input 
                        type="email" 
                        id='email'
                        value={email}
                        onChange={handleEmailChange}
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
                    Sign Up
                </button>
            </form>
        </div>
    </div>
    )
}
