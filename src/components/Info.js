import React from 'react';
import "../styles/info.css"

export const Info = () => {
  return (
    <div className='flex flex-1 flex-col items-start'>
      <div className='flex flex-col justify-start items-start ml-[20%] pt-[10%]'>
      <h1>Hi,  my name is</h1>
      <h1 className='text-white text-6xl py-3'>Stefano Cutri.</h1>
      <h1 className='text-[#8892b0] text-6xl'>A Frontend Developer.</h1>
      <p className='w-[50%] text-[#8892b0]  mt-3'>I'm a Junior Software Engineer specializing in building Frontend Applications. Currently, I'm looking for new oportunities to keep training my skills that you can see <a className='p-0' href='https://github.com/stefanocutri'>here.</a></p>
      </div>
    </div>
    
  )
}