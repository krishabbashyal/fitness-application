import React, { useState } from "react";
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

    if (exercisesList.includes(cleanedExercise)) {
      setExerciseError("Exercise has already been added.")
      return;
    }

    if (cleanedExercise.length == 0) {
      setExerciseError("Cannot Add Empty Exercise");
      return
    } 

    setExerciseList([...exercisesList, cleanedExercise]);
    setExerciseName("");
    setExerciseError("");
    }



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
          exercisesList.map((exercise, index) => (
            <ExerciseSwipeable key={index} payload={exercisesList} className="p-2 text-center border rounded my-2"/>
          ))
        ) : (
          <div>
            <p className="text-center mt-36 text-gray-400">No exercises added yet</p>
          </div>
        )}
      </div>

      <div className="bg-slate-200 py-5 rounded-t-2xl fixed bottom-20 w-full pb-8">
        <p className="text-center font-medium">Add Exersises</p>
        <div className="mx-4">
          <section className="mt-4 flex flex-col">
            {exerciseError.length > 0 && <ErrorBanner message={exerciseError} />}

            <input className="h-11 text-center mb-4" type="text" placeholder="Exercise Title" value={exercise} onChange={(e) => setExerciseName(e.target.value)} />

            <button className="bg-blue-400 text-white font-semibold h-11 rounded-lg w-full" onClick={() => validateExercise(exercise)}>
              Add Exercise
            </button>
            <section className="flex flex-row gap-1 mt-2 ">
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
