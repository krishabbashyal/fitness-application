import React from "react";

const RoutineCard = () => {
  return (
    <div className="bg-[#475E88] text-white h-40 w-full px-4 rounded-lg shadow-[0_2px_5px_1px_rgba(0,0,0,0.4)] mb-4">
      <div>
        <h1 className="text-[32px] font-semibold pt-6">Workout Name</h1>
        <p className="-mt-1.5 text-lg">Muscle One, Muscle Two</p>
      </div>
      <div className="mt-5 flex justify-between">
        <div className="flex space-x-2">
          <img className="w-6" src="./icons/timeCircle.svg" alt="Time Circle" />
          <p className="">40 Mins</p>
        </div>
        <div>
          <button className="absolute bg-white text-black border-[4px] h-[52px] w-[52px] border-[#35C2C1] p-2 right-10 top-[196px] rounded-full">
          <img className="w-5 m-auto mr-0.5" src="./icons/StartIcon.svg" alt="Time Circle" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoutineCard;
