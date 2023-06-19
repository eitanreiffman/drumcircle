import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function Posts() {

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
        <Navbar />
        <h1 className='text-blue-500 text-3xl font-bold'>{variableString}</h1>
    </>
  )
}
