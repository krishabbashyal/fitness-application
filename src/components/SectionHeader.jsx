import React from "react";

const SectionHeader = (props) => {
  return (
    <div className={`flex justify-between ${props.customClass || ""}`}>
      <h2 className="text-2xl font-medium py-0.5">{props.header}</h2>
      {props.seeAll ? <button className="font-medium py-0.5 mt-0.5 text-[#35C2C1]">See All</button> : null}
    </div>
  );
};

export default SectionHeader;
