import React from 'react'

const Card = ({username}) => {
    console.log(username)
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
      <img
        src="https://imgs.search.brave.com/7A-hM-6AC7Y7S4_fyjHhAXDFjfKpVe5ghFSSuENymRY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/MDgxMDQzNi9waG90/by9tdW1iYWktaW5k/aWEtc2hhaC1ydWto/LWtoYW4tYXR0ZW5k/cy10aGUtcGF0aGFh/bi1maWxtLXN1Y2Nl/c3MtYmFzaC1vbi1q/YW51YXJ5LTMwLTIw/MjMtaW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWQyZGJN/ODRBOE9aWUpxcDBa/MzlUWjI4NmpTcF9s/akpJZllfMEtTWFRr/QjQ9"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          Read more
        </button>
      </div>
    </div>
  );
}

export default Card