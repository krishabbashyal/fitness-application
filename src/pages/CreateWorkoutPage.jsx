import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import ErrorBanner from "../components/ErrorBanner";
import ExerciseSwipeable from "../components/ExerciseSwipeable";

import NavBar from "../components/NavBar";

const CreateWorkoutPage = () => {
  const [workoutName, setWorkoutName] = useState("");
  const [exercise, setExerciseName] = useState("");
  const [exercisesList, setExerciseList] = useState([]);
  const [titleError, setTitleError] = useState("");
  const [exerciseError, setExerciseError] = useState("");

  useEffect(() => console.log(`List:${exercisesList}`), [exercisesList])




  const validateTitle = (title) => {
    let cleanedTitle = title.replace(/\s+/g, " ").trim();
    if (cleanedTitle.length == 0) {
      setTitleError("Title can not be empty");
    } else {
      setTitleError("");
    }
  };

  const validateExercise = (title) => {
    let cleanedExercise = title.replace(/\s+/g, " ").trim();
  
    if (cleanedExercise.length === 0) {
      setExerciseError("Cannot Add Empty Exercise");
      return;
    }
  
    // Use functional update for the exercises list
    setExerciseList(prevExercises => {
      // Check if the exercise is already in the list
      if (prevExercises.includes(cleanedExercise)) {
        setExerciseError("Exercise has already been added.");
        return prevExercises; // Return previous state if exercise already exists
      }
  
      // Add the new exercise and clear errors
      setExerciseName("");
      setExerciseError("");
      return [...prevExercises, cleanedExercise]; // Return updated state
    });
  };
  

  return (
    <div>
      <div className="mx-4 mt-6 flex flex-col">
        <SectionHeader text="Your Training Plan" />
        <input
          type="text"
          className="mt-4 mb-2 h-12 placeholder:text-center placeholder:text-xl text-center text-2xl font-medium"
          placeholder="Chest Day, Leg Day, etc."
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
        {titleError.length > 0 && <ErrorBanner message={titleError} />}
      </div>

      <div className="mx-4">
        {exercisesList.length > 0 ? (
          exercisesList.map((exercise, index) => <ExerciseSwipeable key={index} payload={exercise} className="p-2 text-center border rounded my-2 py-24" />)
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-gray-500 py-24">No exercises added yet</p>
          </div>
        )}
      </div>

      <div className="bg-[#1E232C] py-5 pb-12 w-full">
        <p className="text-center font-medium text-white">Add Exersises</p>
        <div className="mx-4">
          <section className="mt-4 flex flex-col">
            {exerciseError.length > 0 && <ErrorBanner message={exerciseError} />}

            <input className="h-11 text-center mb-4 rounded-lg" type="text" placeholder="Exercise Title" value={exercise} onChange={(e) => setExerciseName(e.target.value)} />

            <button className="text-emerald-500 font-semibold w-full" onClick={() => validateExercise(exercise)}>
              Add Exercise
            </button>
            <section className="flex flex-row gap-1 mt-4 ">
              <button className="bg-[#982F2F] w-full text-white font-semibold h-11 rounded-lg">
                <Link to={"/routines"} className="w-full h-14">
                  <p>Cancel</p>
                </Link>
              </button>
              <button
                className="bg-[#475E88] w-full text-white font-semibold h-11 rounded-lg"
                onClick={() => {
                  validateTitle(workoutName);
                }}>
                Finish
              </button>
            </section>
          </section>
        </div>
      </div>
      <NavBar activeButton="routines" />
    </div>
  );
};

export default CreateWorkoutPage;
