import React from "react";

const CategoryCard = (props) => {
  return (
    <div>
      <button onClick={props.onChildClick}>
        <div className={`${props.active ? "bg-[#475E88] w-24 h-[142px] rounded-lg text-center shadow-[0_2px_5px_1px_rgba(0,0,0,0.4)] mx-0.5" : "text-center w-[86px] h-[118px]"}`}>
          <div className={`${props.active ? "border-[3px] border-[#475E88] bg-[#D9D9D9] h-[108px] rounded-lg pt-2" : "bg-[#D9D9D9] h-[102px] w-full rounded-lg mt-[3px]"}`}></div>
          <p className={`${props.active ? "text-white font-medium mt-1" : " mt-1.5"}`}>{props.label}</p>
        </div>
      </button>
    </div>
  );
};


export default CategoryCard;
