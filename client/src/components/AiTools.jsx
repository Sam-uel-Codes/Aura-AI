import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {

    const navigate = useNavigate();
    const user = useUser();

    return (
        <div className='px-4 sm:px-20 xl:px-32 my-24'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-4xl sm:text-[42px] font-semibold mb-4'>
                    Powerful AI Tools
                </h2>
                <p className='text-gray-500 max-w-xl mx-auto text-lg'>
                    Everything you need to create, enhance and optimize your content with cutting-edge AI Technology.
                </p>
            </div>

            <div className='flex flex-wrap mt-16 justify-center gap-8'>
                {AiToolsData.map((tool, index) => (

                    <div
                        key={index}
                        onClick={() => user && navigate(tool.path)}
                        className='bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer w-full sm:w-80 border border-gray-100 flex flex-col items-center text-center'
                    >
                        <div
                            className="w-16 h-16 p-4 rounded-2xl flex items-center justify-center mb-4 shadow-md"
                            style={{ background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})` }}
                        >
                            <tool.Icon className="text-white w-full h-full" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-700 capitalize mb-2">{tool.title}</h3>
                        <p className="text-sm text-gray-500">{tool.description}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default AiTools