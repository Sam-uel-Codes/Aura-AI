import React, {useState} from 'react'
import Markdown from 'react-markdown'

const CreationItems = ({item}) => {

    {/*Making States so we can get data for each of the creation.*/}
    const [expanded, setExpanded] = useState(false);
 
    return (
    <div onClick={() => setExpanded(!expanded)} className='p-4 max-w-5xl bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-sm transition-shadow duration-200'>
        <div className='flex justify-between items-center gap-4'>
            <div className='flex-1'>
                <h2 className='text-base text-gray-800 font-medium'>{item.prompt}</h2>
                <p className='text-sm text-gray-500 mt-1'>{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>
            </div>
            <button className='px-4 py-1 text-sm rounded-full font-semibold capitalize bg-[#EFF6FF] text-[#1E40AF]'>
                {item.type}
            </button>
        </div>
        {
            expanded &&(
                <div className='mt-4 pt-4 border-t border-gray-100 animate-fade-in'>
                    {item.type === 'image' ? (
                        <div className="flex items-center justify-center"> 
                            <img src={item.content} alt="AI Generated Image" className='w-full max-w-xl rounded-lg shadow-md'/>
                        </div>
                    ):
                    (
                        <div className='p-4 text-gray-700 bg-gray-50 rounded-lg whitespace-pre-line leading-relaxed text-sm overflow-x-hidden'> 
                            <div className='reset-tw'>
                                <Markdown>{item.content}</Markdown>
                            </div>
                        </div>
                    )}
                </div>
            ) 
        }
    </div>
  )
}

export default CreationItems