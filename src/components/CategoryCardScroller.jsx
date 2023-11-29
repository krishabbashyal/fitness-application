import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { supabase } from "../library/supabase";
import { BrowseWrk } from "./BrowseWrk";

const CategoryCardScroller = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [workoutList, setWorkoutList] = useState([]);

  const fetchAllWorkouts = async () => {
    const { data, error } = await supabase.from("exercises").select("workout_name");
    setWorkoutList(data);
  };

  const fetchCategoryWorkouts = async (category) => {
    const { data, error } = await supabase.from("exercises").select('workout_name').eq('targeted_muscle', category);
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

  return (
    <div>
      <div className="flex space-x-1 overflow-x-scroll pb-3">
        <CategoryCard onChildClick={() => activeCategoryChanged("All")} label="All" active={activeCategory === "All"} />
        <CategoryCard onChildClick={() => activeCategoryChanged("Chest")} label="Chest" active={activeCategory === "Chest"} />
        <CategoryCard onChildClick={() => activeCategoryChanged("Back")} label="Back" active={activeCategory === "Back"} />
        <CategoryCard onChildClick={() => activeCategoryChanged("Legs")} label="Legs" active={activeCategory === "Legs"} />
        <CategoryCard onChildClick={() => activeCategoryChanged("Shoulders")} label="Shoulders" active={activeCategory === "Shoulders"} />
        <CategoryCard onChildClick={() => activeCategoryChanged("Arms")} label="Arms" active={activeCategory === "Arms"} />
      </div>
      <div className="mt-2">
        {workoutList.map((data) => (
          <BrowseWrk workoutTitle={data.workout_name} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCardScroller;