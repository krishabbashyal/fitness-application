import React, { useState, useEffect } from 'react';
import { supabase } from '../library/supabase';
import RoutineInfoCard from '../components/RoutineInfoCard';
import SectionHeader from '../components/SectionHeader';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const RoutinePage = () => {
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
      <div className="mx-4 mt-6">
        <SectionHeader header="Your Routine(s)" />
        {routines && routines.length > 0 ? (
          <div>
            {routines.map((routine) => (
              <RoutineInfoCard 
                key={routine.id} 
                workoutTitle={routine.workout_name} 
                exerciseOne={routine.exercise_one} 
                exerciseTwo={routine.exercise_two} 
                exerciseThree={routine.exercise_three} 
                exerciseFour={routine.exercise_four} 
                exerciseFive={routine.exercise_five} 
              />
            ))}
            <Link className="flex justify-center" to="/create_workout">
              <button className="rounded-md w-full p-4 bg-[#475E88] font-medium text-white mt-4">
                Create Another Workout
              </button>
            </Link>
          </div>
        ) : (
          <div className="bottom-1/2 flex flex-col justify-center absolute">
            <h1 className='text-center text-xl font-semibold'>Create your first workout</h1>
            <p className='text-center px-16 mt-1'>Your workout routines will show up here once you make them.</p>
            <Link className="flex justify-center" to="/create_workout">
              <button className="rounded-md p-3.5 px-6 mt-5 bg-[#1E232C] font-medium text-white">
                Create Workout
              </button>
            </Link>
          </div>
        )}
      </div>
      <NavBar activeButton="routines" />
    </div>
  );
};

export default RoutinePage;
