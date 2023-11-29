export const BrowseWorkoutCard = ({ workoutTitle, workoutID, onCheckboxChange, isChecked }) => {
  return (
    <div className='w-full h-12 bg-slate-800 mb-1.5 rounded-lg text-white cursor-pointer flex items-center'>
      <input
        type="checkbox"
        className='ml-4 h-5 w-5'
        onChange={() => onCheckboxChange(workoutID)}
        checked={isChecked}
      />
      <p className='ml-2'>{workoutTitle}</p>
      <p className='ml-2'>{workoutID}</p>
    </div>
  );
};
