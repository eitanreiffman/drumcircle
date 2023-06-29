import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ArtistSetup() {
    const navigate = useNavigate();
    
    const [prompts, setPrompts] = useState([
        "Would you like to create an artist profile?",
        "What type of artist would you classify yourself as?",
        "What genres are you interested in?",
        "Which instruments do you play?",
        "Write down a quick artist bio of yourself to tell us what you're all about",
        "You may link references to social media accounts if you like"
    ]);

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
                    <h1 className='text-5xl font-bold'>{prompts[currentPromptIndex]}</h1>
                    {currentPromptIndex === 0 ? (
                    <div className='flex justify-around my-5 text-2xl'>
                        <button className='hover:text-gray-400' onClick={handleNextPrompt}>Yes, create artist profile</button>
                        <button className='hover:text-gray-400' onClick={() => navigate('/hub')}>No, skip</button>
                    </div>
                    ) : currentPromptIndex === 1 ? (
                        <>
                            <button onClick={handleNextPrompt}>Next</button>
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