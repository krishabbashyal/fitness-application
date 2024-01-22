import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

import NavBar from "../components/NavBar";

const CreateWorkoutPage = () => {
  const [workoutName, setWorkoutName] = useState("");
  const [exercise, setExerciseName] = useState("");
  const [exercisesList, setExerciseList] = useState([]);

  const addExercise = (newExercise) => {
    setExerciseList([...exercisesList, newExercise]);
  };

  useEffect(() => {
    console.log(exercisesList);
  }, [exercisesList]);

  return (
    <div>
      <div className="mx-4 mt-6 flex flex-col">
        <SectionHeader text="Your Training Plan" />
        <input
          type="text"
          className="mt-4 h-16 placeholder:text-center placeholder:text-xl text-center text-2xl font-medium"
          placeholder="Chest Day, Leg Day, etc."
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
      </div>
      <div className="bg-slate-200 py-5 rounded-t-2xl fixed bottom-20 w-full pb-8">
        <p className="text-center font-medium">Add Exersises</p>
        <div className="mx-4">
          <section className="mt-4 flex flex-col">
            <input className="h-11 text-center mb-4" type="text" placeholder="Exercise Title" value={exercise} onChange={(e) => setExerciseName(e.target.value)} />

            <button className="bg-blue-400 text-white font-semibold h-11 rounded-lg w-full" onClick={() => addExercise(exercise)}>
              Add Exercise
            </button>
            <section className="flex flex-row gap-1 mt-2 ">
              <button className="bg-[#982F2F] w-full text-white font-semibold h-11 rounded-lg">
                <Link to={"/routines"} className="w-full h-14">
                  <p>Cancel</p>
                </Link>
              </button>
              <button className="bg-[#475E88] w-full text-white font-semibold h-11 rounded-lg">Finish</button>
            </section>
          </section>
        </div>
      </div>
      <NavBar activeButton="routines" />
    </div>
  );
};

export default CreateWorkoutPage;
