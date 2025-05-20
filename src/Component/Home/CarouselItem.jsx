import React from 'react'
function CarouselItem({image,titel}) {
  return (
    <div className='flex flex-col justify-center items-center'>

        <img className='W-[10rem] h-[10rem] lg:h-[10rem] lg:w-[10rem] rounded-full object-center object-cover' src={image} alt="" />
      <span className='py-5 font-semibold text-xl text-gray-300'>{titel}</span>
    </div>
  )
}

export default CarouselItem
