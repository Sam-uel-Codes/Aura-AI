import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plan = () => {
    return (
        <div className='px-4 sm:px-20 xl:px-32 py-24 bg-gray-50'>
            <div className='text-center mb-12'>
                <h2 className='text-slate-700 text-4xl sm:text-[42px] font-semibold mb-4'>
                    Choose a plan that's perfect for you
                </h2>
                <p className='text-gray-500 max-w-xl mx-auto text-lg'>
                    Scale your creativity as you grow. Start with our free plan and upgrade anytime to unlock more power.
                </p>
            </div>

            <div className='mt-8 max-sm:mx-8'>
                <PricingTable />
            </div>
        </div>
    )
}

export default Plan