import React from 'react'


const GetRoutines = (props) => {

  return (
    <div>
      <div className='border-2 mt-4'>
        <p className=' text-center text-xl font-medium border-b py-3'>{props.workoutTitle}</p>
        <div className='text-center flex flex-col space-y-2'>
          <p className='mt-4'>{props.exerciseOne}</p>
          <p className=''>{props.exerciseTwo}</p>
          <p className=''>{props.exerciseThree}</p>
          <p className=''>{props.exerciseFour}</p>
          <p className='pb-2'>{props.exerciseFive}</p>
        </div>
      </div>
    </div>
  )
}

export default GetRoutines