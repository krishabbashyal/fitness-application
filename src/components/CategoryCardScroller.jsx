// import React, { useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoryCardScroller = () => {
  // const [allActive, setAllActive] = useState(true);
  // const [chestActive, setChestActive] = useState(false);
  // const [backActive, setBackActive] = useState(false);
  // const [legsActive, setLegsActive] = useState(false);
  // const [shouldersActive, setShouldersActive] = useState(false);
  // const [armsActive, setArmsActive] = useState(false);
  // const [absActive, setAbsActive] = useState(false);

  function toggleActive(){
    console.log("clicked")
  }

  return (
    <div className="flex space-x-1 overflow-x-scroll pb-3">
      <CategoryCard onClick={toggleActive} label="All" active={true}/>
      <CategoryCard onClick={toggleActive} label="Chest" active={true}/>
      <CategoryCard onClick={toggleActive} label="Back" active={true}/>
      <CategoryCard onClick={toggleActive} label="Legs" active={true}/>
      <CategoryCard onClick={toggleActive} label="Shoulders" active={false}/>
      <CategoryCard onClick={toggleActive} label="Arms" active={true}/>
      <CategoryCard onClick={toggleActive} label="Abs" active={true}/>
    </div>
  );
};

export default CategoryCardScroller;
