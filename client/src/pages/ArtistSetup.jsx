import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ArtistSetup() {
    const navigate = useNavigate();

    const [options, setOptions] = useState([false, false, false, false, false]);

    const handleOptionClick = (option) => {
        if (option === 'musician') {
            if (options[0] === false) {
                setOptions((prevOptions) => [true, ...prevOptions.slice(1)]);
            } else {
                setOptions((prevOptions) => [false, ...prevOptions.slice(1)]);
            }
        } else if (option === 'composer') {
            if (options[1] === false) {
                setOptions((prevOptions) => [prevOptions[0], true, ...prevOptions.slice(2)]);
            } else {
                setOptions((prevOptions) => [prevOptions[0], false, ...prevOptions.slice(2)]);
            }
        } else if (option === 'producer') {
            if (options[2] === false) {
                setOptions((prevOptions) => [...prevOptions.slice(0,2), true, ...prevOptions.slice(3)]);
            } else {
                setOptions((prevOptions) => [...prevOptions.slice(0,2), false, ...prevOptions.slice(3)]);
            }
        } else if (option === 'audio engineer') {
            if (options[3] === false) {
                setOptions((prevOptions) => [...prevOptions.slice(0,3), true, prevOptions[4]]);
            } else {
                setOptions((prevOptions) => [...prevOptions.slice(0,3), false, prevOptions[4]]);
            }
        } else if (option === 'lyricist') {
            if (options[4] === false) {
                setOptions((prevOptions) => [...prevOptions.slice(0,4), true]);
            } else {
                setOptions((prevOptions) => [...prevOptions.slice(0,4), false]);
            }
        }
    }
    
    const prompts = [
        "Would you like to create an artist profile?",
        "What type of artist would you classify yourself as?",
        "What genres are you interested in?",
        "Which instruments do you play?",
        "Write down a quick artist bio of yourself to tell us what you're all about",
        "You may link references to social media accounts if you like"
    ];

    const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

    const handleNextPrompt = () => {
        if (currentPromptIndex < prompts.length - 1) {
            setCurrentPromptIndex(currentPromptIndex + 1);
        } else {
            navigate('/hub');
            console.log('Artist profile created successfully');
        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div>
                    <h1 className='text-5xl py-4 font-bold'>{prompts[currentPromptIndex]}</h1>
                    {currentPromptIndex === 0 ? (
                    <div className='flex justify-around my-5 text-2xl'>
                        <button className='hover:text-gray-400' onClick={handleNextPrompt}>Yes, create artist profile</button>
                        <button className='hover:text-gray-400' onClick={() => navigate('/hub')}>No, skip</button>
                    </div>
                    ) : currentPromptIndex === 1 ? (
                        <>
                            <div className='flex justify-around my-5 text-2xl'>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options[0] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('musician')}
                                >
                                    <span className={`${ options[0] === false ? 'hover:text-gray-400' : '' }`}>Musician</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options[1] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('composer')}
                                >
                                    <span className={`${ options[1] === false ? 'hover:text-gray-400' : '' }`}>Composer</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options[2] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('producer')}
                                >
                                    <span className={`${ options[2] === false ? 'hover:text-gray-400' : '' }`}>Producer</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options[3] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('audio engineer')}
                                >
                                    <span className={`${ options[3] === false ? 'hover:text-gray-400' : '' }`}>Audio Engineer</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options[4] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('lyricist')}
                                >
                                    <span className={`${ options[4] === false ? 'hover:text-gray-400' : '' }`}>Lyricist</span>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <button onClick={handleNextPrompt} className='my-6 text-2xl'>Next</button>
                            </div>
                        </>
                        ) : currentPromptIndex === 2 ? (
                        <>
                            <button onClick={handleNextPrompt}>Next</button>
                        </>
                    ) : currentPromptIndex === 3 ? (
                        <>
                            <button onClick={handleNextPrompt}>Next</button>                            
                        </>
                    ) : currentPromptIndex === 4 ? (
                        <>
                            <button onClick={handleNextPrompt}>Next</button>                            
                        </>
                    ) : currentPromptIndex === 5 ? (
                        <>
                            <button onClick={handleNextPrompt}>Finish</button>
                        </>
                    ) : null
                }
                </div>
            </div>
        </>
    )
}