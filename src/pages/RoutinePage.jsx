import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import RoutineInfoCard from "../components/RoutineInfoCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../library/supabase";

const RoutinePage = () => {
  const [routines, setRoutines] = useState([]);

  const fetchRoutines = async () => {
    const { data, error } = await supabase.from("workouts").select();
    if (error) {
      console.error("Error fetching routines:", error);
      return;
    }
    console.log(data);
    setRoutines(data);
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  return (
    <div>
      <div className="mx-4 mt-6">
        <SectionHeader header="Your Workouts" />
        {routines && routines.length > 0 ? (
          <div>
            {routines.map((routine) => (
              <RoutineInfoCard key={routine.id} workoutTitle={routine.workout_name} exerciseOne={routine.exercise_one} exerciseTwo={routine.exercise_two} exerciseThree={routine.exercise_three} exerciseFour={routine.exercise_four} exerciseFive={routine.exercise_five} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center space-y-4 m-6">
            <p>When you create a workout it will show up here</p>
            <Link className="flex justify-center" to="/create_workout">
              <button className="rounded-md w-full p-4 bg-[#475E88] font-medium text-white">Create Workout</button>
            </Link>
          </div>
        )}
      </div>
      <NavBar activeButton="routines" />
    </div>
  );
};

export default RoutinePage;
