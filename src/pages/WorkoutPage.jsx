import React, { useState, useEffect } from "react";
import TimerComponent from "../components/Timer";
import { Link } from "react-router-dom";
import { supabase } from "../library/supabase";
import NavBar from "../components/NavBar";
import CurrentSet from "../components/CurrentSet";

const WorkoutPage = () => {
  const [routines, setRoutines] = useState([]);

  // Function to fetch the name of an exercise by its ID
  const fetchExerciseNameById = async (exerciseId) => {
    const { data, error } = await supabase
      .from('exercises')
      .select('workout_name')
      .eq('id', exerciseId)
      .single();

    if (error) {
      console.error('Error fetching exercise name:', error);
      return '';
    }

    return data.workout_name;
  };

  // Function to fetch all routines and replace exercise IDs with names
  const fetchRoutinesWithNames = async () => {
    let { data: routines, error } = await supabase.from('workouts').select('*');

    if (error) {
      console.error('Error fetching routines:', error);
      return;
    }

    // Map over each routine to replace exercise IDs with names
    const routinesWithNames = await Promise.all(routines.map(async (routine) => {
      return {
        ...routine,
        exercise_one: await fetchExerciseNameById(routine.exercise_one),
        exercise_two: await fetchExerciseNameById(routine.exercise_two),
        exercise_three: await fetchExerciseNameById(routine.exercise_three),
        exercise_four: await fetchExerciseNameById(routine.exercise_four),
        exercise_five: await fetchExerciseNameById(routine.exercise_five),
      };
    }));

    setRoutines(routinesWithNames);
  };

  useEffect(() => {
    fetchRoutinesWithNames();
  }, []);

  return (
    <div>
      <div className="grid justify-center mt-5">
        <div className="flex flex-col justify-center mt-4 mb-2">
          <p>Duration</p>
          <TimerComponent />
        </div>
        <div className="rounded-lg h-[650px] w-[23.5rem] overflow-y-scroll">
          {routines.map((routine, routineIndex) => (
            <div key={routineIndex} className="mb-6">
              <h1 className="text-center text-xl font-semibold border-b border-gray-300 pb-3 mt-2">
                {routine.workout_name}
              </h1>
              {/* Iterate over each exercise and display a CurrentSet component */}
              {[routine.exercise_one, routine.exercise_two, routine.exercise_three, routine.exercise_four, routine.exercise_five].map((exercise, exerciseIndex) => (
                exercise ? <CurrentSet key={exerciseIndex} exercise={exercise} /> : null
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to={"/dashboard"}>
            <button className="rounded-md p-4 mt-3 bg-[#475E88] font-medium text-white">Finish Workout</button>
          </Link>
        </div>
      </div>
      <NavBar activeButton="dashboard" />
    </div>
  );
};

export default WorkoutPage;
