import React from 'react'

function Card({item}) {
  return (
    <div className="flex flex-col items-center">
    <img
      className="w-full h-[104px] overflow-clip object-cover object-top rounded-lg"
      src={item?.imageurl}
      alt="icon"
    />
    <p className="text-zinc-300 text-[0.8rem] mt-1 capitalize px-1">
      {item?.name}
    </p>
  </div>
  )
}

export default Card