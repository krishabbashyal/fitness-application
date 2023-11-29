export const BrowseWrk = ({ workoutTitle, workoutID}) => {
  return (
    <div className='w-full h-12 bg-slate-800 mb-1.5 rounded-lg text-white cursor-pointer flex items-center'>
      <p className='ml-2'>{workoutTitle}</p>
      <p className='ml-2'>{workoutID}</p>
    </div>
  );
};
