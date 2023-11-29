import React from 'react'

const PersonalRecords = (props) => {
  return (
    <div className='flex flex-col'>
      <div className='w-28 h-28 flex bg-[#1E232C] text-white rounded-full items-center justify-center '>
        <p className='text-2xl font-medium border-b '>{props.categoryValue} Lbs</p>
      </div>
      <div className='text-center mt-1'>
        <p>{props.categoryLabel}</p>
      </div>
    </div>
  )
}

export default PersonalRecords