import React, { useState, useEffect } from 'react'


export default function Hub() {
    
    const [variableString, setVariableString] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then((response) => response.json())
            .then((data) => {
                const message = data.message;
                setVariableString(message);
            })
            .catch((error) => {
                console.log('Error', error);
            });
    }, []);

  return (
    <>
        <div className='flex justify-center items-center h-screen'>
            <h1 className='text-3xl font-medium text-center text-gray-700'>
                Welcome to the Artist Hub
                <br />
                {variableString}
                </h1>
        </div>
    </>
  )
}
