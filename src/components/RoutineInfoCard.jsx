import React from 'react'


const GetRoutines = (props) => {

  return (
    <div>
      <p className='ml-2'>{props.workoutTitle}</p>
      <p className='ml-2'>{props.exerciseOne}</p>
      <p className='ml-2'>{props.exerciseTwo}</p>
      <p className='ml-2'>{props.exerciseThree}</p>
      <p className='ml-2'>{props.exerciseFour}</p>
      <p className='ml-2'>{props.exerciseFive}</p>


    </div>
  )
}

export default GetRoutines