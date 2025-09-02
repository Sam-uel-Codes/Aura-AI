import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { dummyPublishedCreationData } from '../assets/assets';
import { Heart } from 'lucide-react';

const Community = () => {
    const [creations, setCreations] = useState([]);
    const { user } = useUser();

    const fetchCreations = async () => {
        setCreations(dummyPublishedCreationData);
    };

    useEffect(() => {
        if (user) {
            fetchCreations();
        }
    }, [user]);

    const isLikedByUser = (likes) => {
        return likes.includes(user.id);
    };

    return (
        <div className='flex-1 h-full flex flex-col gap-4 p-6'>
            <h1 className='text-2xl font-semibold text-slate-700'>Community Creations</h1>
            <div className='bg-white h-full w-full rounded-xl p-4 overflow-y-scroll'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {creations.map((creation) => (
                        <div key={creation.id} className='relative group inline-block w-full'>
                            <img src={creation.content} alt={creation.prompt} className='w-full h-full object-cover rounded-lg' />

                            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <p className='text-white text-sm'>{creation.prompt}</p>
                                <div className='flex gap-2 items-center text-white mt-2'>
                                    <p>{creation.likes.length}</p>
                                    <Heart
                                        className={`w-5 h-5 hover:scale-110 cursor-pointer ${
                                            isLikedByUser(creation.likes) ? 'fill-red-500 text-red-600' : 'text-white'
                                        }`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Community;