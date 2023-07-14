import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ArtistSetup() {
    const navigate = useNavigate();

    const [options, setOptions] = useState({
        'musician': false,
        'composer': false,
        'producer': false,
        'audio engineer': false,
        'lyricist': false,
        'rock': false,
        'folk': false,
        'jazz': false,
        'metal': false,
        'pop': false,
        'rap': false,
        'hip hop': false,
        'funk': false,
        'vocals': false,
        'guitar': false,
        'bass': false,
        'piano': false,
        'drums': false,
        'violin': false,
        'cello': false,
        'flute': false
    });

    const artistTypes = [
        'musician',
        'composer',
        'producer',
        'audio engineer',
        'lyricist',
    ]

    const genres = [
        'rock',
        'folk',
        'jazz',
        'metal',
        'pop',
        'rap',
        'hip hop',
        'funk'
    ]

    const instruments = [
        'vocals',
        'guitar',
        'bass',
        'piano',
        'drums',
        'violin',
        'cello',
        'flute'
    ]
    
    const prompts = [
        "Would you like to create an artist profile?",
        "What type of artist would you classify yourself as?",
        "What genres are you interested in?",
        "Which instruments do you play?",
        "Write an artist bio about yourself",
        "Link references to your social media accounts"
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

    const handleBackPrompt = () => {
        setCurrentPromptIndex(currentPromptIndex - 1);
    }

    const handleOptionClick = (option) => {
            setOptions((prevOptions) => {
            const updatedOptions = { ...prevOptions };
            updatedOptions[option] = !updatedOptions[option];
            return updatedOptions;
        });
    }

    const getOptionsArray = () => {
        switch (currentPromptIndex) {
            case 1:
                return artistTypes;
            case 2:
                return genres;
            case 3:
                return instruments;
            default:
                return [];
        }
    };

    const getOptionLabel = (option) => {
        return option
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    const [bio, setBio] = useState('');

    const handleBioChange = (event) => {
        setBio(event.target.value);
    }

    const [portfolioLinks, setPortfolioLinks] = useState({
        spotify: '',
        soundcloud: '',
        instagram: '',
        tiktok: '',
        youtube: ''
    })

    const handlePortfolioLinkChange = (event) => {
        const { name, value } = event.target;
        setPortfolioLinks((prevPortfolioLinks) => ({
            ...prevPortfolioLinks,
            [name]: value
        }));
    };

    const handleFinish = async () => {
        
        // Collect data from artist setup form
        
        const selectedArtistTypes = [];
        const selectedGenres = [];
        const selectedInstruments = [];

        for (const [option, isSelected] of Object.entries(options)) {
            if (isSelected) {
                if (artistTypes.includes(option)) {
                    selectedArtistTypes.push(option)
                } else if (genres.includes(option)) {
                    selectedGenres.push(option)
                } else if (instruments.includes(option)) {
                    selectedInstruments.push(option)
                }
            }
        }

        const providedPortfolioLinks = Object.entries(portfolioLinks)
            .filter(([key, value]) => value !== '')
            .reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj
            }, {});

        const artistData = {
            artistTypes: selectedArtistTypes,
            preferredGenres: selectedGenres,
            instruments: selectedInstruments,
            bio: bio,
            portfolioLinks: providedPortfolioLinks
        }

        const token = localStorage.getItem('token')

        const headers = {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }

        try {
            const response = await fetch('http://localhost:3000/artists', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(artistData)
            });

            if (response.ok) {
                console.log('Artist profile created successfully')
            } else {
                console.error('Error creating artist profile:', response.status)
            }
        } catch (error) {
            console.error('Error creating artist profile', error);
        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen w-screen">
                <div className='w-2/3'>
                    <h1 className='text-5xl text-center text-gray-700 py-4 font-bold'>{prompts[currentPromptIndex]}</h1>
                    {currentPromptIndex === 0 ? (
                    <div className='flex justify-around my-5 text-2xl'>
                        <button className='text-gray-700 hover:font-medium' onClick={handleNextPrompt}>Yes, create artist profile</button>
                        <button className='text-gray-700 hover:font-medium' onClick={() => navigate('/hub')}>No, skip</button>
                    </div>
                    ) : currentPromptIndex === 1 || currentPromptIndex === 2 || currentPromptIndex === 3 ? (
                        <>
                            <div className='flex flex-wrap justify-around my-5 text-2xl'>
                                {getOptionsArray(currentPromptIndex).map((option) => (
                                    <div
                                        key={option}
                                        className={`p-2 rounded-2xl cursor-pointer ${
                                            options[option] ?
                                            'border border-blue-500 bg-blue-200'
                                            : ''                                         
                                        }`}
                                        onClick={() => handleOptionClick(option)}
                                        >
                                        <span className={`${ !options[option] ? 'text-gray-700 hover:font-medium' : '' }`}>{getOptionLabel(option)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-between'>
                                <button onClick={handleBackPrompt} className='my-6 text-2xl text-gray-700 hover:font-medium'>Back</button>
                                <button onClick={handleNextPrompt} className='my-6 text-2xl text-gray-700 hover:font-medium'>Next</button>
                            </div>
                        </>
                        ) : currentPromptIndex === 4 ? (
                        <>
                            <div className='pt-4'>
                                <textarea 
                                className='w-full h-32 px-3 py-2 text-gray-700 text-lg font-bold border border-gray-200 rounded-2xl resize-none'
                                name=""
                                placeholder='Enter your artist bio'
                                value={bio}
                                onChange={handleBioChange} 
                                />
                            </div>
                            <div className="flex justify-between">
                                <button onClick={handleBackPrompt} className='my-6 text-2xl text-gray-700 hover:font-medium'>Back</button>
                                <button onClick={handleNextPrompt} className='my-6 text-2xl text-gray-700 hover:font-medium'>Next</button>                            
                            </div>
                        </>
                    ) : currentPromptIndex === 5 ? (
                        <>
                            <div className='pt-4'>
                                <div className='flex justify-center py-2'>
                                    <input 
                                    className='border rounded-2xl text-lg fond-bold w-96 p-2'
                                    type="text" 
                                    name='spotify'
                                    placeholder='Spotify'
                                    value={portfolioLinks.spotify}
                                    onChange={handlePortfolioLinkChange}
                                    />
                                </div>
                                <div className='flex justify-center py-2'>
                                    <input 
                                    className='border rounded-2xl text-lg fond-bold w-96 p-2'                                    
                                    type="text"
                                    name='soundcloud' 
                                    placeholder='Soundcloud'
                                    value={portfolioLinks.soundcloud}
                                    onChange={handlePortfolioLinkChange}
                                    />
                                </div>
                                <div className='flex justify-center py-2'>
                                    <input 
                                    className='border rounded-2xl text-lg fond-bold w-96 p-2'
                                    type="text" 
                                    name='instagram'
                                    placeholder='Instagram'
                                    value={portfolioLinks.instagram}
                                    onChange={handlePortfolioLinkChange}
                                    />
                                </div>
                                <div className='flex justify-center py-2'>
                                    <input 
                                    className='border rounded-2xl text-lg fond-bold w-96 p-2'
                                    type="text" 
                                    name='tiktok'
                                    placeholder='Tiktok'
                                    value={portfolioLinks.tiktok}
                                    onChange={handlePortfolioLinkChange}
                                    />
                                </div>
                                <div className='flex justify-center py-2'>
                                    <input 
                                    className='border rounded-2xl text-lg fond-bold w-96 p-2'
                                    type="text" 
                                    name='youtube'
                                    placeholder='Youtube'
                                    value={portfolioLinks.youtube}
                                    onChange={handlePortfolioLinkChange}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button onClick={handleBackPrompt} className='my-6 text-2xl text-gray-700 hover:font-medium'>Back</button>                
                                <button onClick={handleFinish} className='my-6 text-2xl text-gray-700 hover:font-medium'>Finish</button>
                            </div>
                        </>
                    ) : null
                }
                </div>
            </div>
        </>
    )
}