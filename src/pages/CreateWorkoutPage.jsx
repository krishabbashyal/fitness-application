import React, { useState, useEffect } from "react";
import { supabase } from "../library/supabase";
import { BrowseWorkoutCard } from "../components/BrowseWorkoutCard";
import CategoryCard from "../components/CategoryCard";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";

const CreateWorkoutPage = () => {
  const [workoutName, setWorkoutName] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [workoutList, setWorkoutList] = useState([]);
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  const customRedirect = useNavigate();

  const fetchAllWorkouts = async () => {
    const { data, error } = await supabase.from("exercises").select();
    if (error) {
      console.error("Error fetching workouts:", error);
      return;
    }
    setWorkoutList(data);
  };

  const fetchCategoryWorkouts = async (category) => {
    const { data, error } = await supabase.from("exercises").select().eq("targeted_muscle", category);
    if (error) {
      console.error("Error fetching workouts:", error);
      return;
    }
    setWorkoutList(data);
  };

  useEffect(() => {
    if (activeCategory === "All") {
      fetchAllWorkouts();
    } else {
      fetchCategoryWorkouts(activeCategory);
    }
  }, [activeCategory]);

  const activeCategoryChanged = (category) => {
    setActiveCategory(category);
  };

  const handleCheckboxChange = (workoutID) => {
    setSelectedWorkouts((prevSelected) => {
      const isSelected = prevSelected.includes(workoutID);
      if (isSelected) {
        return prevSelected.filter(id => id !== workoutID);
      } else {
        return [...prevSelected, workoutID];
      }
    });
  };

  const handleSubmit = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    try {
      const { data, error } = await supabase
        .from("workouts")
        .insert({
          workout_name: workoutName,
          exercise_one: selectedWorkouts[0],
          exercise_two: selectedWorkouts[1],
          exercise_three: selectedWorkouts[2],
          exercise_four: selectedWorkouts[3],
          exercise_five: selectedWorkouts[4],
        })
        .eq("id", user.id);
      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Data inserted successfully:", data);
        customRedirect("/routines");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    console.log("Selected Workouts:", selectedWorkouts);
  }, [selectedWorkouts]);

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
        <div className="flex space-x-1 overflow-x-scroll pb-3">
          <CategoryCard onChildClick={() => activeCategoryChanged("All")} label="All" active={activeCategory === "All"} />
          <CategoryCard onChildClick={() => activeCategoryChanged("Chest")} label="Chest" active={activeCategory === "Chest"} />
          <CategoryCard onChildClick={() => activeCategoryChanged("Back")} label="Back" active={activeCategory === "Back"} />
          <CategoryCard onChildClick={() => activeCategoryChanged("Legs")} label="Legs" active={activeCategory === "Legs"} />
          <CategoryCard onChildClick={() => activeCategoryChanged("Shoulders")} label="Shoulders" active={activeCategory === "Shoulders"} />
          <CategoryCard onChildClick={() => activeCategoryChanged("Arms")} label="Arms" active={activeCategory === "Arms"} />
        </div>
        <div className="mt-4">
          {workoutList.map((data) => (
            <BrowseWorkoutCard
              key={data.workout_name}
              workoutTitle={data.workout_name}
              workoutID={data.id}
              onCheckboxChange={handleCheckboxChange}
              isChecked={selectedWorkouts.includes(data.id)}
            />
          ))}
        </div>
        <button className="w-full bg-[#475E88] text-white font-semibold h-14 rounded-lg mt-4" type="button" onClick={handleSubmit}>
          Continue
        </button>
      </div>
      <NavBar activeButton="routines" />
    </div>
  );
};

export default CreateWorkoutPage;
