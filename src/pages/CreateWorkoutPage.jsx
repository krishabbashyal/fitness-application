import React, { useState } from "react";

import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";

const CreateWorkoutPage = () => {
  const [workoutName, setWorkoutName] = useState("");

  return (
    <div>
      <div className="mx-4 mt-10 pb-[108px]">
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
        <button className="w-full bg-[#475E88] text-white font-semibold h-14 rounded-lg mt-4" type="button">
          Continue
        </button>
      </div>
      <NavBar activeButton="routines" />
    </div>
  );
};

export default CreateWorkoutPage;
