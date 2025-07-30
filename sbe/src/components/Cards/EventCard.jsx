import React from 'react'
import { AnimatedButton } from '../../animations/ButtonAnimations'
function EventCard({ title, content, buttonText,  variant="accent", animation="expand"}) {
    return (
        <>
            <div className="bg-black/40 backdrop-blur shadow-md hover:shadow-lg transition-all duration-300 rounded-lg p-5 max-w-xs w-full  hover:scale-105  border border-gray-700 h-1/10">
                <h4 className="text-2xl font-semibold mb-4 text-center text-green-400">{title}</h4>
                <p className="text-gray-300 mb-4 text-center">{content}</p>
                <div className=" text-amber-50 duration-300 text-center">
                    <AnimatedButton to="/events" variant={variant} animation={animation} >
                        {buttonText}
                    </AnimatedButton>
                </div>
            </div>
        </>

    )
}

export default EventCard