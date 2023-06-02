import React from 'react'

export const WorkCard = ({role, description, workTime, company}) => {
  return (
    <div className='flex flex-col items-start ml-4'>
        <div className='flex flex-row justify-center items-center'>
        <h3 className='font-bold pr-3'>{company}</h3>
        <p>{workTime}</p>
        </div>
    </div>
  )
}
