import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";

const CreateWorkoutPage = () => {
  const [workoutName, setWorkoutName] = useState("");

  return (
    <div>
      <div className="mx-4 mt-6 pb-[108px]">
        <SectionHeader header="Create a new workout" />
        <section>
          <p className="mt-4">What should we call this workout?</p>
          <input
            className="w-full placeholder:text-[#8391A1] pl-3 h-[50px] rounded-lg mt-2 mb-5 border border-[#E8ECF4]"
            type="text"
            placeholder="Chest Day, Leg Day, etc."
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
          />
        </section>
        <div className="flex justify-end space-x-2">
        <button className="w-full bg-[#1E232C] text-white font-semibold h-14 rounded-lg mt-24" type="button">
          <Link to={"/routines"} className="w-full h-14 bottom-0">
            <p>Finish</p>
          </Link>
        </button>
        <button className="w-full bg-[#475E88] text-white font-semibold h-14 rounded-lg mt-24" type="button">Add Workout</button>
      </div>
      </div>
      <NavBar activeButton="routines" />
    </div>
  );
};

export default CreateWorkoutPage;
