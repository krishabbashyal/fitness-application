import React from "react";

const RoutineCard = () => {
  return (
    <div className="bg-[#475E88] text-white h-[142px] w-full px-4 rounded-lg">
      <div>
        <h1 className="text-3xl font-semibold pt-6">Workout Name</h1>
        <p>Muscle One, Muscle Two</p>
      </div>
      <div className="mt-5 flex justify-between">
        <div className="flex space-x-2">
          <img src="./public/icons/timeCircle.svg" alt="Time Circle" />
          <p className="absolute pl-5">40 Mins</p>
        </div>
        <div>
          <button>
            <img src="./public/icons/Button.svg" alt="Time Circle" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoutineCard;
