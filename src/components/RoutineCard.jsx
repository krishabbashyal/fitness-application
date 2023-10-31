import React from "react";

const RoutineCard = () => {
  return (
    <div className="bg-[#475E88] text-white h-[142px] w-full px-4 rounded-lg shadow-[0_2px_5px_1px_rgba(0,0,0,0.4)]">
      <div>
        <h1 className="text-3xl font-semibold pt-6">Workout Name</h1>
        <p className="-mt-1.5">Muscle One, Muscle Two</p>
      </div>
      <div className="mt-5 flex justify-between">
        <div className="flex space-x-2">
          <img className="w-6" src="./icons/timeCircle.svg" alt="Time Circle" />
          <p className="text-sm mt-0.5">40 Mins</p>
        </div>
        <div>
          <button className="absolute right-10 top-[185px]">
            <img className="absolute left-4 top-3" src="./icons/StartIcon.svg" alt="Time Circle" />
            <img src="./icons/ButtonBackground.svg" alt="Time Circle" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoutineCard;
