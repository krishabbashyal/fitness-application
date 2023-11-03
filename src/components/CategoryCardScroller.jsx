import React, { useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoryCardScroller = () => {
  const [allActive, setAllActive] = useState(true);
  const [chestActive, setChestActive] = useState(false);
  const [backActive, setBackActive] = useState(false);
  const [legsActive, setLegsActive] = useState(false);
  const [shouldersActive, setShouldersActive] = useState(false);
  const [armsActive, setArmsActive] = useState(false);
  const [absActive, setAbsActive] = useState(false);

  function disableAllCategories() {
    setAllActive(false)
    setChestActive(false)
    setBackActive(false)
    setLegsActive(false)
    setShouldersActive(false)
    setArmsActive(false)
    setAbsActive(false)
  }

  function setActiveCategory(category){
    disableAllCategories()
    category(true)
  }

  return (
    <div className="flex space-x-1 overflow-x-scroll pb-3">
      <CategoryCard onChildClick={() => setActiveCategory(setAllActive)} label="All" active={allActive}/>
      <CategoryCard onChildClick={() => setActiveCategory(setChestActive)} label="Chest" active={chestActive}/>
      <CategoryCard onChildClick={() => setActiveCategory(setBackActive)} label="Back" active={backActive}/>
      <CategoryCard onChildClick={() => setActiveCategory(setLegsActive)} label="Legs" active={legsActive}/>
      <CategoryCard onChildClick={() => setActiveCategory(setShouldersActive)} label="Shoulders" active={shouldersActive}/>
      <CategoryCard onChildClick={() => setActiveCategory(setArmsActive)} label="Arms" active={armsActive}/>
      <CategoryCard onChildClick={() => setActiveCategory(setAbsActive)} label="Abs" active={absActive}/>
    </div>
  );
};

export default CategoryCardScroller;
