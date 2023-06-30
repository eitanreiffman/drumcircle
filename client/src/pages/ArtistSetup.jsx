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

    const [socialMedia, setSocialMedia] = useState({
        spotify: '',
        soundcloud: '',
        instagram: '',
        tiktok: '',
        youtube: ''
    })

    const handleSocialMediaChange = (event) => {
        const { name, value } = event.target;
        setSocialMedia((prevSocialMedia) => ({
            ...prevSocialMedia,
            [name]: value
        }));
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen w-screen">
                <div className='w-2/3'>
                    <h1 className='text-5xl text-center py-4 font-bold'>{prompts[currentPromptIndex]}</h1>
                    {currentPromptIndex === 0 ? (
                    <div className='flex justify-around my-5 text-2xl'>
                        <button className='hover:text-gray-400' onClick={handleNextPrompt}>Yes, create artist profile</button>
                        <button className='hover:text-gray-400' onClick={() => navigate('/hub')}>No, skip</button>
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
                                    <span className={`${ options['musician'] === false ? 'hover:text-gray-400' : '' }`}>Musician</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['composer'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('composer')}
                                >
                                    <span className={`${ options['composer'] === false ? 'hover:text-gray-400' : '' }`}>Composer</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['producer'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('producer')}
                                >
                                    <span className={`${ options['producer'] === false ? 'hover:text-gray-400' : '' }`}>Producer</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['audio engineer'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('audio engineer')}
                                >
                                    <span className={`${ options['audio engineer'] === false ? 'hover:text-gray-400' : '' }`}>Audio Engineer</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['lyricist'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('lyricist')}
                                >
                                    <span className={`${ options['lyricist'] === false ? 'hover:text-gray-400' : '' }`}>Lyricist</span>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <button onClick={handleBackPrompt} className='my-6 text-2xl hover:text-gray-400'>Back</button>
                                <button onClick={handleNextPrompt} className='my-6 text-2xl hover:text-gray-400'>Next</button>
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
                                    <span className={`${ options['rock'] === false ? 'hover:text-gray-400' : '' }`}>Rock</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['folk'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('folk')}
                                >
                                    <span className={`${ options['folk'] === false ? 'hover:text-gray-400' : '' }`}>Folk</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['jazz'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('jazz')}
                                >
                                    <span className={`${ options['jazz'] === false ? 'hover:text-gray-400' : '' }`}>Jazz</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['metal'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('metal')}
                                >
                                    <span className={`${ options['metal'] === false ? 'hover:text-gray-400' : '' }`}>Metal</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['pop'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('pop')}
                                >
                                    <span className={`${ options['pop'] === false ? 'hover:text-gray-400' : '' }`}>Pop</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['rap'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('rap')}
                                >
                                    <span className={`${ options['rap'] === false ? 'hover:text-gray-400' : '' }`}>Rap</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['hip hop'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('hip hop')}
                                >
                                    <span className={`${ options['hip hop'] === false ? 'hover:text-gray-400' : '' }`}>Hip Hop</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['funk'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('funk')}
                                >
                                    <span className={`${ options['funk'] === false ? 'hover:text-gray-400' : '' }`}>Funk</span>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <button onClick={handleBackPrompt} className='my-6 text-2xl hover:text-gray-400'>Back</button>
                                <button onClick={handleNextPrompt} className='my-6 text-2xl hover:text-gray-400'>Next</button>
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
                                    <span className={`${ options['vocals'] === false ? 'hover:text-gray-400' : '' }`}>Vocals</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['guitar'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('guitar')}
                                >
                                    <span className={`${ options['guitar'] === false ? 'hover:text-gray-400' : '' }`}>Guitar</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['bass'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('bass')}
                                >
                                    <span className={`${ options['bass'] === false ? 'hover:text-gray-400' : '' }`}>Bass</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['piano'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('piano')}
                                >
                                    <span className={`${ options['piano'] === false ? 'hover:text-gray-400' : '' }`}>Piano</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['drums'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('drums')}
                                >
                                    <span className={`${ options['drums'] === false ? 'hover:text-gray-400' : '' }`}>Drums</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['violin'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('violin')}
                                >
                                    <span className={`${ options['violin'] === false ? 'hover:text-gray-400' : '' }`}>Violin</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['cello'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('cello')}
                                >
                                    <span className={`${ options['cello'] === false ? 'hover:text-gray-400' : '' }`}>Cello</span>
                                </div>
                                <div
                                    className={`p-2 rounded-2xl cursor-pointer ${
                                        options['flute'] === true ?
                                        'border border-blue-500 bg-blue-200'
                                        : ''                                         
                                    }`}
                                    onClick={() => handleOptionClick('flute')}
                                >
                                    <span className={`${ options['flute'] === false ? 'hover:text-gray-400' : '' }`}>Flute</span>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <button onClick={handleBackPrompt} className='my-6 text-2xl hover:text-gray-400'>Back</button>
                                <button onClick={handleNextPrompt} className='my-6 text-2xl hover:text-gray-400'>Next</button>
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
                                <button onClick={handleBackPrompt} className='my-6 text-2xl hover:text-gray-400'>Back</button>
                                <button onClick={handleNextPrompt} className='my-6 text-2xl hover:text-gray-400'>Next</button>                            
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
                                    value={socialMedia.spotify}
                                    onChange={handleSocialMediaChange}
                                    />
                                </div>
                                <div className='flex justify-center py-2'>
                                    <input 
                                    className='border rounded-2xl text-lg fond-bold w-96 p-2'                                    
                                    type="text"
                                    name='soundcloud' 
                                    placeholder='Soundcloud'
                                    value={socialMedia.soundcloud}
                                    onChange={handleSocialMediaChange}
                                    />
                                </div>
                                <div className='flex justify-center py-2'>
                                    <input 
                                    className='border rounded-2xl text-lg fond-bold w-96 p-2'
                                    type="text" 
                                    name='instagram'
                                    placeholder='Instagram'
                                    value={socialMedia.instagram}
                                    onChange={handleSocialMediaChange}
                                    />
                                </div>
                                <div className='flex justify-center py-2'>
                                    <input 
                                    className='border rounded-2xl text-lg fond-bold w-96 p-2'
                                    type="text" 
                                    name='tiktok'
                                    placeholder='Tiktok'
                                    value={socialMedia.tiktok}
                                    onChange={handleSocialMediaChange}
                                    />
                                </div>
                                <div className='flex justify-center py-2'>
                                    <input 
                                    className='border rounded-2xl text-lg fond-bold w-96 p-2'
                                    type="text" 
                                    name='youtube'
                                    placeholder='Youtube'
                                    value={socialMedia.youtube}
                                    onChange={handleSocialMediaChange}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <button onClick={handleBackPrompt} className='my-6 text-2xl hover:text-gray-400'>Back</button>                
                                <button onClick={handleNextPrompt} className='my-6 text-2xl hover:text-gray-400'>Finish</button>
                            </div>
                        </>
                    ) : null
                }
                </div>
            </div>
        </>
    )
}