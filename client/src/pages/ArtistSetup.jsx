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

    const handleOptionClick = (option) => {
        setOptions((prevOptions) => {
            const updatedOptions = { ...prevOptions };
            updatedOptions[option] = !updatedOptions[option];
            return updatedOptions;
        });
    }
    
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

        const providedPortfolioLinks = portfolioLinks.filter(([key, value]) => value !== null)

        const artistData = {
            artistTypes: selectedArtistTypes,
            preferredGenres: selectedGenres,
            instruments: selectedInstruments,
            bio: bio,
            portfolioLinks: providedPortfolioLinks
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
                    ) : currentPromptIndex === 1 ? (
                        <>
                            <div className='flex flex-wrap justify-around my-5 text-2xl'>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['musician'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('musician')}
                                >
                                    <span className={`${ options['musician'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Musician</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['composer'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('composer')}
                                >
                                    <span className={`${ options['composer'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Composer</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['producer'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('producer')}
                                >
                                    <span className={`${ options['producer'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Producer</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['audio engineer'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('audio engineer')}
                                >
                                    <span className={`${ options['audio engineer'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Audio Engineer</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['lyricist'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('lyricist')}
                                >
                                    <span className={`${ options['lyricist'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Lyricist</span>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <button onClick={handleBackPrompt} className='my-6 text-2xl text-gray-700 hover:font-medium'>Back</button>
                                <button onClick={handleNextPrompt} className='my-6 text-2xl text-gray-700 hover:font-medium'>Next</button>
                            </div>
                        </>
                        ) : currentPromptIndex === 2 ? (
                        <>
                            <div className='flex flex-wrap justify-around my-5 text-2xl'>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['rock'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('rock')}
                                >
                                    <span className={`${ options['rock'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Rock</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['folk'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('folk')}
                                >
                                    <span className={`${ options['folk'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Folk</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['jazz'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('jazz')}
                                >
                                    <span className={`${ options['jazz'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Jazz</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['metal'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('metal')}
                                >
                                    <span className={`${ options['metal'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Metal</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['pop'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('pop')}
                                >
                                    <span className={`${ options['pop'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Pop</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['rap'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('rap')}
                                >
                                    <span className={`${ options['rap'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Rap</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['hip hop'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('hip hop')}
                                >
                                    <span className={`${ options['hip hop'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Hip Hop</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['funk'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('funk')}
                                >
                                    <span className={`${ options['funk'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Funk</span>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <button onClick={handleBackPrompt} className='my-6 text-2xl text-gray-700 hover:font-medium'>Back</button>
                                <button onClick={handleNextPrompt} className='my-6 text-2xl text-gray-700 hover:font-medium'>Next</button>
                            </div>                        </>
                    ) : currentPromptIndex === 3 ? (
                        <>
                            <div className='flex flex-wrap justify-around my-5 text-2xl'>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['vocals'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('vocals')}
                                >
                                    <span className={`${ options['vocals'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Vocals</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['guitar'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('guitar')}
                                >
                                    <span className={`${ options['guitar'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Guitar</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['bass'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('bass')}
                                >
                                    <span className={`${ options['bass'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Bass</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['piano'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('piano')}
                                >
                                    <span className={`${ options['piano'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Piano</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['drums'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('drums')}
                                >
                                    <span className={`${ options['drums'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Drums</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['violin'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('violin')}
                                >
                                    <span className={`${ options['violin'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Violin</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['cello'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('cello')}
                                >
                                    <span className={`${ options['cello'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Cello</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['flute'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('flute')}
                                >
                                    <span className={`${ options['flute'] === false ? 'text-gray-700 hover:font-medium' : '' }`}>Flute</span>
                                </div>
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