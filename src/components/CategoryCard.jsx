import React from "react";

const CategoryCard = (props) => {
  return (
    <div>
      <div className={`${props.active ? "bg-[#475E88] w-[76px] h-[118px] rounded-lg text-center shadow-[0_2px_5px_1px_rgba(0,0,0,0.4)] mx-0.5" : "text-center w-[72px] h-[118px]"}`}>
        <div className={`${props.active ? "border-2 border-[#475E88] bg-[#D9D9D9] h-[88px] rounded-lg pt-2" : "bg-[#D9D9D9] h-[85px] w-[72px] rounded-lg mt-0.5"}`}></div>
        <p className={`${props.active ? "text-white font-medium text-xs mt-1" : "text-xs mt-1.5"}`}>{props.label}</p>
      </div>
    </div>
  );
};


export default CategoryCard;
