import React from 'react';

const CurrentSet = ({
  exercise,

}) => {
  // You can add state and functions to handle the input changes if needed
  return (
    <div className='my-3'>
      <div className="bg-gray-800 pb-5 pt-1 rounded-lg max-w-sm mx-4 text-center">
      
        {/* Display exercises as a list */}
        <ul className="my-4">
          {exercise && <li className='text-white'>{exercise}</li>}
        </ul>
        <div className="flex flex-row space-x-4 justify-center items-center">
          <section>
            <input
              type="number"
              className="text-center text-black w-16 rounded text p-1 mr-2"
              placeholder="X"
            />
            <span className="rounded font-medium text-white">Reps</span>
          </section>
          <section>
            <input
              type="number"
              className="text-center w-16 text-black rounded text p-1 mr-2"
              placeholder="X"
            />
            <span className="rounded py-1 font-medium text-white">Lbs</span>
          </section>
        </div>
      
        {/* Placeholder for the last logged data, you can make this dynamic */}
        {/* <div className="text-gray-200 rounded mt-4">
          Last Logged: 8 x 180Lbs
        </div> */}
      
        <button className="bg-teal-600 font-medium py-2 w-3/5 rounded-lg mt-4">
          Log Set
        </button>
      </div>
    </div>
  );
};

export default CurrentSet;
