import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import ErrorBanner from "../components/ErrorBanner";
import SwipeableElement from "../components/SwipeableElement";


import NavBar from "../components/NavBar";

const CreateWorkoutPage = () => {
  const [workoutName, setWorkoutName] = useState("");
  const [exercise, setExerciseName] = useState("");
  const [exercisesList, setExerciseList] = useState([]);
  const [titleError, setTitleError] = useState("");
  const [exerciseError, setExerciseError] = useState("");

  useEffect(() => console.log(`List:${exercisesList}`), [exercisesList]);

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

    if (exercisesList.length >= 8){
      setTitleError("Limit of 8 exercises per workout")
      return;
    }

    // Use functional update for the exercises list
    setExerciseList((prevExercises) => {
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
        <SectionHeader text="Create new workout" />
        <input
          type="text"
          className="mt-4 mb-2 h-12 placeholder:text-center placeholder:text-xl text-center text-2xl font-medium"
          placeholder="Chest Day, Leg Day, etc."
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
        {titleError.length > 0 && <ErrorBanner message={titleError} />}
      </div>

      <div className="mx-4 overflow-scroll max-h-[468px] pb-36">
        {exercisesList.length > 0 ? (
          exercisesList.map((exercise, index) => (
            <SwipeableElement key={index} workoutTitle={exercise}/>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <p className="text-gray-500 py-24">No exercises added yet</p>
          </div>
        )}
      </div>

      <div className="bg-[#1E232C] absolute bottom-20 py-5 pb-20 w-full rounded-t-xl">
        <p className="text-center font-medium text-white mt-2"> Add Exercises</p>
        <div className="mx-4">
          <section className="mt-4 flex flex-col">
            {exerciseError.length > 0 && <ErrorBanner message={exerciseError} />}

            <div className="flex gap-1">
              <input
                className="h-11 text-center mb-4 rounded-lg w-full"
                type="text"
                placeholder="Exercise Title"
                value={exercise}
                onChange={(e) => setExerciseName(e.target.value)}
              />
              <button className="bg-green-400 h-11 w-14 rounded-lg" onClick={() => validateExercise(exercise)}>
                <p className="font-semibold text-xl">+</p>
              </button>
            </div>

            <section className="absolute bottom-7 flex w-full -mx-4">
              <button className="text-[#982F2F] mx-4 w-full font-semibold h-11 rounded-lg">
                <Link to={"/routines"} className="w-full h-14">
                  <p>Cancel</p>
                </Link>
              </button>
              <button
                className="text-[#475E88] w-full mx-4 font-semibold h-11 rounded-lg"
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
