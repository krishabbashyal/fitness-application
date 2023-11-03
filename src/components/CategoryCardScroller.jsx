import React, { useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoryCardScroller = () => {
  // const [allActive, setAllActive] = useState(true);
  // const [chestActive, setChestActive] = useState(false);
  // const [backActive, setBackActive] = useState(false);
  // const [legsActive, setLegsActive] = useState(false);
  // const [shouldersActive, setShouldersActive] = useState(false);
  // const [armsActive, setArmsActive] = useState(false);
  // const [absActive, setAbsActive] = useState(false);

  const toggleActive = () => {
    console.log("clicked")
  };

  return (
    <div className="flex space-x-1 overflow-x-scroll pb-3">
      <CategoryCard label="All" active={true} onClick={toggleActive}/>
      <CategoryCard label="Chest" active={true} onClick={toggleActive}/>
      <CategoryCard label="Back" active={true} onClick={toggleActive}/>
      <CategoryCard label="Legs" active={true} onClick={toggleActive}/>
      <CategoryCard label="Shoulders" active={false} onClick={toggleActive}/>
      <CategoryCard label="Arms" active={true} onClick={toggleActive}/>
      <CategoryCard label="Abs" active={true} onClick={toggleActive}/>
    </div>
  );
};

export default CategoryCardScroller;
