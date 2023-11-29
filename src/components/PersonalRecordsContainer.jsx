import React from 'react'
import PersonalRecords from './PersonalRecords'

const PersonalRecordsContainer = () => {
  return (
    <div className='flex flex-row justify-around mt-4'>
      <PersonalRecords categoryLabel="Bench Press" categoryValue="185"/>
      <PersonalRecords categoryLabel="Shoulder Press" categoryValue="135"/>
      <PersonalRecords categoryLabel="Leg Press" categoryValue="315"/>
    </div>
  )
}

export default PersonalRecordsContainer