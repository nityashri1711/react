import React from 'react'

function Card({username, piclink, pagelink}) {
  return (
    <div>
        <div className="max-w-xs rounded-md shadow-md bg-gradient-to-b from-purple-800 to-pink-700 text-gray-100 mt-5 md:ml-10">
        <img
          src={piclink}
          alt=""
          className="p-2 object-cover object-center w-full rounded-t-md h-72 "
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button 
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            <a className='text-white hover:text-blue-200' href={pagelink} target='_blank'>Visit</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card