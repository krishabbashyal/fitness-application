import React from 'react'
import PersonalRecords from './PersonalRecords'

const PersonalRecordsContainer = () => {
  return (
    <div className='flex flex-row justify-around mt-4'>
      <PersonalRecords categoryLabel="Bench Press"/>
      <PersonalRecords categoryLabel="Shoulder Press"/>
      <PersonalRecords categoryLabel="Leg Press"/>
    </div>
  )
}

export default PersonalRecordsContainer