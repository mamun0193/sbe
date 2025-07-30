import React from 'react'
import { AnimatedCard } from '../../animations/CardHover'
function AboutCard({ title, content }) {
    return (
        <>
        <AnimatedCard className='p-4 max-w-2/5 mx-auto my-4 '>
            <div>
                <h2 className="text-3xl font-semibold text-green-400 mb-5 text-center">{title}</h2>
                <p className="text-gray-300 text-center mb-5">
                    {content}
                </p>
            </div>
        </AnimatedCard>
        </>
    )
}

export default AboutCard

