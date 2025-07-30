import React from 'react'

function TeamCard({ image = "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740", name = "Abhay Bhusan", position = "President" }) {
    return (
        <div>
            <div className="bg-black/50 backdrop-blur border-gray-600 border-2 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 w-[17rem] ">
                <div className="flex justify-center">
                    <img src={image} alt={name} className="aspect-[3/4] h-45 object-cover rounded-md mb-5" />
                </div>
                <h4 className="text-3xl font-bold text-gray-200 font-serif mb-4">{name}</h4>
                <p className="text-green-500 mb-3 text-2xl font-semibold font-serif ">{position}</p>
            </div>
        </div>
    )
}

export default TeamCard