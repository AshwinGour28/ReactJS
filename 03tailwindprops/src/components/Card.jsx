import React from 'react'

function Card({username, role}) {
    // console.log("role ", role);
    return (
        <div className="bg-white rounded-xl flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
            <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://static.vecteezy.com/system/resources/thumbnails/057/263/804/small/a-young-south-asian-woman-smiling-brightly-holding-a-backpack-exuding-confidence-and-warmth-photo.JPG" alt="" />
            <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg font-semibold text-black">{username}</p>
                    <p className="font-medium text-gray-500">{role}</p>
                </div>
                <button className="border-purple-200  text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                    Message
                </button>
            </div>
        </div>
    )
}

export default Card;