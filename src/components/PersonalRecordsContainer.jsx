import React from 'react'
import PersonalRecords from './PersonalRecords'

const PersonalRecordsContainer = () => {
  return (
    <div className='flex flex-row justify-around'>
      <PersonalRecords/>
      <PersonalRecords/>
      <PersonalRecords/>
    </div>
  )
}

export default PersonalRecordsContainer