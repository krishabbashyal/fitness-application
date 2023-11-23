import React from 'react'

export const BrowseWorkoutCard = (props) => {
  return (
    <div className='w-full h-12 bg-slate-800 mb-1.5 rounded-lg text-white cursor-pointer'>
      <p className='ml-4 pt-3'>{props.workoutTitle}</p>
    </div>
  )
}
